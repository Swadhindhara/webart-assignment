import axios from "axios";
import { toast } from "sonner";

const API_URL = import.meta.env.VITE_BASE_URL;

const createProfile = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    // console.log(error.response.data.errors[0].email, "From Create User");
    toast.error(error.response.data.errors[0].email)
  }
};

const loginUser = async(userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    // console.log(error.response.data);
    if(error.response.data.message){
      toast.error(error.response.data.message)
    }
  }
}


const authApi = {createProfile, loginUser}

export default authApi;
