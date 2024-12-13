import useAxios from "@/utils/hooks/useAxios";

const AdminAPI = {};
const STAGE_API_BASE_URL = process.env.NEXT_PUBLIC_API_STAGE_BASE_URL;

AdminAPI.CreateDoctor = ({ token }) => {
  return useAxios(
    {
      url: `${STAGE_API_BASE_URL}/api/create_doctor`,
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

AdminAPI.CreatePatient = ({ token }) => {
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
export default AdminAPI;
