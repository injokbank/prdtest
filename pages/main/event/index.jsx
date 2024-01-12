import Link from "next/link";
import Script from "next/script";
import React, { useEffect, useRef, useState } from "react";
import BottomBar from '@/components/Main/BottomBar'
import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "@/pages/api/fetch.js";

function event() {
  const scrollRef = useRef(0);
  const router = useRouter();
  const [savedScrollPosition, setSavedScrollPosition] = useState(0);
  const uri = "/ib20/act/PBKMAN0000002102A";
  //PBKMAN0000002102A 상품, PBKMAN0000002103A 
  const { data, error, isLoading } = useSWR(uri, fetcher);
  console.log(`----------- under useSWR ------------` + JSON.stringify(data));

  // 스크롤 위치 저장
  useEffect(() => {
    const handleScroll = () => {
      console.log(`########################### : ` );
      const scrollTop = scrollRef.current.scrollTop;
      setSavedScrollPosition(scrollTop);
      console.log(`scroll savedScrollPosition........... : ` + savedScrollPosition);
    };

    // 이벤트 리스너 추가
    router.events.on('routeChangeStart', handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      router.events.off('routeChangeStart', handleScroll);
    };

    // 저장된 위치를 어딘가에 저장 (예: state 또는 context 활용)
  }, [router]);

  useEffect(() => {
    // Swiper 라이브러리가 로드되었는지 확인
    const isSwiperLoaded = typeof Swiper !== 'undefined';

    if (isSwiperLoaded) {
      // Swiper 라이브러리가 로드되었을 때만 초기화
      new Swiper(".ui-swiper .swiper-container", {
        slidesPerView: 'auto',
        spaceBetween: 15,
        loop: true,
      });
    }
  }, []); // 빈 배열은 컴포넌트가 마운트될 때 한 번만 실행

  return ( 
    <>
    <Script
      strategy="afterInteractive"
      src={"https://www.kbanknow.com/resource/js/cmm/lib/swiper.min.js"}
      onLoad={() => {
        console.log(`###### sdifusaduifhaiusdf` );
        let prdBannerSwiper = new Swiper(".product-carousel-group.ui-swiper .swiper-container", { spaceBetween: 10, loop: false });
      }}
    />

    <div className="page-inner-scroll" ref={scrollRef}>
      <div className="main-tab-container">
        <div
          className="main-tab-content02"
          id="content_2"
        >

          <div className="main-tab-content-inner">
            <div className="container-component frm-prd">
              <div className="headertab-products">
                <div className="component-header">
                  <div className="home-header-group">
                    <div className="home-header-col">
                      <div className="home-header-tit">
                        <span className="home-tit">상품</span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="component-tab sticky-tab no-space type-extend">
                  <div className="tab-group ui-tab">
                    <div className="tab-round-group">
                      <div className="tab-list-type ui-tab-nav">
                        <ul className="tab-list-col" role="tablist">
                          {data?._msg_._body_?.pdTabList.map(
                            (item) =>
                            <li className="tab-item">
                              <a
                                className="tab-link"
                                href="#none"
                                role="button"
                              >
                                <img
                                  src={decodeURIComponent(decodeURIComponent(item.cmnCdAbrvNm)).replace(/\+/g, " ")}
                                  alt=""
                                />
                                <span className="txt">{decodeURIComponent(decodeURIComponent(item.cmnCdNm)).replace(/\+/g, " ")}</span>
                              </a>
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="component-products-carousel">
                <div className="title-group">
                  <div className="title-field-page">
                    주목할 만한 상품
                  </div>
                </div>
                <div
                  className="product-carousel-group carousel-group ui-swiper"
                  data-space-between={10}
                >
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <a className="section-link" href="#none">
                          <div className="frm-card">
                            <div
                              className="img-figure"
                              style={{ backgroundColor: "#96d1ff" }}
                            >
                              <img
                                src="../../../../resource/img/mmk/main/products/home/img_prod_home_cura_01.png"
                                alt="자유적금"
                              />
                              <p className="txt-notice">
                                <span>금리가 올랐어요</span>
                                <span />{" "}
                              </p>
                            </div>
                            <div className="product-info">
                              <div className="tit-product">
                                <em>코드K 자유적금</em>
                                <span>
                                  코드로 우대받는 간편한 자유적금
                                </span>
                              </div>
                              <span className="txt-btntype">
                                보러가기
                              </span>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a className="section-link" href="#none">
                          <div className="frm-card">
                            <div
                              className="img-figure"
                              style={{ backgroundColor: "#141414" }}
                            >
                              <img
                                src="../../../../resource/img/mmk/main/products/home/img_prod_home_cura_01.png"
                                alt="Hi teen 카드"
                              />
                              <p className="txt-notice">
                                <span>새로운 상품 출시</span>
                                <span />
                              </p>
                            </div>
                            <div className="product-info">
                              <div className="tit-product">
                                <em>케이뱅크 Hi teen 카드</em>
                                <span>자주쓰는 곳에서 편리하게</span>
                              </div>
                              <span className="txt-btntype">
                                보러가기
                              </span>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a className="section-link" href="#none">
                          <div className="frm-card">
                            <div
                              className="img-figure"
                              style={{ backgroundColor: "#dba5fe" }}
                            >
                              <img
                                src="../../../../resource/img/mmk/main/products/home/img_prod_home_cura_01.png"
                                alt="기분통장"
                              />
                              <p className="txt-notice">
                                <span>기분통장이 새로워졌어요</span>
                                <span />
                              </p>
                            </div>
                            <div className="product-info">
                              <div className="tit-product">
                                <em>기분통장</em>
                                <span>기분을 낭비하지 마세요</span>
                              </div>
                              <span className="txt-btntype">
                                보러가기
                              </span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="component-product-list">
                <div className="title-group">
                  <div className="title-field-page">인기상품 Top5</div>
                </div>
                <div className="product-list-group">
                  <ul>
                    {data?._msg_._body_.pdRcmdFavSvrList.map((item) => (
                      item.viewType==='2' &&
                      <li>
                      <a href="#none">
                        <em>
                          <span>{decodeURIComponent(decodeURIComponent(item.fnclNm))}</span>
                          <span>{decodeURIComponent(decodeURIComponent(item.mktDesc))}</span>
                        </em>
                        {item.btnNm && <span className="ico-txt">{decodeURIComponent(decodeURIComponent(item.btnNm))}</span>}
                      </a>
                    </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="component-product-list product-recommend">
                <div className="title-group">
                  <div className="img-figure">
                    <img
                      src="../../../../resource/img/mmk/main/products/home/PDhome_logo.svg"
                      alt="make money"
                    />
                  </div>
                  <div className="title-field-page">
                    부자되는 금융 습관
                  </div>
                </div>
                <div className="product-recommend-group">
                  <ul>
                  {data?._msg_._body_?.pdRcmdFavSvrList.map((item) => (
                    item.viewType==='3' &&
                    <li>
                      <a href="none">
                        <em>
                          <img
                            src={decodeURIComponent(decodeURIComponent(item.imgFile))}
                            alt=""
                          />
                          <span>{decodeURIComponent(decodeURIComponent(item.fnclNm))}</span>
                        </em>
                        <b className="txt-detail">
                          <span>{decodeURIComponent(decodeURIComponent(item.mktDesc))}</span>
                        </b>
                      </a>
                    </li>
                  ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomBar tab={"event"}></BottomBar>

      <div className="component-btn">
        <button className="btn-chatbot" type="button">
          <span className="hide-txt">챗봇</span>
          <span className="chatbot-reply">
            쉽고 빠르게 도와드리는 챗봇
          </span>
          <i className="ico-chatbot" aria-hidden="true">
            <span className="dot01" />
            <span className="dot02" />
            <span className="dot03" />
          </i>
        </button>
      </div>
    </div>

    </>
    );
}

export default event;
