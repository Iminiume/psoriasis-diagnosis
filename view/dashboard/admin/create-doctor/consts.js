
export const Consts = Object.freeze({
  title: "اطلاعات پزشک را وارد کنید",
  subTitle: "تکمیل پرونده الکترونیکی سلامت",
  continue: "ادامه",
  confirmAndContinue: "تایید و ادامه",
  edit: "ویرایش",
  fillFormIncomplete: "لطفا فرم را کامل کنید",
  fillFormError: "مشکلی در ارسال فرم بوجود آمده، لطفا مجددا تلاش کنید",
  formModalCompleted: "پرونده برای دکتر ایجاد شد.",
});

export const FormItems = [
  {
    label: "نام",
    placeholder: "نام خود را وارد کنید",
    type: "text",
    width: "1/4",
    key: "first_name",
  },
  {
    label: "نام خانوادگی",
    placeholder: "نام خانوادگی خود را وارد کنید",
    type: "text",
    width: "1/4",
    key: "last_name",
  },
  {
    label: "تاریخ تولد",
    placeholder: "تاریخ تولد خود را وارد کنید",
    type: "date",
    width: "1/2",
    key: "birth_date",
  },
  {
    label: "شماره تلفن",
    placeholder: "شماره تلفن خود را وارد کنید",
    type: "text",
    width: "1/2",
    key: "phone_number",
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
    label: "تخصص",
    placeholder: "تخصص خود را وارد کنید",
    type: "text",
    width: "1/2",
    key: "specialization",
  },
  {
    label: "شهر محل خدمت",
    placeholder: "شهر محل خدمت خود را وارد کنید",
    type: "text",
    width: "1/2",
    key: "military_service_city",
  },
  {
    label: "شناسه مجوز",
    placeholder: "شناسه مجوز خود را وارد کنید",
    type: "text",
    width: "1/2",
    key: "license_id",
  },
  {
    label: "شهر محل سکونت",
    placeholder: "شهر محل سکونت خود را وارد کنید",
    type: "text",
    width: "full",
    key: "city",
  },
];
