import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Briefcase, DollarSign, Clock, ArrowLeft, Building2 } from 'lucide-react';
import ApplyModal from '../components/ApplyModal';
import { jobsData } from '../data/jobsData';

export default function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const job = jobsData.find((j) => j.id === id);

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Job Not Found</h2>
          <button
            onClick={() => navigate('/jobs')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Browse All Jobs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Jobs</span>
          </button>

          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-3xl">
                  {job.logo}
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{job.title}</h1>
                  <div className="flex items-center space-x-2 text-gray-600 mt-2">
                    <Building2 className="w-5 h-5" />
                    <span className="text-lg">{job.company}</span>
                  </div>
                </div>
              </div>
              <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full font-medium">
                {job.type}
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="flex items-center text-gray-700">
                <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                <div>
                  <p className="text-xs text-gray-500">Location</p>
                  <p className="font-medium">{job.location}</p>
                </div>
              </div>
              <div className="flex items-center text-gray-700">
                <DollarSign className="w-5 h-5 mr-2 text-blue-600" />
                <div>
                  <p className="text-xs text-gray-500">Salary</p>
                  <p className="font-medium">{job.salary}</p>
                </div>
              </div>
              <div className="flex items-center text-gray-700">
                <Briefcase className="w-5 h-5 mr-2 text-blue-600" />
                <div>
                  <p className="text-xs text-gray-500">Experience</p>
                  <p className="font-medium">{job.experience}</p>
                </div>
              </div>
              <div className="flex items-center text-gray-700">
                <Clock className="w-5 h-5 mr-2 text-blue-600" />
                <div>
                  <p className="text-xs text-gray-500">Posted</p>
                  <p className="font-medium">{job.postedDate}</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Job Description</h2>
              <p className="text-gray-700 leading-relaxed">{job.description}</p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Responsibilities</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Collaborate with cross-functional teams to deliver high-quality solutions</li>
                <li>Write clean, maintainable, and well-documented code</li>
                <li>Participate in code reviews and contribute to team knowledge sharing</li>
                <li>Stay up-to-date with industry trends and best practices</li>
                <li>Mentor junior team members and contribute to team growth</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Qualifications</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Strong problem-solving and analytical skills</li>
                <li>Excellent communication and teamwork abilities</li>
                <li>Self-motivated with ability to work independently</li>
                <li>Bachelor's degree in relevant field or equivalent experience</li>
                <li>Passion for learning and continuous improvement</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Required Skills</h2>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Job Overview</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Category</p>
                  <p className="font-medium text-gray-900">{job.category}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Job Type</p>
                  <p className="font-medium text-gray-900">{job.type}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Experience Level</p>
                  <p className="font-medium text-gray-900">{job.experience}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Salary Range</p>
                  <p className="font-medium text-gray-900">{job.salary}</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="font-semibold text-gray-900 mb-2">Interested in this role?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Apply now and take the next step in your career journey!
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <ApplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        jobTitle={job.title}
        company={job.company}
      />
    </div>
  );
}
