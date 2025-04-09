import axios from 'axios';

const API = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL, });

export const getJobs = () => API.get('/jobs');
export const addJob = (jobData) => API.post('/jobs', jobData);
export const updateJob = (id, updatedData) => API.put(`/jobs/${id}`, updatedData);
export const deleteJob = (id) => API.delete(`/jobs/${id}`);
