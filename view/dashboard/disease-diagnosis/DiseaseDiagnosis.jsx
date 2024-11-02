"use client";
import Button from "@/components/button";
import Input from "@/components/input";
import Modal from "@/components/modal";
import Typography from "@/components/typography";
import { TwoDigitNumber } from "@/utils/twoDigit";
import React, { useRef, useState } from "react";

const Texts = {
  title: "اطلاعات خود را وارد کنید",
  continue: "ادامه",
  subTitle: "بر اساس شاخص BMI شما در بازه کم‌وزن قرار می‌گیرید.",
  yes: "بله",
  no: "نه",
  alarm: "پیام هشدار",
  diagnosis: "احتمال پیشنهادی برای تشخیص بیماری شما",
  percentage: "درصد است",
  isAfflicted: "شما به بیماری پسوریازیس مبتلا هستید",
  notAfflicted: "شما به بیماری پسوریازیس مبتلا نیستید",
  confirmIsOnDoctor: "تشخیص نهایی بیماری شما بر عهده پزشک می باشد",
  close: "بستن",
};

const FormItems = [
  {
    title:
      "آیا یکی از بستگان درجه یک (والدین/خواهر و برادر) مبتلا به پسوریازیس دارید؟",
  },
  {
    title: "آیا سیگار می‌کشید؟",
  },
  {
    title: "آیا به طور منظم الکل مصرف می‌کنید؟",
  },
  {
    title: "آیا استرس اخیر را تجربه کرده‌اید؟",
  },
  {
    title: "آیا اخیراً تغییرات فصلی را تجربه کرده اید؟",
  },
  {
    title: "آیا اخیراً عفونت استرپتوکوکی داشته اید؟",
  },
  {
    title: "آیا اخیراً در معرض نور خورشید قرار گرفته اید؟",
  },
  {
    title: "آیا متوجه تغییرات یا ضایعات پوستی شده اید؟",
  },
  {
    title: "آیا درد یا تورم مفاصل را تجربه کرده اید؟",
  },
  {
    title: "آیا متوجه تغییراتی در ناخن های خود شده اید؟",
  },
  {
    title: "آیا اخیراً آسیب یا ضربه پوستی را تجربه کرده اید؟",
  },
  {
    title: "آیا بیماری خودایمنی برای شما تشخیص داده شده است؟",
  },
  {
    title:
      "آیا تا به حال مشکلات پوستی مزمن (مانند راش، درماتیت) را تجربه کرده اید؟",
  },
  {
    title: "آیا رژیم غذایی خود را سالم توصیف میکنید؟",
  },
  {
    title: "آیا به طور مرتب ورزش می کنید؟",
  },
  {
    title: "آیا اضافه وزن دارید یا چاق هستید؟",
  },
];

function DiseaseDiagnosis() {
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(FormItems.length).fill(null),
  );
  const [isFormComplete, setIsFormComplete] = useState(false);
  const modalRef = useRef();
  const [formPercentage, setFormPercentage] = useState(null);

  const handleChange = (index, value) => {
    const updatedAnswers = selectedAnswers.map((answer, i) =>
      i === index ? value : answer,
    );
    setSelectedAnswers(updatedAnswers);

    setIsFormComplete(updatedAnswers.every((answer) => answer !== null));
  };

  const handleSubmit = () => {
    const yesCount = selectedAnswers.filter((answer) => answer === true).length;
    setFormPercentage((yesCount / FormItems.length) * 100);
    modalRef.current.open();
  };

  const MakeFormRow = ({ item, index }) => {
    return (
      <div className="flex min-h-[80px] items-center justify-between gap-6 border-t border-[#737373] p-4">
        <div className="flex gap-6">
          <span className="w-[40px] text-center">
            <Typography size="2xl">{TwoDigitNumber(index + 1)}</Typography>
          </span>
          <Typography size="2xl">{item.title}</Typography>
        </div>
        <div className="flex gap-8">
          <Input
            type="radio"
            name={`question-${index}`}
            checked={selectedAnswers[index] === true}
            onChange={() => handleChange(index, true)}
          />
          <Input
            type="radio"
            name={`question-${index}`}
            checked={selectedAnswers[index] === false}
            onChange={() => handleChange(index, false)}
          />
        </div>
      </div>
    );
  };

  const ModalContent = () => {
    return (
      <div className="flex flex-col gap-8">
        <Typography size="4xl" className="text-center">
          {Texts.diagnosis + " " + formPercentage + " " + Texts.percentage}
        </Typography>

        <div className="flex flex-col gap-6">
          <Typography size="xl" className="text-center">
            {formPercentage > 18.75 ? Texts.isAfflicted : Texts.notAfflicted}
          </Typography>
          <Typography size="xl" className="text-center">
            {Texts.confirmIsOnDoctor}
          </Typography>
        </div>

        <Button onClick={() => modalRef.current.close()} className="mt-6">
          {Texts.close}
        </Button>
      </div>
    );
  };

  return (
    <div className="flex h-full flex-col gap-10">
      {/* Titles Section */}
      <div className="flex flex-col gap-6 p-8">
        <Typography size="5xl" weight="bold">
          {Texts.title}
        </Typography>
        <Typography size="3xl" className="text-primaryColor">
          {Texts.subTitle}
        </Typography>
      </div>

      {/* Form Items Section with Dynamic Scroll */}
      <div className="scrollbar-hide flex-grow overflow-y-auto px-8">
        <div className="flex w-full justify-end gap-10 px-5 py-2">
          <Typography size="lg">{Texts.yes}</Typography>
          <Typography size="lg">{Texts.no}</Typography>
        </div>
        {FormItems.map((item, index) => (
          <MakeFormRow key={index} item={item} index={index} />
        ))}
      </div>

      {/* Button Section */}
      <div className="flex w-full justify-end bg-[#1E253A] p-8">
        <Button onClick={handleSubmit} disabled={!isFormComplete}>
          {Texts.continue}
        </Button>
      </div>

      {/* Modal Component */}
      <Modal ref={modalRef}>
        <ModalContent />
      </Modal>
    </div>
  );
}

export default DiseaseDiagnosis;
