import useAxios from "@/utils/hooks/useAxios";

const DoctorAPI = {};
const STAGE_API_BASE_URL = process.env.NEXT_PUBLIC_API_STAGE_BASE_URL;

DoctorAPI.CreatePatient = ({ token }) => {
  return useAxios(
    {
      url: `${STAGE_API_BASE_URL}/api/doctor_create_patient`,
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

DoctorAPI.AddComment = ({ token }) => {
  return useAxios(
    {
      url: `${STAGE_API_BASE_URL}/api/add_doctor_comment`,
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

DoctorAPI.GetDoctor = ({ token }) => {
  return useAxios(
    {
      url: `${STAGE_API_BASE_URL}/api/get_doctor`,
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

DoctorAPI.DiagnosisType = ({ token }) => {
  return useAxios(
    {
      url: `${STAGE_API_BASE_URL}/api/doctor_diagnosis`,
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

DoctorAPI.UploadImage = ({ token }) => {
  return useAxios(
    {
      url: `${STAGE_API_BASE_URL}/api/doctor_diagnosis_image`,
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

DoctorAPI.DoctorQuestionnaire = ({ token }) => {
  return useAxios(
    {
      url: `${STAGE_API_BASE_URL}/api/doctor_questionnaire`,
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

export default DoctorAPI;
