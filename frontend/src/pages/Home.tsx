import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, TrendingUp } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import JobCard from '../components/JobCard';
import { jobsData, categories } from '../data/jobsData';

export default function Home() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');

  const handleSearch = (searchKeyword: string, searchLocation: string, searchType: string) => {
    const params = new URLSearchParams();
    if (searchKeyword) params.append('keyword', searchKeyword);
    if (searchLocation) params.append('location', searchLocation);
    if (searchType) params.append('type', searchType);
    navigate(`/jobs?${params.toString()}`);
  };

  const featuredJobs = jobsData.slice(0, 6);

  return (
    <div>
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Find Your Dream Job Today
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover thousands of opportunities from top companies worldwide
            </p>
          </div>

          <SearchBar
            onSearch={handleSearch}
            keyword={keyword}
            location={location}
            type={type}
            setKeyword={setKeyword}
            setLocation={setLocation}
            setType={setType}
          />

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Popular Searches:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Frontend Developer', 'Marketing Manager', 'UI/UX Designer', 'Data Scientist', 'Product Manager'].map((term) => (
                <button
                  key={term}
                  onClick={() => {
                    setKeyword(term);
                    handleSearch(term, '', '');
                  }}
                  className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm hover:bg-blue-600 hover:text-white transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-gray-600">Explore jobs by your preferred industry</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => navigate(`/jobs?category=${category.name}`)}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600">{category.count} jobs</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Jobs</h2>
              <p className="text-gray-600">Top opportunities picked for you</p>
            </div>
            <button
              onClick={() => navigate('/jobs')}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <span>View All</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-white mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Ready to Find Your Next Role?</h2>
              <p className="text-blue-100 text-lg">
                Join thousands of professionals finding their perfect job match
              </p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => navigate('/jobs')}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center space-x-2"
              >
                <TrendingUp className="w-5 h-5" />
                <span>Find Jobs</span>
              </button>
              <button
                onClick={() => navigate('/post-job')}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Post a Job
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
