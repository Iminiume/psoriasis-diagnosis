import useAxios from "@/utils/hooks/useAxios";

const LoginAPI = {};

LoginAPI.Login = ({ phoneNumber }) => {
  return useAxios(
    {
      url: "http://5.34.199.51:3000/api/login",
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
      url: "http://5.34.199.51:3000/api/verify_otp",
      method: "POST",
      data: { phoneNumber: phoneNumber, otp: otp },
    },
    {
      manual: true,
    },
  );
};

export default LoginAPI;
