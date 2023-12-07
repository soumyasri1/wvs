import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/users'; // Update with your Spring Boot backend URL

const userService = {
  getAllUsers: async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
  },
  createUser: async (user) => {
    const response = await axios.post(BASE_URL, user);
    return response.data;
  },
  getUserById: async (userId) => {
    const response = await axios.get(`${BASE_URL}/${userId}`);
    return response.data;
  },
  updateUser: async (userId, updatedUser) => {
    const response = await axios.put(`${BASE_URL}/${userId}`, updatedUser);
    return response.data;
  },
  deleteUser: async (userId) => {
    await axios.delete(`${BASE_URL}/${userId}`);
  },
};

export default userService;
