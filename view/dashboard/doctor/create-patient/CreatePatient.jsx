"use client";
import React from "react";
import DoctorAPI from "@/api/doctor";
import { Consts, FormItems } from "./consts";
import { usePatientContext } from "@/utils/context/usePatientContext";
import FillFormLayout from "@/features/fill-form-layout";
import * as Yup from "yup";

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

function CreatePatient() {
  const { setPatientData } = usePatientContext();

  const handleSuccess = (data) => {
    setPatientData(data);
  };

  return (
    <FillFormLayout
      title={Consts.title}
      subTitle={Consts.subTitle}
      formItems={FormItems}
      initialValues={initialValues}
      validationSchema={validationSchema}
      constants={Consts}
      api={DoctorAPI.CreatePatient}
      onSuccess={handleSuccess}
    />
  );
}

export default CreatePatient;
