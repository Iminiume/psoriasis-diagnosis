import useAxios from "@/utils/hooks/useAxios";

const ReportAPI = {};
const STAGE_API_BASE_URL = process.env.NEXT_PUBLIC_API_STAGE_BASE_URL;

ReportAPI.GetReport = ({ token }) => {
  return useAxios({
    url: `${STAGE_API_BASE_URL}/api/get_report`,
    method: "GET",
    headers: {
      Auth: token,
    },
  });
};

ReportAPI.GetUsersExcel = () => {
  return useAxios({
    url: `${STAGE_API_BASE_URL}/api/get_users_excel`,
    method: "GET",
    responseType: "blob",
  });
};

ReportAPI.GetPatients = ({ token }) => {
  return useAxios({
    url: `${STAGE_API_BASE_URL}/api/get_patients`,
    method: "GET",
    headers: {
      Auth: token,
    },
  });
};

ReportAPI.GetPatientDetails = ({ token, slug }) => {
  return useAxios({
    url: `${STAGE_API_BASE_URL}/api/get_patient_details/${slug}`,
    method: "GET",
    headers: {
      Auth: token,
    },
  });
};

export default ReportAPI;
