import React from "react";
import JobItem from "./JobItem";

const JobList = ({ jobs, filter, refreshJobs }) => {
  const filtered =
    filter === "All" ? jobs : jobs.filter((j) => j.status === filter);

  return (
    <div className="overflow-y-auto h-[300px]">
      <div className="space-y-6">
        {filtered.length === 0 ? (
          <div className="text-center text-gray-400 italic">
            No job applications to display.
          </div>
        ) : (
          filtered.map((job) => (
            <JobItem key={job._id} job={job} refreshJobs={refreshJobs} />
          ))
        )}
      </div>
    </div>
  );
};

export default JobList;
