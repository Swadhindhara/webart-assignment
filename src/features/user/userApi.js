import axios from "axios";

const API_URL = import.meta.env.VITE_BASE_URL;

const getProfile = async (id) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/user-details/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    // console.log(error.response);
    return error.response;
  }
};


const userApi = { getProfile };
export default userApi;
