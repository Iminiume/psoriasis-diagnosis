"use client";

import Button from "@/app/components/button";
import Input from "@/app/components/input";
import React, { useState } from "react";

function Form() {
  const [numberInput, setNumberInput] = useState(null);
  return (
    <form className="flex w-full flex-col gap-[15px]">
      <div className="flex w-full">
        <Input
          label="شماره تلفن"
          type="text"
          value={numberInput}
          min={11}
          max={11}
          placeholder="شماره"
          onChange={(value) => setNumberInput(value)}
        />
      </div>
      <div className=""></div>
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default Form;
