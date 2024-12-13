"use client";
import PatientAPI from "@/api/patient";
import { Consts, FormItems } from "./consts";
import FillFormLayout from "@/features/fill-form-layout";
import * as Yup from "yup";
import { useUserContext } from "@/utils/context/useUserContext";
import { useEffect, useState } from "react";
import { LoadingNFS } from "@/components/loading";

const initialValues = {
  first_name: "",
  last_name: "",
  national_id: "",
  birth_date: "",
  gender: "",
  is_married: "",
  number_of_children: null,
  is_pregnant: false,
  is_breastfeeding: false,
  city: "",
  address: "",
  job: "",
  education: "",
  avg_salary: null,
  insurance: "",
  age_in_first_sings: null,
  medicines: [],
  treatments: [],
  last_doctor_visit: "",
  detection_time: "",
};

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required("نام الزامی است"),
  last_name: Yup.string().required("نام خانوادگی الزامی است"),
  national_id: Yup.string().required("کد ملی الزامی است"),
  gender: Yup.string().required("جنسیت الزامی است"),
  is_married: Yup.boolean().required("وضعیت تاهل الزامی است"),
  avg_salary: Yup.number().positive("درآمد باید عدد مثبت باشد").nullable(),
  medicines: Yup.array().of(Yup.string()).nullable(),
  treatments: Yup.array().of(Yup.string()).nullable(),
  birth_date: Yup.date().required("تاریخ تولد الزامی است"),
  detection_time: Yup.date().required("زمان تشخیص الزامی است"),
  last_doctor_visit: Yup.date().required("آخرین مراجعه به پزشک الزامی است")
});

function PatientForm() {
  const [userData, setUserData] = useState(null);
  const { state } = useUserContext();
  const { userData: userDataContext, role } = state;
  const [isFirstTime, setIsFirstTime] = useState(true);

  useEffect(() => {
    setUserData(userDataContext);
    role ? setIsFirstTime(false) : setIsFirstTime(true);
  }, [userDataContext]);

  if (role && !userData) return <LoadingNFS />;

  return (
    <FillFormLayout
      title={Consts.title}
      subTitle={Consts.subTitle}
      formItems={FormItems}
      initialValues={role ? userData : initialValues}
      validationSchema={validationSchema}
      constants={Consts}
      api={isFirstTime ? PatientAPI.CreatePatient : PatientAPI.UpdatePatient}
    />
  );
}

export default PatientForm;
