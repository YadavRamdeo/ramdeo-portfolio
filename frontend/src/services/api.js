import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 second timeout
});

// Request interceptor for debugging
api.interceptors.request.use(
  (config) => {
    console.log('API Request:', config.method?.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    console.log('API Response:', response.status, response.data);
    return response;
  },
  (error) => {
    console.error('API Response Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export const portfolioAPI = {
  // GET endpoints
  getPersonalInfo: () => api.get('/personal-info/'),
  getSkills: () => api.get('/skills/'),
  getTechnologies: () => api.get('/technologies/'),
  getExperiences: () => api.get('/experiences/'),
  getEducation: () => api.get('/education/'),
  getProjects: () => api.get('/projects/'),
  getCertifications: () => api.get('/certifications/'),
  getAchievements: () => api.get('/achievements/'),
  getSummary: () => api.get('/summary/'),

  // POST endpoints
  createPersonalInfo: (data) => api.post('/personal-info/', data),
  createSkill: (data) => api.post('/skills/', data),
  createExperience: (data) => api.post('/experiences/', data),
  createProject: (data) => api.post('/projects/', data),

  // Bulk operations
  createBulkSkills: (data) => api.post('/skills/bulk/', data),
  createBulkProjects: (data) => api.post('/projects/bulk/', data),
};

export default api;