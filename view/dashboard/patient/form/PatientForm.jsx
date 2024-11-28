"use client";
import PatientAPI from "@/api/patient";
import { Consts, FormItems } from "./consts";
import FillFormLayout from "@/features/fill-form-layout";
import * as Yup from "yup";
import { useUserContext } from "@/utils/context/useUserContext";
import { useEffect, useState } from "react";

const initialValues = {
  first_name: "",
  last_name: "",
  national_id: "",
  birth_date: "",
  gender: "",
  is_married: "",
  number_of_children: 0,
  is_pregnant: false,
  is_breastfeeding: false,
  city: "",
  address: "",
  job: "",
  education: "",
  avg_salary: "",
  insurance: "",
  age_in_first_sings: "",
  medicines: [],
  treatments: [],
  last_doctor_visit: "",
  detection_time: "",
};

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required("نام الزامی است"),
  last_name: Yup.string().required("نام خانوادگی الزامی است"),
  national_id: Yup.string().required("کد ملی الزامی است"),
  birth_date: Yup.date().required("تاریخ تولد الزامی است"),
  gender: Yup.string().required("جنسیت الزامی است"),
  is_married: Yup.boolean().required("وضعیت تاهل الزامی است"),
  avg_salary: Yup.number().positive("درآمد باید عدد مثبت باشد"),
  medicines: Yup.array().of(Yup.string()).nullable(),
  treatments: Yup.array().of(Yup.string()).nullable(),
  detection_time: Yup.date().required("زمان تشخیص الزامی است"),
});

function PatientForm() {
  const [userData, setUserData] = useState(null);
  const { state } = useUserContext();
  const { userData: userDataContext, loading } = state;
  const [isFirstTime, setIsFirstTime] = useState(true);

  useEffect(() => {
    setUserData(userDataContext || initialValues);
    userData?.first_name ? setIsFirstTime(false) : setIsFirstTime(true);
  }, [userDataContext]);

  if (!userData) return;

  return (
    <FillFormLayout
      title={Consts.title}
      subTitle={Consts.subTitle}
      formItems={FormItems}
      initialValues={userData}
      validationSchema={validationSchema}
      constants={Consts}
      api={isFirstTime ? PatientAPI.CreatePatient : PatientAPI.UpdatePatient}
    />
  );
}

export default PatientForm;
