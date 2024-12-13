"use client";
import React from "react";
import DoctorAPI from "@/api/doctor";
import { Consts, FormItems } from "./consts";
import { usePatientContext } from "@/utils/context/usePatientContext";
import FillFormLayout from "@/features/fill-form-layout";
import * as Yup from "yup";
import AdminAPI from "@/api/admin";

const initialValues = {
  first_name: "",
  last_name: "",
  birth_date: "",
  phone_number: null,
  gender: "",
  is_married: "",
  specialization: "",
  military_service_city: "",
  license_id: "",
  city: "",
};

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required("نام الزامی است"),
  last_name: Yup.string().required("نام خانوادگی الزامی است"),
  birth_date: Yup.date().required("تاریخ تولد الزامی است"),
  phone_number: Yup.number().required("شماره تلفن الزامی است"),
  gender: Yup.string().required("جنسیت الزامی است"),
  is_married: Yup.boolean().required("وضعیت تاهل الزامی است"),
  specialization: Yup.string().required("تخصص الزامی است"),
  military_service_city: Yup.string().required("شهر محل خدمت الزامی است"),
  license_id: Yup.string().required("شناسه مجوز الزامی است"),
});

function CreateDoctor() {
  return (
    <FillFormLayout
      title={Consts.title}
      subTitle={Consts.subTitle}
      formItems={FormItems}
      initialValues={initialValues}
      validationSchema={validationSchema}
      constants={Consts}
      api={AdminAPI.CreateDoctor}
    />
  );
}

export default CreateDoctor;
