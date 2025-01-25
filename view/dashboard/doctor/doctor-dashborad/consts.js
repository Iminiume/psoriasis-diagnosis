export const Consts = Object.freeze({
  patientCounts: "تعداد کل بیماران",
  doctorCounts: "تعداد پزشکان سامانه",
  diagnosisChart: "فراوانی نوع پسوریازیس",
  psoriazis: "پسوریازیس",
  unknownGender: "ناشناخته",
  genderStats: "جنسیت بیماران",
  lastPateints: "آخرین بیماران ثبت شده",
  threeDots: "...",
  fullName: "نام و نام خانوادگی",
  nationalId: "کد ملی",
  timeStamp: "تاریخ ثبت",
});

export const formItems = [
  {
    label: "تشخیص احتمال ابتلا",
    link: "/dashboard/doctor/requests/disease-diagnosis",
    icon: "request",
  },
  {
    label: "تشخیص نوع بیماری",
    link: "/dashboard/doctor/requests/disease-type-diagnosis",
    icon: "request",
  },
  {
    label: "تشخیص بیماری از روی تصویر",
    link: "/dashboard/doctor/requests/upload-image",
    icon: "request",
  },
  {
    label: "ثبت بیمار جدید",
    link: "/dashboard/doctor/create-patient",
    icon: "userPlus",
  },
];
