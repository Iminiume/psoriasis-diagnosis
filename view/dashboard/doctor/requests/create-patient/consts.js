export const Consts = Object.freeze({
  title: "اطلاعات بیمار را وارد کنید",
  subTitle: "تکمیل پرونده الکترونیکی سلامت",
  continue: "ادامه",
  confirmAndContinue: "تایید و ادامه",
  edit: "ویرایش",
  fillFormIncomplete: "لطفا فرم را کامل کنید",
  fillFormError: "مشکلی در ارسال فرم بوجود آمده، لطفا مجددا تلاش کنید",
  formModalCompleted: "پرونده الکترونیک سلامت برای بیمار ایجاد شد.",
});

export const FormItems = [
  {
    label: "نام",
    placeholder: "نام بیمار را وارد کنید",
    type: "text",
    width: "1/4",
    key: "first_name",
  },
  {
    label: "نام خانوادگی",
    placeholder: "نام خانوادگی بیمار را وارد کنید",
    type: "text",
    width: "1/4",
    key: "last_name",
  },
  {
    label: "تاریخ تولد",
    placeholder: "تاریخ تولد بیمار را وارد کنید",
    type: "date",
    width: "1/2",
    key: "birth_date",
  },
  {
    label: "شغل",
    placeholder: "شغل بیمار را وارد کنید",
    type: "text",
    width: "1/2",
    key: "job",
  },
  {
    label: "کد ملی",
    placeholder: "کد ملی بیمار را وارد کنید",
    type: "text",
    width: "1/2",
    key: "national_id",
  },
  {
    label: "جنسیت",
    type: "radio",
    options: [
      { label: "مرد", value: "Male" },
      { label: "زن", value: "Female" },
    ],
    width: "1/4",
    key: "gender",
  },
  {
    label: "وضعیت تاهل",
    type: "radio",
    options: [
      { label: "متاهل", value: true },
      { label: "مجرد", value: false },
    ],
    width: "1/4",
    key: "is_married",
  },
  {
    label: "شماره تلفن",
    placeholder: "شماره تلفن بیمار را وارد کنید",
    type: "text",
    width: "1/4",
    key: "phone_number",
  },
  {
    label: "شهر محل سکونت",
    placeholder: "شهر محل سکونت بیمار را وارد کنید",
    type: "text",
    width: "1/4",
    key: "city",
  },
  {
    label: "آدرس دقیق",
    placeholder: "آدرس دقیق بیمار را وارد کنید",
    type: "text",
    width: "full",
    key: "address",
  },
];
