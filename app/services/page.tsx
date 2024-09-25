import React from "react";
import Features from "@/components/Features";
import { Metadata } from "next";

// import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "Services",

  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.",
};
const Sevices = () => {
  return (
    <>
      <Features />
    </>
  );
};

export default Sevices;
