import { axiosInstance } from "./axios";
export const signup = async(singupData) =>{
      const response = await axiosInstance.post("/auth/signup", singupData);
      return response.data;
}

export const getAuthUser = async () => {
      const res = await axiosInstance.get("/auth/me");
      return res.data;
}


export const completeOnboarding = async()=>{
      const response = await axiosInstance.post("/auth/onboarding",userData);
      return response.data;

}