
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force le scroll en haut de page sans animation pour éviter les flashs visuels pendant la transition
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
