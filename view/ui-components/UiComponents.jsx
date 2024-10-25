"use client";

import Button from "@/components/button";
import Drawer from "@/components/drawer";
import IconRenderer from "@/components/icon/IconRenderer";
import Input from "@/components/input";
import StepProgress from "@/components/step-progress";
import TitleIndicator from "@/components/title-indicator";
import Typography from "@/components/typography";
import { useNotificationContext } from "@/utils/context/useNotificationContext";
import React, { useRef, useState } from "react";
const icons = [
  "arrowLeft",
  "burger",
  "chevronRight",
  "email",
  "location",
  "phone",
  "play",
  "user",
  "xClose",
  "exit",
  "warning",
  "infoCircle",
  "errorCircle",
  "checkCircle",
];

const typographySizes = [
  { size: "9xl", weigth: "bold" },
  { size: "9xl" },
  { size: "8xl" },
  { size: "7xl" },
  { size: "6xl" },
  { size: "5xl" },
  { size: "4xl" },
  { size: "3xl" },
  { size: "2xl" },
  { size: "xl" },
  { size: "lg" },
  { size: "md" },
];

const steps = [
  { label: "مجتبی", link: "/ui-component" },
  { label: "مجتبی", link: "/ui-component" },
  { label: "مجتبی", link: "/ui-component" },
  { label: "مجتبی", link: "/ui-component" },
  { label: "مجتبی", link: "/ui-component" },
];

function UiComponents() {
  const [prSteps, setPrSteps] = useState(0);
  const drawerRef = useRef();
  const { addNotification } = useNotificationContext();

  return (
    <section className="px-8">
      <div className="mx-auto flex max-w-custom flex-col gap-16">
        <div className="flex flex-col gap-4">
          <TitleIndicator>Typography component</TitleIndicator>
          {typographySizes.map((item) => (
            <Typography size={item.size} weight={item.weigth}>
              {item.size}
            </Typography>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <TitleIndicator>Button component</TitleIndicator>
          <Button>primary</Button>

          <Button mode="secondary">secondary</Button>

          <Button disabled>disabled</Button>
        </div>

        <div className="flex flex-col gap-4">
          <TitleIndicator>Drawer Component</TitleIndicator>
          <Drawer ref={drawerRef}>Drawer Content</Drawer>
          <Button onClick={() => drawerRef.current.open()}>Open Drawer</Button>
        </div>

        <div className="flex flex-col gap-8">
          <TitleIndicator>Icon Component</TitleIndicator>
          <div className="flex flex-wrap gap-8">
            {icons.map((icon) => (
              <div className="flex flex-col items-center justify-center gap-2">
                <IconRenderer icon={icon} />
                <Typography>{icon}</Typography>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <TitleIndicator>Step Progress Component</TitleIndicator>
          <StepProgress steps={steps} currentStep={prSteps} />
          <Button
            onClick={() => setPrSteps((step) => step + 1)}
            disabled={prSteps === steps.length}
          >
            Next
          </Button>
        </div>

        <div className="flex flex-col gap-8">
          <TitleIndicator>Input Component</TitleIndicator>

          <Input label="Simple input" placeholder="09218239745" />
          <Input label="Disabled input" disabled />
          <Input
            label="Validate input"
            validateInput={(value) => value.length > 3}
          />
        </div>

        <div className="flex flex-col gap-8">
          <TitleIndicator>Notifiaction Component</TitleIndicator>
          <Button
            onClick={() =>
              addNotification({ type: "error", message: "خطا", id: Date.now() })
            }
            disabled={prSteps === steps.length}
          >
            Show Notificaiton
          </Button>
        </div>
      </div>
    </section>
  );
}

export default UiComponents;
