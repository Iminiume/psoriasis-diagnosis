import React from "react";
import { Consts } from "../../consts";
import Button from "@/components/button";
import Typography from "@/components/typography";
import IconRenderer from "@/components/icon/IconRenderer";

function LoginButton({ isLoggedIn, onClick }) {
  return (
    <Button
      mode="primary"
      className="flex items-center gap-6"
      onClick={onClick}
    >
      <IconRenderer icon={isLoggedIn ? "exit" : "user"} />
      <Typography size="xl" weight="medium">
        {isLoggedIn ? Consts.logOut : Consts.comeIn}
      </Typography>
    </Button>
  );
}

export default LoginButton;
