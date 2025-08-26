import { axiosInstance } from "./axios";
export const signup = async(singupData) =>{
      const response = await axiosInstance.post("/auth/signup", singupData);
      return response.data;
}