import React from "react";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";

// import Breadcrumb from "@/components/Common/Breadcrumb";
export const metadata: Metadata = {
  title: "Pricing",

  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.",
};
const PricingPage = () => {
  return (
    <>
      <Pricing />
    </>
  );
};

export default PricingPage;
