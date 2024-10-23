"use client";
import React, { useState } from "react";
import { useUserContext } from "@/utils/context/useUserContext";
import RoleCard from "@/components/role-card";

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
  return (
    <div className="flex gap-10">
      <div className="basis-1/4">
        <RoleCard />
      </div>
      <div className="basis-3/4"></div>
    </div>
  );
}

export default LoginForm;
