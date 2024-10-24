"use client";
import Button from "@/components/button/Button";
import RoleCard from "@/components/role-card";
import Typography from "@/components/typography";
import { useUserContext } from "@/utils/context/useUserContext";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import PinkShadow from "@/public/images/pinkShadow.png";
import Image from "@/components/image";

const roles = [
  { text: "بیمار", icon: "pill", value: "patient" },
  { text: "پزشک", icon: "stethoScope", value: "doctor" },
];

const text = { chooseRole: "نقش خود را انتخاب کنید", confirm: "تایید" };

function RoleSelectionLayout() {
  const [isSelected, setIsSelected] = useState(undefined);
  const { state, dispatch } = useUserContext();
  const router = useRouter();
  console.log(isSelected);
  const handleConfirm = () => {
    dispatch({ type: "SET_ROLE", payload: isSelected });
    // Redirect to the form page
    router.push(`/login/form?role=${isSelected}`);
  };

  return (
    <section className="relative h-full bg-pinkShadow bg-contain bg-right bg-no-repeat px-8 py-20">
      <div className="mx-auto flex max-w-custom flex-col items-start justify-center gap-10">
        <Typography
          size="6xl"
          weight="bold"
          className="text-center lg:text-start"
        >
          {text.chooseRole}
        </Typography>
        <div className="flex w-full flex-col items-center gap-16 lg:flex-row">
          {roles.map((item, i) => {
            return (
              <RoleCard
                icon={item.icon}
                text={item.text}
                isSelected={isSelected === item.value}
                onClick={() => setIsSelected(item.value)}
              />
            );
          })}
        </div>
        <div className="flex w-full justify-center lg:justify-end">
          <Button disabled={!isSelected} onClick={handleConfirm}>
            {text.confirm}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default RoleSelectionLayout;
