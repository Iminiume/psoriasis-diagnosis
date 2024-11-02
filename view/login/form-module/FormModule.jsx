"use client";
import LoginAPI from "@/api/login";
import Button from "@/components/button";
import Input from "@/components/input";
import Typography from "@/components/typography";
import { useAuthContext } from "@/utils/context/useAuthContext";
import { useNotificationContext } from "@/utils/context/useNotificationContext";
import React, { useEffect, useRef, useState } from "react";

const Texts = {
  login: "ورود",
  getCode: "دریافت کد",
  inputLabel: "شماره تلفن",
  sentCode: "کد ارسالی",
  enterSentCode: "رمز عبور ارسال شده را وارد کنید",
  confirm: "تایید",
  wrongOtp: "کد وارد شده اشتباه می باشد!",
};

function FormModule() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpDigits, setOtpDigits] = useState(["", "", "", ""]);
  const [isEnteringNumber, setIsEnteringNumber] = useState(true);

  const inputRefs = useRef([]);

  const { login } = useAuthContext();
  const { addNotification } = useNotificationContext();

  const {
    data: sendOtpData,
    loading: sendingOtp,
    error: sendOtpError,
    refetch: sendOtp,
  } = LoginAPI.Login({ phoneNumber });
  const {
    data: verifyOtpData,
    loading: verifyingOtp,
    error: verifyOtpError,
    refetch: verifyOtp,
  } = LoginAPI.VerifyOtp({ phoneNumber, otp: otpDigits.join("") });

  useEffect(() => {
    if (!sendingOtp && !sendOtpError && sendOtpData) {
      setIsEnteringNumber(false);
    }
  }, [sendingOtp, sendOtpError, sendOtpData]);

  useEffect(() => {
    if (verifyOtpData && !verifyOtpError && !verifyingOtp) {
      login(verifyOtpData?.token);
    }
    if (verifyOtpError) {
      addNotification({
        id: Date.now(),
        type: "error",
        message: Texts.wrongOtp,
      });
    }
  }, [verifyOtpData, verifyOtpError, verifyingOtp]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isEnteringNumber) {
      sendOtp();
    } else {
      verifyOtp();
    }
  };

  const handleOtpChange = (index, e) => {
    const newOtpDigits = [...otpDigits];
    newOtpDigits[index] = e.target.value.replace(/\D/g, "");
    setOtpDigits(newOtpDigits);
    if (e.target.value && index < otpDigits.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <div className="flex w-full flex-col gap-8 pt-[81px]">
      <Typography size="6xl">
        {isEnteringNumber ? Texts.login : Texts.sentCode}
      </Typography>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {isEnteringNumber ? (
          <Input
            placeholder="09123456789"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            label={Texts.inputLabel}
          />
        ) : (
          <div className="flex flex-row-reverse justify-between md:justify-center md:gap-8">
            {otpDigits.map((digit, index) => (
              <Input
                key={index}
                placeholder="-"
                value={digit}
                onChange={(e) => handleOtpChange(index, e)}
                maxLength={1}
                type="text"
                className="w-[58px] text-center"
                ref={(el) => (inputRefs.current[index] = el)}
              />
            ))}
          </div>
        )}

        <div className="flex justify-end">
          <Button
            mode={"primary"}
            type="submit"
            disabled={sendingOtp || verifyingOtp}
          >
            <Typography weight="bold">
              {isEnteringNumber ? Texts.getCode : Texts.confirm}
            </Typography>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default FormModule;
