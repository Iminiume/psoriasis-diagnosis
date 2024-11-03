import useAxios from "@/utils/hooks/useAxios";

const LoginAPI = {};
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

LoginAPI.Login = ({ phoneNumber }) => {
  return useAxios(
    {
      url: `${API_BASE_URL}/api/login`,
      method: "POST",
      data: { phoneNumber: phoneNumber },
    },
    {
      manual: true,
    },
  );
};

LoginAPI.VerifyOtp = ({ phoneNumber, otp }) => {
  return useAxios(
    {
      url: `${API_BASE_URL}/api/verify_otp`,
      method: "POST",
      data: { phoneNumber: phoneNumber, otp: otp },
    },
    {
      manual: true,
    },
  );
};

export default LoginAPI;
