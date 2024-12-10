import React from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function Datepicker({ value, onChange, placeholder }) {
  return (
    <DatePicker
      calendar={persian}
      locale={persian_fa}
      value={value}
      onChange={onChange}
      inputClass="h-12 rounded-md border border-[#465370] px-2 transition-colors focus:border-white focus:outline-none active:border-white bg-inputBg w-full"
      placeholder={placeholder}
      containerStyle={{ backgroundColor: "#26335d" }}
    />
  );
}

export default Datepicker;
