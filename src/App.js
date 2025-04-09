import React, { useEffect, useState } from "react";
import { getJobs } from "./services/api";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import FilterBar from "./components/FilterBar";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const res = await getJobs();
    setJobs(res.data);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-10 tracking-tight">
          🎓 Student Job Tracker
        </h1>

        <JobForm refreshJobs={fetchJobs} />
        <FilterBar setFilter={setFilter} />
        <JobList jobs={jobs} filter={filter} refreshJobs={fetchJobs} />
      </div>
    </div>
  );
}

export default App;
