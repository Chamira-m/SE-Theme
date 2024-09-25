import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
// import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",

  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.",
};

const AboutPage = () => {
  return (
    <>
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
