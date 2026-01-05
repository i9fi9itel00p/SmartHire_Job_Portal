import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import JobsListing from './pages/JobsListing';
import JobDetails from './pages/JobDetails';
import PostJob from './pages/PostJob';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<JobsListing />} />
            <Route path="/jobs/:id" element={<JobDetails />} />
            <Route path="/post-job" element={<PostJob />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
