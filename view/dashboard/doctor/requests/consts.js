export const Consts = Object.freeze({
  title: "یکی از گزینه های زیر را انتخاب کنید",
  subTitle: "",
  instruction: [
    "برای استفاده از گزینه های زیر ابتدا بیمار خود را در بخش تعریف بیمار تعریف کنید و بعد روی گزینه ها برای استفاده از خدمات تشخیصی توصیه ای کلیک کنید",
    "بعد از آن که پزشک یک بیمار را ثبت کرد و بازگشت برای اینکه از فرم ها استفاده کند اینکه با کلیک بر روی گزینه از او نمی پرسد برای کدام بیمار دارد ثبت می کند مشکل دارد چون ممکن است پزشک لیستی از بیماران را ثبت کند و بعدا برود و فرم هارا برای او پر کند",
    "لذا با کلیک بر روی هر کدام از گزینه لیستی از بیماران ثبت شده توسط پزشک را نشان دهد و از او بخواهد بیمار مورد نظر را انتخاب کند تا برای او فرم را پر کند",
  ],
  guide: "راهنما",
});

export const FormItems = [
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
  {
    label: "دریافت توصیه",
    icon: "request",
    link: "/dashboard/doctor/requests/recieve-advice",
  },
];
