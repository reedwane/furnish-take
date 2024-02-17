import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import { MinHeight } from "@/components/maxwidth";

const LayoutWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <MinHeight>{children}</MinHeight>
      <Footer />
    </>
  );
};

export default LayoutWrapper;
