import { useEffect, useLayoutEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Header from "./tools/Header";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loader from "./tools/Loader";

const RoutesWrapper = () => {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();
  // Initialize the ScrollTrigger when the component mounts
  useEffect(() => {
    gsap.to(window, { duration: 0, scrollTo: { y: 800 } });
  }, []);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);
  // Loader state change
  useLayoutEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);
  return loading ? (
    <Loader />
  ) : (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default RoutesWrapper;
