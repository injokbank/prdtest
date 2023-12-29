import "../styles/productGlobal.css"; //운영중인 버전 전역 css 모음
import "../styles/main.css";
import "../styles/kbank_renew.css";
import "../styles/m_web.css";
import "../styles/font.css";
import { RecoilRoot } from "recoil";
import React, { useEffect } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import Router, { useRouter } from "next/router";

//import Layout from "../components/Layout";
export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    if (!("scrollRestoration" in window.history)) return;

    let shouldSaveScroll = true;
    window.history.scrollRestoration = "manual";

    let savedScrollPos = 0;

    const saveScrollPos = () => {
      savedScrollPos = window.scrollY;
      // You can save the scroll position to local storage or a global variable
      // Example using local storage:
      // localStorage.setItem('scrollPosition', savedScrollPos);
    };

    const restoreScrollPos = () => {
      // You can retrieve the scroll position from local storage or a global variable
      // Example using local storage:
      // const storedScrollPos = localStorage.getItem('scrollPosition');
      // const scrollPosition = storedScrollPos ? parseInt(storedScrollPos, 10) : 0;

      // Scroll to the saved position
      window.scrollTo(0, savedScrollPos);
    };

    const onRouteChangeStart = () => {
      if (!shouldSaveScroll) return;
      saveScrollPos();
    };

    const onRouteChangeComplete = () => {
      restoreScrollPos();
    };

    Router.beforePopState(() => {
      shouldSaveScroll = false;
      return true;
    });

    Router.events.on("routeChangeStart", onRouteChangeStart);
    Router.events.on("routeChangeComplete", onRouteChangeComplete);

    return () => {
      Router.beforePopState(() => true);
      Router.events.off("routeChangeStart", onRouteChangeStart);
      Router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, [router]);

  return (
    <RecoilRoot>
      {/* <React.StrictMode> */}
      {/* <QueryClientProvider client={queryClient}> */}
      {/* <Layout> */}
      <Component {...pageProps} />
      {/* </Layout> */}
      {/* </QueryClientProvider> */}
      {/* </React.StrictMode> */}
    </RecoilRoot>
  );
}
