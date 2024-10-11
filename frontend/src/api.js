const API_BASE_URL = 'http://localhost:3000/api';

export const API_URLS = {
  REGISTER: `${API_BASE_URL}/register`,
  LOGIN: `${API_BASE_URL}/login`,
  GET_ALL_USERS: `${API_BASE_URL}/users`,
  UPDATE_USER: `${API_BASE_URL}/update`,
  DELETE_USER: (userId) => `${API_BASE_URL}/delete/${userId}`,
};


