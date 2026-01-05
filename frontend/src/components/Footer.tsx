import { Briefcase, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 text-2xl font-bold text-white mb-4">
              <Briefcase className="w-8 h-8" />
              <span>JobPortal</span>
            </div>
            <p className="text-sm">
              Find your dream job or hire top talent. Connect with opportunities worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">For Candidates</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/jobs" className="hover:text-white transition-colors">Browse Jobs</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Job Alerts</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Career Advice</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Resume Builder</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">For Employers</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/post-job" className="hover:text-white transition-colors">Post a Job</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Browse Candidates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Employer Resources</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2024 JobPortal. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
