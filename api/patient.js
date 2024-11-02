import useAxios from "@/utils/hooks/useAxios";

const PatientAPI = {};

PatientAPI.CreatePatient = ({ formValues, token }) => {
  return useAxios(
    {
      url: "http://5.34.199.51:3000/api/create_health_file",
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
      url: "http://5.34.199.51:3000/api/diagnosis",
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
      url: "http://5.34.199.51:3000/api/diagnosis_image",
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
