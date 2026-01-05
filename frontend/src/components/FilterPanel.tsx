import { Filter } from 'lucide-react';

interface FilterPanelProps {
  selectedType: string;
  selectedLocation: string;
  salaryRange: string;
  onTypeChange: (type: string) => void;
  onLocationChange: (location: string) => void;
  onSalaryChange: (salary: string) => void;
  onClearFilters: () => void;
}

export default function FilterPanel({
  selectedType,
  selectedLocation,
  salaryRange,
  onTypeChange,
  onLocationChange,
  onSalaryChange,
  onClearFilters
}: FilterPanelProps) {
  const jobTypes = ['Full-time', 'Part-time', 'Internship', 'Remote'];
  const locations = ['San Francisco, CA', 'New York, NY', 'Remote', 'Austin, TX', 'Boston, MA', 'Chicago, IL', 'Seattle, WA', 'Los Angeles, CA', 'Miami, FL'];
  const salaryRanges = ['0-50k', '50k-80k', '80k-120k', '120k+'];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl font-semibold text-gray-900">Filters</h2>
        </div>
        <button
          onClick={onClearFilters}
          className="text-sm text-blue-600 hover:text-blue-700 font-medium"
        >
          Clear All
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Job Type</h3>
          <div className="space-y-2">
            {jobTypes.map((type) => (
              <label key={type} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="jobType"
                  value={type}
                  checked={selectedType === type}
                  onChange={(e) => onTypeChange(e.target.value)}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-700">{type}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="border-t pt-6">
          <h3 className="font-semibold text-gray-900 mb-3">Location</h3>
          <select
            value={selectedLocation}
            onChange={(e) => onLocationChange(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Locations</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>

        <div className="border-t pt-6">
          <h3 className="font-semibold text-gray-900 mb-3">Salary Range</h3>
          <div className="space-y-2">
            {salaryRanges.map((range) => (
              <label key={range} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="salary"
                  value={range}
                  checked={salaryRange === range}
                  onChange={(e) => onSalaryChange(e.target.value)}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-700">${range}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
