"use client";
import Button from "@/components/button";
import Input from "@/components/input";
import { Text, Title } from "@/components/typography";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Texts = {
  login: "ورود",
  getCode: "دریافت کد",
  inputLabel: "شماره تلفن",
  sentCode: "کد ارسالی",
  enterSentCode: "رمز عبور ارسال شده را وارد کنید",
  confirm: "تایید",
};

function FormModule() {
  const [isEnteringNumber, setIsEnteringNumber] = useState(true);
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensures that the component is mounted
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents default form submission
    if (isMounted) {
      if (isEnteringNumber) {
        setIsEnteringNumber(false);
      } else {
        router.push("/");
      }
    }
  };

  return (
    <div className="flex flex-col gap-8 pt-[81px]">
      <Title className={"text-[58px]"}>
        {isEnteringNumber ? Texts.login : Texts.sentCode}
      </Title>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <Input
          placeholder="09123456789"
          label={isEnteringNumber ? Texts.inputLabel : Texts.enterSentCode}
        />
        <div className="flex justify-end">
          <Button mode={"primary"} onClick="submit">
            <Text className={"font-bold"}>
              {isEnteringNumber ? Texts.getCode : Texts.confirm}
            </Text>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default FormModule;
