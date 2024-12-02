import jalaali from "jalaali-js";

function convertToShamsiDate(isoDate) {
  if (!isoDate) return null;

  const date = new Date(isoDate);
  const { jy, jm, jd } = jalaali.toJalaali(date);

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const timeStamp = `${hours}:${minutes}`;

  const daysOfWeek = [
    "یک‌شنبه",
    "دوشنبه",
    "سه‌شنبه",
    "چهارشنبه",
    "پنج‌شنبه",
    "جمعه",
    "شنبه",
  ];
  const dayOfWeek = daysOfWeek[date.getDay()];

  const persianMonths = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];
  const monthName = persianMonths[jm - 1];
  const formattedDate = `${dayOfWeek} ${jd} ${monthName}`;

  const formattedDateInYear = `${jd} ${monthName} ${jy}`;

  return {
    formattedDate: formattedDate,
    timeStamp: timeStamp,
    formattedDateInYear: formattedDateInYear,
  };
}

export default convertToShamsiDate;
