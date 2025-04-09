import React, { useState } from "react";
import { addJob } from "../services/api";

const JobForm = ({ refreshJobs }) => {
  const [form, setForm] = useState({
    company: "",
    role: "",
    status: "Applied",
    date: "",
    link: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addJob(form);
    setForm({ company: "", role: "", status: "Applied", date: "", link: "" });
    refreshJobs();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-xl rounded-lg p-8 mb-10 space-y-6 border border-gray-200"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <input
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Company"
          required
          className="input"
        />
        <input
          name="role"
          value={form.role}
          onChange={handleChange}
          placeholder="Role"
          required
          className="input"
        />
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="input"
        >
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
          className="input"
        />
        <input
          name="link"
          value={form.link}
          onChange={handleChange}
          placeholder="Job Link"
          className="input md:col-span-2"
        />
      </div>
      <div className="text-right">
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-all"
        >
          ➕ Add Job
        </button>
      </div>
    </form>
  );
};

export default JobForm;
