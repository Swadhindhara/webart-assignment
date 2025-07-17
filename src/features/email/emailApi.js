import axios from "axios";
import { toast } from "sonner";

const API_URL = import.meta.env.VITE_BASE_URL;

const verifyEmail = async (userdata) => {
  try {
    const response = await axios.post(`${API_URL}/email-verify`, userdata);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    if(error.response.data.message){
      toast.error(error.response.data.message)
    }
    toast.error(error.response?.data?.errors[0]?.email)
    // console.log(error);
  }
};

const emailAPI = { verifyEmail };

export default emailAPI;
