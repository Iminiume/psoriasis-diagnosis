export const Consts = Object.freeze({
  title: "یکی از گزینه های زیر را انتخاب کنید",
  subTitle: "",
});

export const FormItems = (adviceDisable = true) => [
  {
    label: "تشخیص بیماری",
    icon: "request",
    link: "/dashboard/patient/requests/disease-diagnosis",
  },
  {
    label: "تشخیص نوع پسوریازیس",
    icon: "request",
    link: "/dashboard/patient/requests/disease-type-diagnosis",
  },
  {
    label: "بارگذاری تصویر",
    icon: "request",
    link: "/dashboard/patient/requests/upload-image",
  },
  {
    label: "دریافت توصیه نامه",
    icon: "request",
    link: "/dashboard/patient/requests/recieve-advice",
    disabled: adviceDisable,
  },
];
