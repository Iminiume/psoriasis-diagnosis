"use client";
import DoctorAPI from "@/api/doctor";
import { Consts, FormItems } from "./consts";
import FillFormLayout from "@/features/fill-form-layout";

function DoctorForm() {
  return (
    <FillFormLayout
      title={Consts.title}
      subTitle={Consts.subTitle}
      formItems={FormItems}
      api={DoctorAPI.CreateDoctor}
      constants={Consts}
      onSuccess={(data) => {
        console.log("Doctor created successfully", data);
      }}
    />
  );
}

export default DoctorForm;
