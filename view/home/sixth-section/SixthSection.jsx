import IconRenderer from "@/components/icon/IconRenderer";
import Input from "@/components/input";
import TitleIndicator from "@/components/title-indicator";
import Link from "next/link";
import React from "react";

const Texts = {
  news: "از جدیدترین‌ها باخبر شو",
  email: "ایمیل",
};

const socialIcons = [
  { icon: "email", link: "/" },
  { icon: "email", link: "/" },
  { icon: "email", link: "/" },
  { icon: "email", link: "/" },
];

function SixthSection() {
  return (
    <section className="relative px-8 py-[8rem]">
      <div className="mx-auto flex max-w-custom flex-col items-center justify-center gap-8">
        <TitleIndicator color="purple">{Texts.news}</TitleIndicator>

        <div className="w-[300px]">
          <Input
            placeholder={Texts.email}
            className="border-[linear-gradient(225deg, #18C8FF 14.89%, #933FFE 85.85%)] h-14 border"
          />
        </div>

        <div className="flex gap-6">
          {socialIcons.map((item, index) => (
            <Link key={index} href={item.link}>
              <div className="flex h-8 w-8 items-center justify-center rounded bg-socialIconBg text-inputBg">
                <IconRenderer icon={item.icon} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SixthSection;
