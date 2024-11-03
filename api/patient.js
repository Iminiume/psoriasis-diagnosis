import useAxios from "@/utils/hooks/useAxios";

const PatientAPI = {};
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

PatientAPI.CreatePatient = ({ formValues, token }) => {
  return useAxios(
    {
      url: `${API_BASE_URL}/api/create_health_file`,
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

PatientAPI.DiagnosisType = ({ formValues, token }) => {
  return useAxios(
    {
      url: `${API_BASE_URL}/api/diagnosis`,
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

PatientAPI.UploadImage = ({ file, token }) => {
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

export default PatientAPI;
