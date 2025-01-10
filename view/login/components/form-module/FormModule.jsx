"use client";
import LoginAPI from "@/api/login";
import Button from "@/components/button";
import Input from "@/components/input";
import Typography from "@/components/typography";
import { useAuthContext } from "@/utils/context/useAuthContext";
import { useNotificationContext } from "@/utils/context/useNotificationContext";
import React, { useEffect, useRef, useState } from "react";
import { Consts } from "./consts";
import OTPInput from "react-otp-input";

function FormModule() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");

  const [isEnteringNumber, setIsEnteringNumber] = useState(true);

  const { login } = useAuthContext();
  const { addNotification } = useNotificationContext();

  const [
    { data: sendOtpData, loading: sendingOtp, error: sendOtpError },
    sendOtp,
  ] = LoginAPI.Login({ phoneNumber });

  const [
    { data: verifyOtpData, loading: verifyingOtp, error: verifyOtpError },
    verifyOtp,
  ] = LoginAPI.VerifyOtp({ phoneNumber, otp: otp });

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
        message: Consts.wrongOtp,
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

  return (
    <div className="flex w-full flex-col gap-8 pt-[81px]">
      <Typography size="5xl">
        {isEnteringNumber ? Consts.login : Consts.sentCode}
      </Typography>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {isEnteringNumber ? (
          <Input
            placeholder="09123456789"
            value={phoneNumber}
            onChange={(e) => {
              const englishDigitsOnly = e.target.value.replace(
                /[۰-۹]/g,
                (match) => {
                  return String.fromCharCode(match.charCodeAt(0) - 0x0660);
                },
              );
              setPhoneNumber(englishDigitsOnly);
            }}
            label={Consts.inputLabel}
          />
        ) : (
          <div className="flex items-center justify-center md:gap-8">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span>-</span>}
              inputStyle={{ width: "58px" }}
              containerStyle={{
                width: "100%",
                justifyContent: "space-between",
                gap: "4px",
                maxWidth: "400px",
                flexDirection: "row-reverse",
              }}
              placeholder="----"
              shouldAutoFocus
              renderInput={(props) => <Input {...props} />}
            />
          </div>
        )}

        <div className="flex justify-end">
          <Button
            mode={"primary"}
            type="submit"
            disabled={sendingOtp || verifyingOtp}
          >
            <Typography weight="bold">
              {isEnteringNumber ? Consts.getCode : Consts.confirm}
            </Typography>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default FormModule;
