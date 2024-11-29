export const Consts = Object.freeze({
  patientCounts: "تعداد کل بیماران",
  doctorCounts: "تعداد پزشکان سامانه",
});

export const formItems = [
  {
    title: "تشخیص احتمال ابتلا",
    link: "/dashboard/doctor/requests/disease-diagnosis",
  },
  {
    title: "تشخیص نوع بیماری",
    link: "/dashboard/doctor/requests/disease-type-diagnosis",
  },
  {
    title: "تشخیص بیماری از روی تصویر",
    link: "/dashboard/doctor/requests/upload-image",
  },
  {
    title: "ثبت بیمار جدید",
    link: "/dashboard/doctor/requests/create-patient",
  },
];
