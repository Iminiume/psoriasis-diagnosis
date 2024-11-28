import { useMemo } from "react";
import jalaali from "jalaali-js";

function ConvertToShamsiDate(isoDate) {
  return useMemo(() => {
    if (!isoDate) return null;

    const date = new Date(isoDate);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

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

    const { jy, jm, jd } = jalaali.toJalaali(date);

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

    // Format the final output
    const formattedDate = `${dayOfWeek} ${jd} ${monthName}`;
    const timeStamp = `${hours}:${minutes}`;
    return { formattedDate: formattedDate, timeStamp: timeStamp };
  }, [isoDate]);
}

export default ConvertToShamsiDate;
