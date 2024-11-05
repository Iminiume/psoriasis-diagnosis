export const Consts = Object.freeze({
  title: "یکی از گزینه های زیر را انتخاب کنید",
  subTitle: "",
});

export const FormItems = (adviceDisable = true) => [
  {
    label: "تشکیل پرونده",
    icon: "request",
    link: "/dashboard/requests/fill-form",
  },
  {
    label: "تشخیص بیماری",
    icon: "request",
    link: "/dashboard/requests/disease-diagnosis",
  },
  {
    label: "تشخیص نوع پسوریازیس",
    icon: "request",
    link: "/dashboard/requests/disease-type-diagnosis",
  },
  {
    label: "بارگذاری تصویر",
    icon: "request",
    link: "/dashboard/requests/upload-image",
  },
  {
    label: "دریافت توصیه نامه",
    icon: "request",
    link: "/dashboard/requests/recieve-advice",
    disabled: adviceDisable,
  },
];
