import { MapPin, Briefcase, DollarSign, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Job } from '../data/jobsData';

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <Link to={`/jobs/${job.id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 hover:border-blue-200">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
              {job.logo}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                {job.title}
              </h3>
              <p className="text-gray-600">{job.company}</p>
            </div>
          </div>
          <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
            {job.type}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="w-4 h-4 mr-2" />
            {job.location}
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <DollarSign className="w-4 h-4 mr-2" />
            {job.salary}
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <Briefcase className="w-4 h-4 mr-2" />
            {job.experience}
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <Clock className="w-4 h-4 mr-2" />
            {job.postedDate}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {job.skills.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
            >
              {skill}
            </span>
          ))}
          {job.skills.length > 3 && (
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium">
              +{job.skills.length - 3} more
            </span>
          )}
        </div>

        <p className="text-gray-600 text-sm line-clamp-2">
          {job.description}
        </p>
      </div>
    </Link>
  );
}
