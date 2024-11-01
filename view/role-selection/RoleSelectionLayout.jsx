"use client";
import Button from "@/components/button/Button";
import RoleCard from "@/components/role-card";
import Typography from "@/components/typography";
import { useAuthContext } from "@/utils/context/useAuthContext";
import { useUserContext } from "@/utils/context/useUserContext";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const roles = [
  { text: "بیمار", icon: "pill", value: "Patient" },
  { text: "پزشک", icon: "stethoScope", value: "Doctor" },
];

const text = { chooseRole: "نقش خود را انتخاب کنید", confirm: "تایید" };

function RoleSelectionLayout() {
  const [isSelected, setIsSelected] = useState(undefined);
  const { setRole } = useUserContext();
  const { state } = useAuthContext();

  const router = useRouter();

  const handleConfirm = () => {
    setRole(isSelected);
    router.replace(`/dashboard/fill-form`);
  };

  useEffect(() => {
    if (!state.token) {
      router.replace("/login");
    }
  }, [state]);

  return (
    <section className="relative h-full bg-pinkShadow bg-contain bg-right bg-no-repeat px-8 py-20">
      <div className="mx-auto flex max-w-custom flex-col items-center justify-center gap-10">
        <Typography
          size="6xl"
          weight="bold"
          className="text-center lg:text-start"
        >
          {text.chooseRole}
        </Typography>
        <div className="flex w-full flex-col items-center justify-center gap-16 lg:flex-row">
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
