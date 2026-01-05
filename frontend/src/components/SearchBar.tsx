import { Search, MapPin, Briefcase } from 'lucide-react';

interface SearchBarProps {
  onSearch: (keyword: string, location: string, type: string) => void;
  keyword: string;
  location: string;
  type: string;
  setKeyword: (value: string) => void;
  setLocation: (value: string) => void;
  setType: (value: string) => void;
}

export default function SearchBar({
  onSearch,
  keyword,
  location,
  type,
  setKeyword,
  setLocation,
  setType
}: SearchBarProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(keyword, location, type);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-4 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Job title or keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="relative">
          <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
          >
            <option value="">All Types</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Internship">Internship</option>
            <option value="Remote">Remote</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2"
        >
          <Search className="w-5 h-5" />
          <span>Search</span>
        </button>
      </div>
    </form>
  );
}
