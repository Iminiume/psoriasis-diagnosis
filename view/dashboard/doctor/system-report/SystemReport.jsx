"use client";
import React from "react";
import SectionLayout from "../../components/section-layout";
import { Consts } from "./consts";
import Button from "@/components/button";
import Typography from "@/components/typography";
import isSSR from "@/utils/isSSR";
import ReportAPI from "@/api/report";

function SystemReport() {
  const [{ data }, refetch] = ReportAPI.GetUsersExcel();

  const handleDownload = async () => {
    try {
      refetch();
      const url = !isSSR() && window.URL.createObjectURL(new Blob([data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "system-report.xlsx");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };

  return (
    <SectionLayout title={Consts.title} hasButton={false}>
      <div>
        <Button onClick={handleDownload}>
          <Typography>{Consts.download}</Typography>
        </Button>
      </div>
    </SectionLayout>
  );
}

export default SystemReport;
