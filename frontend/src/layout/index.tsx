import React, { ReactNode, useMemo } from "react";
import Header from "./header";
import Footer from "./footer";
import { useLocation } from "react-router-dom";

interface LayoutWrapperProps {
  content: ReactNode;
}
export const NO_BOTTOM_NAVIGATION_PAGES = ["/admin"];
const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ content }) => {

  const location = useLocation();
  // const isCurrentUser = useSelector(selectCurrentUser);
  const notBottomNav = useMemo(() => {
    return NO_BOTTOM_NAVIGATION_PAGES.some((page) =>
      location.pathname.startsWith(page)
    ) ;
  }, [location]);// && !isCurrentUser

  if (notBottomNav) {
    return <>{content}</>;
  }


  return (
    <>
      <Header />
      {content}
      <Footer />
    </>
  );
};
export default LayoutWrapper;