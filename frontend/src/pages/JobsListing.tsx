import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import JobCard from '../components/JobCard';
import FilterPanel from '../components/FilterPanel';
import SearchBar from '../components/SearchBar';
import { jobsData } from '../data/jobsData';

export default function JobsListing() {
  const [searchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(searchParams.get('keyword') || '');
  const [location, setLocation] = useState(searchParams.get('location') || '');
  const [type, setType] = useState(searchParams.get('type') || '');
  const [selectedType, setSelectedType] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [salaryRange, setSalaryRange] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(jobsData);
  const [displayCount, setDisplayCount] = useState(9);

  useEffect(() => {
    let filtered = jobsData;

    if (keyword) {
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(keyword.toLowerCase()) ||
          job.company.toLowerCase().includes(keyword.toLowerCase()) ||
          job.skills.some((skill) => skill.toLowerCase().includes(keyword.toLowerCase()))
      );
    }

    if (location) {
      filtered = filtered.filter((job) =>
        job.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (type) {
      filtered = filtered.filter((job) => job.type === type);
    }

    if (selectedType) {
      filtered = filtered.filter((job) => job.type === selectedType);
    }

    if (selectedLocation) {
      filtered = filtered.filter((job) => job.location === selectedLocation);
    }

    if (salaryRange) {
      filtered = filtered.filter((job) => {
        const salary = job.salary.toLowerCase();
        if (salaryRange === '0-50k') return salary.includes('20') || salary.includes('40') || salary.includes('50');
        if (salaryRange === '50k-80k') return salary.includes('60') || salary.includes('65') || salary.includes('70') || salary.includes('75') || salary.includes('80');
        if (salaryRange === '80k-120k') return salary.includes('80') || salary.includes('90') || salary.includes('100') || salary.includes('110') || salary.includes('115') || salary.includes('120');
        if (salaryRange === '120k+') return salary.includes('120') || salary.includes('130') || salary.includes('140') || salary.includes('150') || salary.includes('160') || salary.includes('170') || salary.includes('200');
        return true;
      });
    }

    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      filtered = filtered.filter((job) => job.category === categoryParam);
    }

    setFilteredJobs(filtered);
  }, [keyword, location, type, selectedType, selectedLocation, salaryRange, searchParams]);

  const handleSearch = (searchKeyword: string, searchLocation: string, searchType: string) => {
    setKeyword(searchKeyword);
    setLocation(searchLocation);
    setType(searchType);
  };

  const handleClearFilters = () => {
    setSelectedType('');
    setSelectedLocation('');
    setSalaryRange('');
    setKeyword('');
    setLocation('');
    setType('');
  };

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + 9);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Find Your Perfect Job</h1>
          <SearchBar
            onSearch={handleSearch}
            keyword={keyword}
            location={location}
            type={type}
            setKeyword={setKeyword}
            setLocation={setLocation}
            setType={setType}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-64 flex-shrink-0">
            <FilterPanel
              selectedType={selectedType}
              selectedLocation={selectedLocation}
              salaryRange={salaryRange}
              onTypeChange={setSelectedType}
              onLocationChange={setSelectedLocation}
              onSalaryChange={setSalaryRange}
              onClearFilters={handleClearFilters}
            />
          </aside>

          <main className="flex-1">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                {filteredJobs.length} Jobs Found
              </h2>
              <p className="text-gray-600 mt-1">Based on your search criteria</p>
            </div>

            {filteredJobs.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <p className="text-xl text-gray-600 mb-4">No jobs found matching your criteria</p>
                <button
                  onClick={handleClearFilters}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredJobs.slice(0, displayCount).map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>

                {displayCount < filteredJobs.length && (
                  <div className="text-center mt-8">
                    <button
                      onClick={handleLoadMore}
                      className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Load More Jobs
                    </button>
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
