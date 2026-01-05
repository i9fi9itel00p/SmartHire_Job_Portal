import { X, Upload, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
  company: string;
}

export default function ApplyModal({ isOpen, onClose, jobTitle, company }: ApplyModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setResume(null);
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Application Submitted!</h3>
            <p className="text-gray-600">We'll get back to you soon.</p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Apply for {jobTitle}</h2>
            <p className="text-gray-600 mb-6">{company}</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Resume *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <label className="cursor-pointer">
                    <span className="text-blue-600 hover:text-blue-700 font-medium">
                      Choose file
                    </span>
                    <input
                      type="file"
                      required
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => setResume(e.target.files?.[0] || null)}
                      className="hidden"
                    />
                  </label>
                  <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                  {resume && (
                    <p className="text-sm text-green-600 mt-2">{resume.name}</p>
                  )}
                </div>
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
