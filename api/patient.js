import useAxios from "@/utils/hooks/useAxios";

const PatientAPI = {};

PatientAPI.CreatePatient = ({ formValues, token }) => {
  return useAxios(
    {
      url: "http://5.34.199.51:3000/api/create_health_file",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Auth: token,
      },
      data: formValues,
    },
    {
      manual: true,
    },
  );
};

export default PatientAPI;
