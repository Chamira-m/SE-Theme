import { Metadata } from "next";
import Portfolio from "@/components/Portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.",
};

const BlogPage = () => {
  return (
    <>
      <Portfolio />
    </>
  );
};

export default BlogPage;
