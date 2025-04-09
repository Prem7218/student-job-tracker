import React from "react";
import { updateJob, deleteJob } from "../services/api";

const JobItem = ({ job, refreshJobs }) => {
  const handleDelete = async () => {
    console.log("🗑️ Deleting:", job._id); // log ID
    try {
      await deleteJob(job._id);
      refreshJobs();
    } catch (err) {
      console.error("❌ Delete error:", err);
    }
  };

  const handleStatusChange = async (e) => {
    const newStatus = e.target.value;
    console.log("🔄 Updating:", job._id, "to", newStatus);
    try {
      await updateJob(job._id, { ...job, status: newStatus });
      refreshJobs();
    } catch (err) {
      console.error("❌ Update error:", err);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 space-y-4">
      <h3 className="text-xl font-bold text-gray-800">
        {job.company} <span className="text-gray-500">– {job.role}</span>
      </h3>

      <div className="flex items-center gap-4">
        <label className="text-sm font-medium text-gray-600">Status:</label>
        <select
          value={job.status}
          onChange={handleStatusChange}
          className="input w-44"
        >
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
      </div>

      <p className="text-sm text-gray-500">📅 Date Applied: {job.date}</p>

      {job.link && (
        <p>
          <a
            href={job.link}
            className="text-blue-600 hover:underline text-sm"
            target="_blank"
            rel="noreferrer"
          >
            🔗 View Job Posting
          </a>
        </p>
      )}

      <div className="text-right">
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 font-medium"
        >
          🗑 Delete
        </button>
      </div>
    </div>
  );
};

export default JobItem;
