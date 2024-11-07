import useAxios from "@/utils/hooks/useAxios";

const DoctorAPI = {};
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

DoctorAPI.CreateDoctor = ({ formValues, token }) => {
  return useAxios(
    {
      url: `${API_BASE_URL}/api/create_doctor`,
      method: "POST",
      headers: {
        Auth: token,
      },
      data: formValues,
    },
    {
      manual: true,
    },
  );
};

DoctorAPI.AddComment = ({ token }) => {
  return useAxios(
    {
      url: `${API_BASE_URL}/api/add_doctor_comment`,
      method: "POST",
      headers: {
        Auth: token,
      },
    },
    {
      manual: true,
    },
  );
};

DoctorAPI.UploadImage = ({}) => {
  return useAxios(
    {
      url: `${API_BASE_URL}/api/diagnosis_image`,
      method: "POST",
      headers: {
        Auth: token,
      },
      data: file,
    },
    {
      manual: true,
    },
  );
};

DoctorAPI.GetPatients = () => {
  return useAxios({
    url: `${API_BASE_URL}/api/get_patients`,
    method: "GET",
  });
};

export default DoctorAPI;
