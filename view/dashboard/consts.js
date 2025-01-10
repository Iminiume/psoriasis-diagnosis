export const Items = [
  // General Side bar
  {
    label: "داشبورد",
    link: "/dashboard",
    icon: "request",
    forPatient: true,
    forDoctor: true,
    forAdmin: true,
  },
  // Patient Side bar
  {
    label: "تشکیل / ویرایش پرونده",
    link: "/dashboard/patient/fill-form",
    icon: "request",
    forPatient: true,
  },
  {
    label: "درخواست های من",
    link: "/dashboard/patient/requests",
    icon: "request",
    forPatient: true,
  },

  // Doctor Side bar
  {
    label: "دستیار پزشک",
    link: "/dashboard/doctor/requests",
    icon: "request",
    forDoctor: true,
  },
  {
    label: "ثبت بیمار جدید",
    link: "/dashboard/doctor/create-patient",
    icon: "request",
    forDoctor: true,
  },
  {
    label: "پرونده الکترونیک بیماران",
    link: "/dashboard/doctor/patients-forms",
    icon: "request",
    forDoctor: true,
  },
  {
    label: "جستجوی بیماران",
    link: "/dashboard/doctor/search-patients",
    icon: "request",
    forDoctor: true,
  },
  {
    label: "گزارش از سامانه",
    link: "/dashboard/doctor/system-report",
    icon: "request",
    forDoctor: true,
  },

  // Admin Side bar
  {
    label: "ثبت پزشک جدید",
    link: "/dashboard/admin/create-doctor",
    icon: "request",
    forAdmin: true,
  },
  {
    label: "ثبت بیمار جدید",
    link: "/dashboard/admin/create-patient",
    icon: "request",
    forAdmin: true,
  },
  {
    label: "پرونده الکترونیک بیماران",
    link: "/dashboard/admin/patients-forms",
    icon: "request",
    forAdmin: true,
  },
  {
    label: "جستجوی بیماران",
    link: "/dashboard/admin/search-patients",
    icon: "request",
    forAdmin: true,
  },
  {
    label: "گزارش از سامانه",
    link: "/dashboard/admin/system-report",
    icon: "request",
    forAdmin: true,
  },
  {
    label: "خروج از داشبورد",
    link: "/",
    icon: "exit",
    color: "text-redColor",
    forAdmin: true,
    forDoctor: true,
    forPatient: true,
  },
];

export const DropDownItems = [
  { label: "خروج از حساب کاربری", icon: "exit", color: "text-redColor" },
];
