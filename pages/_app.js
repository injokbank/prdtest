import "../styles/productGlobal.css"; //운영중인 버전 전역 css 모음
import "../styles/main.css";
import "../styles/kbank_renew.css";
import "../styles/m_web.css";
import "../styles/font.css";
import useScrollResotration from "@/hooks/useScrollRestoration";
import { RecoilRoot } from "recoil";
import React, { useEffect, useRef } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import Router, { useRouter } from "next/router";
import Layout from "../components/Layout";
import MainLayout from "@/layouts/MainLayout";

export default function App({ Component, pageProps, router }) {
  useScrollResotration(router);
  console.log(`app.js called ` + router);
  // const router = useRouter();

  // useEffect(() => {
  //   // 페이지 이동 시 스크롤 위치 초기화를 비활성화
  //   const handleRouteChange = (url) => {
  //     if (router.asPath !== url) {
  //       window.scrollTo(0, 0);
  //     }
  //   };

  //   router.events.on("routeChangeStart", handleRouteChange);

  //   return () => {
  //     router.events.off("routeChangeStart", handleRouteChange);
  //   };
  // }, [router.events]);
  return (
    <RecoilRoot>
      {/* <React.StrictMode> */}
      {/* <QueryClientProvider client={queryClient}> */}
      <Layout>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Layout>
      {/* </QueryClientProvider> */}
      {/* </React.StrictMode> */}
    </RecoilRoot>
  );
}
