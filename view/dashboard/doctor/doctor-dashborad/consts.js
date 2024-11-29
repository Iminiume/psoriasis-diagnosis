export const Consts = Object.freeze({
  patientCounts: "تعداد کل بیماران",
  doctorCounts: "تعداد پزشکان سامانه",
  diagnosisChart: "فراوانی نوع پسوریازیس",
  psoriazis: "پسوریازیس",
  maleFa: "مرد",
  male: "Male",
  femaleFa: "زن",
  female: "Female",
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
