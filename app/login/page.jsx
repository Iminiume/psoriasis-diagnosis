"use client";
import dynamic from "next/dynamic";
import React from "react";

const LoginLayout = dynamic(() => import("@/view/login"));

function LoginPage() {
  return <LoginLayout />;
}

export default LoginPage;
