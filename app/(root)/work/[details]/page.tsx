// 'use client';
import type { Metadata } from "next";
import SectionMyRole from "./sections/section-my-role";
import SectionHeader from "./sections/seection-header";
import SectionTheProject from "./sections/section-the-project";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { feacturedWork } from "@/assets/constants";
import { StaticImageData } from "next/image";

export const metadata: Metadata = {
  title: "Work Details",
  description: "Work Details",
};

const DetailsWorkPage = () => {
  return (
    <main>
      <SectionHeader />
      <SectionMyRole />
      <SectionTheProject />
    </main>
  );
};


export default DetailsWorkPage;
