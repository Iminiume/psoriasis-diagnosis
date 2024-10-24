"use client";
import React, { useState } from "react";
import { useUserContext } from "@/utils/context/useUserContext";
import RoleCard from "@/components/role-card";
import StepProgress from "@/components/step-progress";

function LoginForm() {
  const { state, dispatch } = useUserContext();
  const [formData, setFormData] = useState({
    // Initialize form fields
  });
  console.log(state);
  const handleSubmit = async () => {
    const completeData = {
      ...formData,
      role: state.role,
    };

    try {
      const response = await fetch("/api/submit-user-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(completeData),
      });

      if (response.ok) {
        const result = await response.json();
        // Handle success (e.g., navigate to dashboard)
        dispatch({ type: "AUTH_SUCCESS" });
        window.location.href = "/dashboard";
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error (e.g., show a notification)
    }
  };
  console.log(state.role);
  return (
    <section className="h-screen bg-pinkShadow bg-contain bg-right bg-no-repeat px-8 py-8">
      <div className="mx-auto flex h-full max-w-custom gap-10">
        <div className="flex basis-1/4 flex-col">
          <RoleCard
            icon={state.role === "patient" ? "pill" : "stethoScope"}
            text={state.role === "patient" ? "بیمار" : "دکتر"}
            isSelected
          />
          <StepProgress />
        </div>
        <div className="h-full basis-3/4 rounded-[32px] border"></div>
      </div>
    </section>
  );
}

export default LoginForm;
