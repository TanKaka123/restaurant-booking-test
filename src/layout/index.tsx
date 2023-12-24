import React, { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

interface LayoutWrapperProps {
  content: ReactNode;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ content }) => {
  return (
    <>
      <Header />
      {content}
      <Footer />
    </>
  );
};
export default LayoutWrapper;
