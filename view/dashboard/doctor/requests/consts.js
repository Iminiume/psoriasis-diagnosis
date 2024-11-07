export const Consts = Object.freeze({
  title: "یکی از گزینه های زیر را انتخاب کنید",
  subTitle: "",
});

export const FormItems = [
  {
    label: "تشکیل پرونده برای بیمار",
    icon: "request",
    link: "/dashboard/doctor/requests/create-patient",
  },
  {
    label: "کمک به تشخیص احتمال ابتلا",
    icon: "request",
    link: "/dashboard/doctor/requests/disease-diagnosis",
  },
  {
    label: "کمک به تشخیص نوع پسوریازیس",
    icon: "request",
    link: "/dashboard/doctor/requests/disease-type-diagnosis",
  },
  {
    label: "کمک به تشخیص نوع پسوریازیس از روی تصویر",
    icon: "request",
    link: "/dashboard/doctor/requests/upload-image",
  },
];
