import useAxios from "@/utils/hooks/useAxios";

const PatientAPI = {};
const API_BASE_URL = process.env.NEXT_PUBLIC_API_STAGE_BASE_URL;

PatientAPI.CreatePatient = ({ token }) => {
  return useAxios(
    {
      url: `${API_BASE_URL}/api/create_health_file`,
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

PatientAPI.UpdatePatient = ({ token }) => {
  return useAxios(
    {
      url: `${API_BASE_URL}/api/update_patient`,
      method: "PUT",
      headers: {
        Auth: token,
      },
    },
    {
      manual: true,
    },
  );
};

PatientAPI.DiagnosisType = ({ token }) => {
  return useAxios(
    {
      url: `${API_BASE_URL}/api/diagnosis`,
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

PatientAPI.UploadImage = ({ token }) => {
  return useAxios(
    {
      url: `${API_BASE_URL}/api/diagnosis_image`,
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

PatientAPI.GetPatient = ({ token }) => {
  return useAxios(
    {
      url: `${API_BASE_URL}/api/get_patient`,
      method: "GET",
      headers: {
        Auth: token,
      },
    },
    {
      manual: true,
    },
  );
};

PatientAPI.Questionnaire = ({ token }) => {
  return useAxios(
    {
      url: `${API_BASE_URL}/api/questionnaire`,
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

export default PatientAPI;
