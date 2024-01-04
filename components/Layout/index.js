import { useEffect, useRef, useState } from "react";
import { scrollState } from "@/recoil/global";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  // const [lDeviceState, setDeviceState] = useRecoilState(deviceState);
  // const [proudctScrolling, setProudctScrolling] = useRecoilState(scrollState);
  const [scrolling, setScrolling] = useState(false);
  const [proudctScrolling, setProudctScrolling] = useRecoilState(scrollState);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolling(scrollTop > 100); // Adjust the value based on when you want the header to change
      setProudctScrolling(scrollTop > 314);
      console.log(`scroll ........... : ` + proudctScrolling);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means the effect runs once after the initial render

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     // setScrolling(scrollTop > 100); // Adjust the value based on when you want the header to change
  //     // setProudctScrolling(scrollTop > 314);
  //     // console.log(`scroll ........... : ` + proudctScrolling);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup the event listener when the component is unmounted
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []); // Empty dependency array means the effect runs once after the initial render

  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default Layout;
