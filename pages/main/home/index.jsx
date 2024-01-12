import Link from "next/link";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Popup from "../../../components/popup";
import { useEffect, useState } from "react";
import dtlList from "@/public/datas/dtlList";
import Script from "next/script";
import BottomBar from "@/components/Main/BottomBar";
import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "@/pages/api/fetch.js";

function home() {
  const [isOpen, setIsOpen] = useState(false);
  const [detailItem, setDetailItem] = useState([]);
  const scrollRef = useRef(0);
  const router = useRouter();
  const [savedScrollPosition, setSavedScrollPosition] = useState(0);
  const uri = "/ib20/act/PBKMAN0000002400A";
  const { data, error, isLoading } = useSWR(uri, fetcher);

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
    {console.log(`###### sdifusaㅁㄴㅇㅁㄴㅇㅁㄴㅇㄴㅁduifhaiusdf` )}
<Script
      strategy="beforeInteractive"
      src={"https://www.kbanknow.com/resource/js/cmm/lib/swiper.min.js"}
    />
    <Script async src={"https://www.kbanknow.com/resource/js/mmk/common.ui.libs.js"} />
    <Script async src={"https://www.kbanknow.com/resource/js/mmk/common.ui.js"} />
    <Script async src={"https://www.kbanknow.com/resource/js/mmk/main.ui.js"} />
    {/* <Script async src={"https://www.kbanknow.com/resource/js/smb/com/smbjs/smb.core.js"} /> */}
    <Script async src={"https://www.kbanknow.com/resource/js/ui.js"} />
    <Script async src={"https://www.kbanknow.com/resourcez/js/cmm/lib/lottie.min.js"} />


    <div className="page-inner-scroll" ref={scrollRef}>
      
      <div className="main-tab-container">

          <div className="main-tab-content-inner">
            <div className="container-component bg-gray">
              <div className="component-header bg-gray">
                {/* 20220517 .my-header-group 클래스 추가*/}
                <div className="home-header-group my-header-group">
                  <div className="home-header-col">
                    <a className="btn-logo-kbank" href="#none">
                      <span className="hide-txt">Kbank</span>
                      <i className="ico-main-ci" aria-hidden="true" />
                    </a>
                  </div>
                  <div className="home-header-col">
                    {/* s: 20220419 수정 (새알림 아이콘 추가 new-info)*/}
                    <a className="btn-main-benefit" href="#none">
                      {/* 22-12-23 D: 개발 혜택 이동 들어갈곳 onclick="goToEventMenu();" */}
                      <span className="hide-txt">혜택</span>
                      <span className="new-info">
                        <span className="hide-txt">새알림</span>
                      </span>
                      {/* s: 20220510 아이콘 수정*/}
                      {/* s: 20220502 아이콘 수정*/}
                      {/* s: 20220517 아이콘 수정*/}
                      <span className="svg-main-benefit">
                        <span className="box">

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width={28}
                            height={28}
                            viewBox="0 0 32 32"
                          >
                            <defs>
                              <path id="a" d="M0 0h32v32H0z" />
                            </defs>
                            <g fill="none" fillRule="evenodd">
                              <mask id="b" fill="#fff">
                                <use xlinkHref="#a" />
                              </mask>
                              <g mask="url(#b)">
                                <g
                                  stroke="#0F0060"
                                  strokeWidth={2}
                                  transform="translate(4.833 4.2)"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M7.417 0c.918 0 1.707.57 2.057 1.388l1.693 3.279h-3.75c-1.243 0-2.25-1.045-2.25-2.334C5.167 1.045 6.174 0 7.417 0zm7.5 0c-.918 0-1.708.57-2.058 1.388l-1.692 3.279h3.75c1.242 0 2.25-1.045 2.25-2.334 0-1.288-1.008-2.333-2.25-2.333z"
                                  />
                                  <rect
                                    width="21.67"
                                    height={19}
                                    x=".33"
                                    y="4.97"
                                    rx={2}
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11.33 5.47v17.5m-10-12.5l19.84.33"
                                  />
                                </g>
                              </g>
                            </g>
                          </svg>
                        </span>
                        <span className="money">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 19 19"
                          >
                            <g fill="none" fillRule="evenodd">
                              <circle
                                cx="9.5"
                                cy="9.5"
                                r="8.5"
                                fill="#FFF"
                                stroke="#0F0060"
                                strokeWidth={2}
                              />
                              <circle
                                cx="9.5"
                                cy="9.5"
                                r="7.5"
                                fill="#C8F03E"
                                style={{ mixBlendMode: "multiply" }}
                              />
                              <path
                                stroke="#0F0060"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.8"
                                d="M6.071 7l1.696 5 1.725-5 1.593 5 1.844-5M5 9.31h1.714m5.572 0H14"
                              />
                            </g>
                          </svg>
                        </span>
                        <span className="msg">
                          <span className="svg-txt">돈 되는 혜택</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={103}
                            height={30}
                            viewBox="0 0 103 30"
                          >
                            <g fill="none" fillRule="evenodd">
                              <path
                                fill="#C8F03E"
                                d="M8 0h81a8 8 0 0 1 8 8v14a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8a8 8 0 0 1 8-8z"
                              />
                              <path
                                fill="#C8F03E"
                                d="M87.929 15L95 8.933 102.071 15 95 21.067z"
                              />
                            </g>
                          </svg>
                        </span>
                      </span>
                      {/* e: 20220517 아이콘 수정*/}
                      {/* e: 20220502 아이콘 수정*/}
                      {/* e: 20220510 아이콘 수정*/}
                    </a>
                    {/* e: 20220419 수정 (새알림 아이콘 추가 new-info)*/}
                  </div>
                </div>
              </div>

              <div className="component-card">
                <div className="home-card-layout-group">
                  {/* s: 20220616 Tip 추가*/}
                  {/* <div className="banner-tooltip-group open ui-tooltip">
                    <div className="tooltip-area">
                      <div className="tooltip-box">
                        <button
                          className="btn-tooltip-close"
                          type="button"
                        >
                          <span className="hide-txt">툴팁 닫기</span>
                        </button>
                        <div className="tooltip-content">
                          <p className="tit">
                            자주쓰는 다른은행 입출금계좌를 자주쓰는
                            다른은행 입출금계좌를
                          </p>
                          <p className="txt">
                            나에게 맞게 순서를 바꾸어 보세요 나에게 맞게
                            순서를 바꾸어 보세요
                          </p>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/* e: 20220616 Tip 추가*/}
                  {data?._msg_._body_?.mainAcctList2.map(
                            (item) =>{
                            
                            if(item.meetYn === 'N'){
                              return <>
                  <div className="home-card-group">
                    <div className="home-card-col">
                      <i
                        className="logo-bank089 w34"
                        aria-hidden="true"
                        data-bankname="케이뱅크"
                      />
                    </div>
                    <div className="home-card-col">
                      <div className="home-card-desc">
                        <div className="desc01">
                          <span className="name">
                          {decodeURIComponent(item.pdNm).replace(/\+/g, " ")}({item.acctNbr.substring(8,12) })
                          </span>
                          {/* <div className="tag negative">
                            <span className="txt">거래중지</span>
                          </div> */}
                        </div>
                        <div className="desc02">
                          <div className="sum-group fs21b ui-amount">
                            <button className="sum-check" type="button">
                              금액확인
                            </button>
                            {/* sum-loading 로딩영역 - 필요시 사용
                          <div class="sum-loading">
                            <div class="dot-flashing" aria-hidden="true"></div>
                          </div>*/}
                            <div className="sum">14,230원</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </>
                  }
                  })}

                  <div className="banner-tooltip-group open ui-tooltip">
                    <div className="tooltip-area">
                      <div className="tooltip-box">
                        <button
                          className="btn-tooltip-close"
                          type="button"
                        >
                          <span className="hide-txt">툴팁 닫기</span>
                        </button>
                        <div className="tooltip-content">
                          <p className="tit">
                            자주쓰는 다른은행 입출금계좌를
                          </p>
                          <p className="txt">
                            나에게 맞게 순서를 바꾸어 보세요
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* e: Tip */}
                  {/* e: FETASK-152 2022-11-25 입출금계좌 추가*/}
                </div>
              </div>
              {/*e: FETASK-152 2022-11-25 입출금계좌 수정*/}
              {/*s: FETASK-1654 추가(미가입서비스 진입점) 2023-11-08*/}
              {/* <div class="component-card">
            <div class="frm-flip">
              <div class="flip-conts h60">
                <a href="#none">
                  <div class="home-card-layout-group join-gate">
                    <div class="card-img-figure">
                      <i class="ico-home-plus" aria-hidden="true"></i>
                    </div>
                    <div class="card-text-box">기분통장 만들기</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="component-card">
            <div class="frm-flip">
              <div class="flip-conts h60">
                <a href="#none">
                  <div class="home-card-layout-group join-gate">
                    <div class="card-img-figure">
                      <i class="ico-home-plus" aria-hidden="true"></i>
                    </div>
                    <div class="card-text-box">챌린지박스 만들기</div>
                  </div>
                </a>
              </div>
            </div>
          </div> */}
              <div className="component-btn type2">
                <div className="btn-group depth2">
                  <div className="depth2-group">
                    <a className="btn-lv06" href="#none">
                      <span className="txt">기분통장 만들기</span>
                    </a>
                    <a className="btn-lv06" href="#none">
                      <span className="txt">챌린지박스 만들기</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="component-card-service">
                <div
                  className="carousel-group ui-swiper"
                >
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <a href="#">
                          <div className="service-card">
                            <div className="line01">
                              <img
                                src="/resource/img/bim/my_hand_coin.png"
                                alt=""
                              />
                              <div className="tag service-type2">
                                <span className="txt">HOT</span>
                              </div>
                            </div>
                            <div className="text-wrap">
                              <div className="text-tit line-clamp-2">
                                바로 이자받기 바로 이자받기 바로
                                이자받기
                              </div>
                              <div className="text-txt line-clamp-2">
                                매일 이자에 이자를 받아보자 매일 이자에
                                이자를 받아보자
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a href="#">
                          <div className="service-card">
                            <div className="line01">
                              <img
                                src="/resource/img/bim/my_stickgraph_1.png"
                                alt=""
                              />
                              <div className="tag service-type1">
                                <span className="txt">UP</span>
                              </div>
                            </div>
                            <div className="text-wrap">
                              <div className="text-tit line-clamp-2">
                                내가 공모주
                                <br /> 주인 메이트
                              </div>
                              <div className="text-txt line-clamp-2">
                                청약하면 얼마나
                                <br /> 받을까?
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a href="#">
                          <div className="service-card">
                            <div className="line01">
                              <img
                                src="/resource/img/bim/my_locker.png"
                                alt=""
                              />
                              {/* <div class="tag service-new">
                            <span class="txt">NEW</span>
                          </div> */}
                            </div>
                            <div className="text-wrap">
                              <div className="text-tit line-clamp-2">
                                랜덤현금
                                <br /> 행운상자
                              </div>
                              <div className="text-txt line-clamp-2">
                                이체받을때마다
                                <br /> 현금이 팡팡!!
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a href="#">
                          <div className="service-card">
                            <div className="line01">
                              <img
                                src="/resource/img/bim/my_moneytalk2.png"
                                alt=""
                              />
                              {/* <div class="tag service-new">
                            <span class="txt">NEW</span>
                          </div> */}
                            </div>
                            <div className="text-wrap">
                              <div className="text-tit line-clamp-2">
                                친구추천
                              </div>
                              <div className="text-txt line-clamp-2">
                                현금
                                <br />
                                무제한 뿌리기
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a href="#">
                          <div className="service-card">
                            <div className="line01">
                              <img
                                src="/resource/img/bim/my_insu_8_2.png"
                                alt=""
                              />
                              {/* <div class="tag service-new">
                            <span class="txt">NEW</span>
                          </div> */}
                            </div>
                            <div className="text-wrap">
                              <div className="text-tit line-clamp-2">
                                더보기
                              </div>
                              <div className="text-txt line-clamp-2">
                                생활서비스를
                                <br />
                                둘러보세요
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*e: FETASK-1654 추가(미가입서비스 진입점) 2023-11-08*/}
              {/* s: FETASK-573 2023-02-06 전략상품 가입 진입점 */}
              {/* <div class="component-card" data-id="flipFrame">
            <div class="frm-flip">
              <div class="flip-conts ui-swiper" data-effect="cube" data-direction="vertical"  data-name="flip" data-autoplay="4500">
                <div class="swiper-container">
                  <ul class="swiper-wrapper">
                    <li class="swiper-slide">
                      <a href="#none">
                        <div class="home-card-layout-group join-gate">
                          <div class="card-img-figure">
                            <i class="ico-home-plus" aria-hidden="true"></i>
                          </div>
                          <div class="card-text-box">첼린지박스 도전</div>
                        </div>
                      </a>
                    </li> 
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
              {/* e: FETASK-573 2023-02-06 전략상품 가입 진입점 */}
              {/*s: FETASK-443 2023-01-03 모임 리스트 그룹핑 */}
              <div className="component-card-group meet">
                {/*s: FETASK-152 2022-11-25 모임 서비스 */}
                {/*s: FETASK-462 2023-01-05 모임 이용정지 */}
                <div className="component-card deactivate">
                  <div className="home-card-layout-group">
                    <div className="home-card-top-group">
                      <div className="card-header">
                        <div className="card-tit">
                          <span className="txt">둥지냉면</span>
                          {/* FETASK-1080 링크 제거 2023-06-15 <a href="#none" class="quick-link">
                        <span class="hide-txt">모임 바로가기</span>
                        <i class="ico-arrow-sbr" aria-hidden="true"></i>
                      </a> */}
                        </div>
                      </div>
                    </div>
                    {/*s : 모임 계좌 */}
                    <div className="home-card-group">
                      <div className="home-card-col">
                        <div className="meet-pic">
                          <span className="frm-img">
                            {/* Profile Image 들어갈 자리 */}
                          </span>
                        </div>
                      </div>
                      <div className="home-card-col">
                        <div className="home-card-desc">
                          <div className="desc01">
                            <span className="name">모임통장</span>
                          </div>
                          <div className="desc02">
                            <div className="sum-group fs21b ui-amount">
                              <div className="fs18b">이용정지</div>
                              {/* <button class="sum-check" type="button" style="">금액확인</button> */}
                              {/* sum-loading 로딩영역 - 필요시 사용
                            <div class="sum-loading">
                              <div class="dot-flashing" aria-hidden="true"></div>
                            </div>*/}
                              {/* <div class="sum">1,220,000원</div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*e : 모임 계좌 */}
                    {/*s : 모임 계좌 */}
                    <div className="home-card-group">
                      <div className="home-card-col">
                        <div className="meet-pic">
                          <span className="frm-img chell">
                            {/* Profile Image 들어갈 자리 */}
                            {/* 클래스명
                          - family : 가족
                          - biz    : 회사동료사이
                          - love   : 커플사이
                          - play   : 동호회,동아리사이
                          - chell  : 모임 챌린지
                          - chell.ing  : 모임 챌린지 완료
                          - family : 가족
                          - etc    : 기타사이
                        */}
                          </span>
                        </div>
                      </div>
                      <div className="home-card-col">
                        <div className="home-card-desc">
                          <div className="desc01">
                            <span className="name">
                              돈모아서 오마카세 먹자
                            </span>
                          </div>
                          <div className="desc02">
                            <div className="sum-group fs21b ui-amount">
                              <div className="fs18b">이용정지</div>
                              {/* <button class="sum-check" type="button" style="">금액확인</button> */}
                              {/* sum-loading 로딩영역 - 필요시 사용
                            <div class="sum-loading">
                              <div class="dot-flashing" aria-hidden="true"></div>
                            </div>*/}
                              {/* <div class="sum">1,220,000원</div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*e : 모임 계좌 */}
                  </div>
                </div>
                {/*e: FETASK-462 2023-01-05 모임 이용정지 */}
                {/*s: 모임장 모임 */}
                <div className="component-card">
                  <div className="home-card-layout-group">
                    <div className="home-card-top-group">
                      <div className="card-header">
                        <div className="card-tit">
                          <span className="txt">모임장 모임</span>
                          {/* FETASK-1080 링크 제거 2023-06-15 <a href="#none" class="quick-link">
                        <span class="hide-txt">모임장 모임 바로가기</span>
                        <i class="ico-arrow-sbr" aria-hidden="true"></i>
                      </a> */}
                        </div>
                      </div>
                    </div>
                    {/*s: 모임장 계좌 기능 */}
                    <div className="home-card-top-group meet-leader">
                      <div className="card-header">
                        <div className="meet-pic">
                          <span className="frm-img">
                            {/* Profile Image 들어갈 자리 */}
                            {/* <img src="/resource/img/mmk/main/img_rec06_02.png" alt="" /> */}
                          </span>
                        </div>
                        <div className="card-info">
                          <div className="card-account-tit">
                            <span>모임통장</span>
                            {/*s: FETASK-462 2023-01-05 이용정지 아이콘 추가 */}
                            <div className="tag negative">
                              <span className="txt">이용정지</span>
                            </div>
                            {/*e: FETASK-462 2023-01-05 이용정지 아이콘 추가 */}
                            {/* s: 퀵버튼 */}
                            <a className="btn-quick-more" href="#none">
                              <i
                                className="ico-more-dot"
                                aira-hidden="true"
                              />
                              <span className="hide-txt">퀵버튼</span>
                            </a>
                            {/* e: 퀵버튼 */}
                          </div>
                          <div className="card-account-num">
                            100-200-000029
                          </div>
                        </div>
                      </div>
                      <div className="card-row">
                        <div className="card-col-content">
                          <div className="sum-group fs28b ui-amount">
                            <button
                              className="sum-check"
                              type="button"
                              style={{}}
                            >
                              금액확인
                            </button>
                            {/* sum-loading 로딩영역 - 필요시 사용
                          <div class="sum-loading">
                            <div class="dot-flashing" aria-hidden="true"></div>
                          </div>*/}
                            <div className="sum">10,000원</div>
                          </div>
                        </div>
                      </div>
                      {/*s: FETASK-1184 수정(버튼) 2023-07-20*/}
                      <div className="btn-group depth2">
                        <button className="btn-lv04" type="button">
                          <span className="txt">카드신청</span>
                        </button>
                        <div className="depth2-group">
                          <button
                            className="btn-lv04 bg-sky"
                            type="button"
                          >
                            <span className="txt">모임비요청</span>
                            {/*FETASK-1184 수정(버튼명) 2023-08-10*/}
                          </button>
                          <button
                            className="btn-lv04 bg-sky"
                            type="button"
                          >
                            <span className="txt">이체하기</span>
                          </button>
                        </div>
                      </div>
                      {/*e: FETASK-1184 수정(버튼) 2023-07-20*/}
                    </div>
                    {/*e: 모임장 계좌 기능 */}
                    {/*s : 모임 계좌 */}
                    <div className="home-card-group">
                      <div className="home-card-col">
                        <div className="meet-pic">
                          <span className="frm-img chell">
                            {/* Profile Image 들어갈 자리 */}
                            {/* 클래스명
                          - family : 가족
                          - biz    : 회사동료사이
                          - love   : 커플사이
                          - play   : 동호회,동아리사이
                          - chell  : 모임 챌린지
                          - chell.ing  : 모임 챌린지 완료
                          - family : 가족
                          - etc    : 기타사이
                        */}
                          </span>
                        </div>
                      </div>
                      <div className="home-card-col">
                        <div className="home-card-desc">
                          <div className="desc01">
                            <span className="name">
                              돈모아서 오마카세 먹자
                            </span>
                          </div>
                          <div className="desc02">
                            <div className="sum-group fs21b ui-amount">
                              <button
                                className="sum-check"
                                type="button"
                                style={{}}
                              >
                                금액확인
                              </button>
                              {/* sum-loading 로딩영역 - 필요시 사용
                            <div class="sum-loading">
                              <div class="dot-flashing" aria-hidden="true"></div>
                            </div>*/}
                              <div className="sum">1,220,000원</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="count-total">
                        <span>3</span>
                        <span>24회</span>
                      </div>
                    </div>
                    {/*e : 모임 계좌 */}
                  </div>
                </div>
                {/*e: 모임장 모임 */}
                {/*s: 모임 그룹 */}
                <div className="component-card">
                  <div className="home-card-layout-group">
                    <div className="home-card-top-group">
                      <div className="card-header">
                        <div className="card-tit">
                          <span className="txt">
                            모임명최대열네자모임명최대열네자
                          </span>
                          {/* FETASK-1080 링크 제거 2023-06-15 <a href="#none" class="quick-link">
                        <span class="hide-txt">모임 바로가기</span>
                        <i class="ico-arrow-sbr" aria-hidden="true"></i>
                      </a> */}
                        </div>
                      </div>
                    </div>
                    {/*s : 모임 계좌 */}
                    <div className="home-card-group">
                      <div className="home-card-col">
                        <div className="meet-pic">
                          <span className="frm-img">
                            {/* Profile Image 들어갈 자리 */}
                          </span>
                        </div>
                      </div>
                      <div className="home-card-col">
                        <div className="home-card-desc">
                          <div className="desc01">
                            <span className="name">모임통장</span>
                          </div>
                          <div className="desc02">
                            <div className="sum-group fs21b ui-amount">
                              <button
                                className="sum-check"
                                type="button"
                                style={{}}
                              >
                                금액확인
                              </button>
                              {/* sum-loading 로딩영역 - 필요시 사용
                            <div class="sum-loading">
                              <div class="dot-flashing" aria-hidden="true"></div>
                            </div>*/}
                              <div className="sum">1,220,000원</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*e : 모임 계좌 */}
                  </div>
                </div>
                {/*e: 모임 그룹 */}
                {/*s: 모임 그룹 */}
                <div className="component-card wait">
                  {/* s: FETASK-501 가입승인 대기 카드 마크업 전체수정 2023-01-18 */}
                  <div className="home-card-layout-group">
                    <div className="home-card-top-group">
                      <div className="card-header">
                        <div className="card-tit">
                          <span className="txt">모임명 최대 15자</span>
                          <button
                            className="btn-delete02-txt"
                            type="button"
                          >
                            <span className="hide-txt">닫기</span>
                            <i
                              className="ico-delete"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="home-card-group">
                      <div className="msg-waiting">
                        가입 승인을 기다리고 있어요
                        <span className="wait-loading-bar">
                          <em className="wait-loading-value" />
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* e: FETASK-501 가입승인 대기 카드 마크업 전체수정 2023-01-18 */}
                  {/* 기존 마크업 제거 <div class="home-card-layout-group">
                <div class="home-card-top-group">
                  <div class="card-header">
                    <div class="card-tit">
                      <span class="txt">러브러브</span>
                      s:FETASK-385 로띠추가 2022-12-27
                      <span class="msg_waiting">가입 승인 중
                        <i class="talk-banner-icon ui-lottie" data-filename="moim_laoding" aria-hidden="true"></i>
                      </span>
                      e:FETASK-385 로띠추가 2022-12-27
                    </div>
                  </div>
                </div>
              </div> */}
                </div>
                {/*e: 모임 그룹 */}
                {/*s: 모임 그룹 */}
                <div className="component-card">
                  <div className="home-card-layout-group">
                    <div className="home-card-top-group">
                      <div className="card-header">
                        <div className="card-tit">
                          <span className="txt">둥지냉면</span>
                          {/* FETASK-1080 링크 제거 2023-06-15 <a href="#none" class="quick-link">
                        <span class="hide-txt">모임 바로가기</span>
                        <i class="ico-arrow-sbr" aria-hidden="true"></i>
                      </a> */}
                        </div>
                      </div>
                    </div>
                    {/*s: 모임장 계좌 기능 */}
                    <div className="home-card-top-group meet-leader">
                      <div className="card-header">
                        <div className="meet-pic">
                          <span className="frm-img">
                            {/* Profile Image 들어갈 자리 */}
                          </span>
                        </div>
                        <div className="card-info">
                          <div className="card-account-tit">
                            <span>모임통장</span>
                            {/* s: 퀵버튼 */}
                            <a className="btn-quick-more" href="#none">
                              <i
                                className="ico-more-dot"
                                aira-hidden="true"
                              />
                              <span className="hide-txt">퀵버튼</span>
                            </a>
                            {/* e: 퀵버튼 */}
                          </div>
                          <div className="card-account-num">
                            100-200-000029
                          </div>
                        </div>
                      </div>
                      <div className="card-row">
                        <div className="card-col-content">
                          <div className="sum-group fs28b ui-amount">
                            <button
                              className="sum-check"
                              type="button"
                              style={{}}
                            >
                              금액확인
                            </button>
                            {/* sum-loading 로딩영역 - 필요시 사용
                          <div class="sum-loading">
                            <div class="dot-flashing" aria-hidden="true"></div>
                          </div>*/}
                            <div className="sum">10,000원</div>
                          </div>
                        </div>
                      </div>
                      {/*s: FETASK-1184 수정(버튼) 2023-07-20*/}
                      <div className="btn-group depth2">
                        <button className="btn-lv04" type="button">
                          <span className="txt">카드신청</span>
                        </button>
                        <div className="depth2-group">
                          <button
                            className="btn-lv04 bg-sky"
                            type="button"
                          >
                            <span className="txt">모임비요청</span>
                            {/*FETASK-1184 수정(버튼명) 2023-08-10*/}
                          </button>
                          <button
                            className="btn-lv04 bg-sky"
                            type="button"
                          >
                            <span className="txt">이체하기</span>
                          </button>
                        </div>
                      </div>
                      {/*e: FETASK-1184 수정(버튼) 2023-07-20*/}
                    </div>
                    {/*e: 모임장 계좌 기능 */}
                    {/*s : 모임 계좌 */}
                    <div className="home-card-group">
                      <div className="home-card-col">
                        <div className="meet-pic">
                          <span className="frm-img chell">
                            {/* Profile Image 들어갈 자리 */}
                            {/* 클래스명
                          - family : 가족
                          - biz    : 회사동료사이
                          - love   : 커플사이
                          - play   : 동호회,동아리사이
                          - chell  : 모임 챌린지
                          - chell.ing  : 모임 챌린지 완료
                          - family : 가족
                          - etc    : 기타사이
                        */}
                          </span>
                        </div>
                      </div>
                      <div className="home-card-col">
                        <div className="home-card-desc">
                          <div className="desc01">
                            <span className="name">
                              돈모아서 오마카세 먹자
                            </span>
                          </div>
                          <div className="desc02">
                            <div className="sum-group fs21b ui-amount">
                              <button
                                className="sum-check"
                                type="button"
                                style={{}}
                              >
                                금액확인
                              </button>
                              {/* sum-loading 로딩영역 - 필요시 사용
                            <div class="sum-loading">
                              <div class="dot-flashing" aria-hidden="true"></div>
                            </div>*/}
                              <div className="sum">0원</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="count-total">
                        <span>0</span>
                        <span>24회</span>
                      </div>
                    </div>
                    {/*e : 모임 계좌 */}
                    {/*s : 모임 계좌 */}
                    <div className="home-card-group">
                      <div className="home-card-col">
                        <div className="meet-pic">
                          <span className="frm-img chell">
                            {/* Profile Image 들어갈 자리 */}
                            {/* 클래스명
                          - family : 가족
                          - biz    : 회사동료사이
                          - love   : 커플사이
                          - play   : 동호회,동아리사이
                          - chell  : 모임 챌린지
                          - chell.ing  : 모임 챌린지 완료
                          - family : 가족
                          - etc    : 기타사이
                        */}
                          </span>
                        </div>
                      </div>
                      <div className="home-card-col">
                        <div className="home-card-desc">
                          <div className="desc01">
                            <span className="name">
                              돈모아서 오마카세 먹자
                            </span>
                          </div>
                          <div className="desc02">
                            <div className="sum-group fs21b ui-amount">
                              <button
                                className="sum-check"
                                type="button"
                                style={{}}
                              >
                                금액확인
                              </button>
                              {/* sum-loading 로딩영역 - 필요시 사용
                            <div class="sum-loading">
                              <div class="dot-flashing" aria-hidden="true"></div>
                            </div>*/}
                              <div className="sum">1,220,000원</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="count-total">
                        <span>3</span>
                        <span>24회</span>
                      </div>
                    </div>
                    {/*e : 모임 계좌 */}
                    {/*s : 모임 계좌 */}
                    <div className="home-card-group">
                      <div className="home-card-col">
                        <div className="meet-pic">
                          <span className="frm-img chell">
                            {/* Profile Image 들어갈 자리 */}
                            {/* 클래스명
                          - family : 가족
                          - biz    : 회사동료사이
                          - love   : 커플사이
                          - play   : 동호회,동아리사이
                          - chell  : 모임 챌린지
                          - chell.ing  : 모임 챌린지 완료
                          - family : 가족
                          - etc    : 기타사이
                        */}
                          </span>
                        </div>
                      </div>
                      <div className="home-card-col">
                        <div className="home-card-desc">
                          <div className="desc01">
                            <span className="name">
                              돈모아서 오마카세 먹자
                            </span>
                          </div>
                          <div className="desc02">
                            <div className="sum-group fs21b ui-amount">
                              <button
                                className="sum-check"
                                type="button"
                                style={{}}
                              >
                                금액확인
                              </button>
                              {/* sum-loading 로딩영역 - 필요시 사용
                            <div class="sum-loading">
                              <div class="dot-flashing" aria-hidden="true"></div>
                            </div>*/}
                              <div className="sum">1,220,000원</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div class="count-total complete">
                    <span>24회 완료</span>
                  </div> 마지막 회차 종료시 표기 수정 ↓*/}
                      <div className="meet-dday">D-30</div>
                      {/*FETASK-812 수정(마지막 회차 종료되면 D-day 표기) 2023-03-30*/}
                    </div>
                    {/*e : 모임 계좌 */}
                    {/*s : 모임 계좌 */}
                    <div className="home-card-group">
                      <div className="home-card-col">
                        <div className="meet-pic">
                          <span className="frm-img chell">
                            {/* Profile Image 들어갈 자리 */}
                            {/* 클래스명
                          - family : 가족
                          - biz    : 회사동료사이
                          - love   : 커플사이
                          - play   : 동호회,동아리사이
                          - chell  : 모임 챌린지
                          - chell.ing  : 모임 챌린지 완료
                          - family : 가족
                          - etc    : 기타사이
                        */}
                          </span>
                        </div>
                      </div>
                      <div className="home-card-col">
                        <div className="home-card-desc">
                          <div className="desc01">
                            <span className="name">
                              돈모아서 오마카세 먹자
                            </span>
                          </div>
                          <div className="desc02">
                            <div className="sum-group fs21b ui-amount">
                              <button
                                className="sum-check"
                                type="button"
                                style={{}}
                              >
                                금액확인
                              </button>
                              {/* sum-loading 로딩영역 - 필요시 사용
                            <div class="sum-loading">
                              <div class="dot-flashing" aria-hidden="true"></div>
                            </div>*/}
                              <div className="sum">7,000,000원</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="meet-dday">D-2</div>
                    </div>
                    {/*e : 모임 계좌 */}
                    {/*s : 모임 계좌 FETASK-812 추가(완료(실패하여) > N회 종료) 2023-03-30 */}
                    <div className="home-card-group">
                      <div className="home-card-col">
                        <div className="meet-pic">
                          <span className="frm-img chell">
                            {/* Profile Image 들어갈 자리 */}
                            {/* 클래스명
                          - family : 가족
                          - biz    : 회사동료사이
                          - love   : 커플사이
                          - play   : 동호회,동아리사이
                          - chell  : 모임 챌린지
                          - chell.ing  : 모임 챌린지 완료
                          - family : 가족
                          - etc    : 기타사이
                        */}
                          </span>
                        </div>
                      </div>
                      <div className="home-card-col">
                        <div className="home-card-desc">
                          <div className="desc01">
                            <span className="name">
                              돈모아서 오마카세 먹자
                            </span>
                          </div>
                          <div className="desc02">
                            <div className="sum-group fs21b ui-amount">
                              <button
                                className="sum-check"
                                type="button"
                                style={{}}
                              >
                                금액확인
                              </button>
                              {/* sum-loading 로딩영역 - 필요시 사용
                            <div class="sum-loading">
                              <div class="dot-flashing" aria-hidden="true"></div>
                            </div>*/}
                              <div className="sum">7,000,000원</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="count-total complete">
                        <span>24회 종료</span>
                      </div>
                    </div>
                    {/*e : 모임 계좌 FETASK-812 추가(완료(실패하여) > N회 종료) 2023-03-30 */}
                    {/*s : 모임 계좌 FETASK-812 추가(완료 > N회 성공) 2023-03-30 */}
                    <div className="home-card-group">
                      <div className="home-card-col">
                        <div className="meet-pic">
                          <span className="frm-img chell ing">
                            {/* Profile Image 들어갈 자리 */}
                            {/* 클래스명
                          - family : 가족
                          - biz    : 회사동료사이
                          - love   : 커플사이
                          - play   : 동호회,동아리사이
                          - chell  : 모임 챌린지
                          - chell.ing  : 모임 챌린지 완료
                          - family : 가족
                          - etc    : 기타사이
                        */}
                          </span>
                        </div>
                      </div>
                      <div className="home-card-col">
                        <div className="home-card-desc">
                          <div className="desc01">
                            <span className="name">
                              돈모아서 오마카세 먹자
                            </span>
                          </div>
                          <div className="desc02">
                            <div className="sum-group fs21b ui-amount">
                              <button
                                className="sum-check"
                                type="button"
                                style={{}}
                              >
                                금액확인
                              </button>
                              {/* sum-loading 로딩영역 - 필요시 사용
                            <div class="sum-loading">
                              <div class="dot-flashing" aria-hidden="true"></div>
                            </div>*/}
                              <div className="sum">7,000,000원</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="count-total complete">
                        <span>24회 성공</span>
                      </div>
                    </div>
                    {/*e : 모임 계좌 FETASK-812 추가(완료 > N회 성공) 2023-03-30 */}
                  </div>
                </div>
                {/*e: 모임 그룹 */}
                {/*e: FETASK-152 2022-11-25 모임 서비스 */}
              </div>
              {/*e: FETASK-443 2023-01-03 모임 리스트 그룹핑 */}
              {/*s: FETASK-1184 추가(생활통장) 2023-07-18*/}
              <div className="component-card living">
                <div className="home-card-layout-group">
                  <div className="home-card-living-group">
                    {/*계좌 1개 묶음*/}
                    <div className="home-card-group">
                      <div className="home-card-col">
                        <i
                          className="logo-bank089 w34"
                          aria-hidden="true"
                          data-bankname="케이뱅크"
                        />
                      </div>
                      <div className="home-card-col">
                        <div className="card-info">
                          <div className="card-account-tit">
                            <div>
                              <span className="account-name">
                                생활통장생활통장생활통장생활통장생활통장생활통장생활통장생활통장
                              </span>
                            </div>
                            {/*FETASK-1184 수정(통장명 span 태그 추가 > 말줄임 css 적용) 2023-08-18*/}
                            {/* s: 퀵버튼 */}
                            <a className="btn-quick-more" href="#none">
                              <i
                                className="ico-more-dot"
                                aira-hidden="true"
                              />
                              <span className="hide-txt">퀵버튼</span>
                            </a>
                            {/* e: 퀵버튼 */}
                          </div>
                          <div className="card-account-num">
                            100-200-000029
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="home-card-group">
                      <div className="home-card-col">
                        <div className="home-card-desc">
                          <div className="desc02">
                            <div className="sum-group fs28b ui-amount">
                              <button
                                className="sum-check"
                                type="button"
                                style={{}}
                              >
                                금액확인
                              </button>
                              {/* sum-loading 로딩영역 - 필요시 사용
                            <div class="sum-loading">
                              <div class="dot-flashing" aria-hidden="true"></div>
                            </div>*/}
                              <div className="sum">1,220,000원</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*s: FETASK-1475 추가(홈_카드영역 통폐합(체크카드_성년)) 2023-09-18*/}
                    <div className="btn-group depth2">
                      <button className="btn-lv04" type="button">
                        <span className="txt">카드조회</span>
                      </button>
                      <div className="depth2-group">
                        <button
                          className="btn-lv04 bg-sky"
                          type="button"
                        >
                          <span className="txt">가져오기</span>
                        </button>
                        <button
                          className="btn-lv04 bg-sky"
                          type="button"
                        >
                          <span className="txt">이체하기</span>
                        </button>
                      </div>
                    </div>
                    <div className="btn-group depth2">
                      <button className="btn-lv04" type="button">
                        <span className="txt">카드반송</span>
                      </button>
                      <div className="depth2-group">
                        <button
                          className="btn-lv04 bg-sky"
                          type="button"
                        >
                          <span className="txt">가져오기</span>
                        </button>
                        <button
                          className="btn-lv04 bg-sky"
                          type="button"
                        >
                          <span className="txt">이체하기</span>
                        </button>
                      </div>
                    </div>
                    <div className="btn-group depth2">
                      <button className="btn-lv04" type="button">
                        <span className="txt">발급중</span>
                      </button>
                      <div className="depth2-group">
                        <button
                          className="btn-lv04 bg-sky"
                          type="button"
                        >
                          <span className="txt">가져오기</span>
                        </button>
                        <button
                          className="btn-lv04 bg-sky"
                          type="button"
                        >
                          <span className="txt">이체하기</span>
                        </button>
                      </div>
                    </div>
                    <div className="btn-group depth2">
                      <button className="btn-lv04" type="button">
                        <span className="txt">배송중</span>
                      </button>
                      <div className="depth2-group">
                        <button
                          className="btn-lv04 bg-sky"
                          type="button"
                        >
                          <span className="txt">가져오기</span>
                        </button>
                        <button
                          className="btn-lv04 bg-sky"
                          type="button"
                        >
                          <span className="txt">이체하기</span>
                        </button>
                      </div>
                    </div>
                    <div className="btn-group depth2">
                      <button className="btn-lv04" type="button">
                        <span className="txt">사용등록</span>
                      </button>
                      <div className="depth2-group">
                        <button
                          className="btn-lv04 bg-sky"
                          type="button"
                        >
                          <span className="txt">가져오기</span>
                        </button>
                        <button
                          className="btn-lv04 bg-sky"
                          type="button"
                        >
                          <span className="txt">이체하기</span>
                        </button>
                      </div>
                    </div>
                    <div className="btn-group depth2">
                      <button className="btn-lv04" type="button">
                        <span className="txt">발급중</span>
                      </button>
                      <div className="depth2-group">
                        <button
                          className="btn-lv04 bg-sky"
                          type="button"
                        >
                          <span className="txt">가져오기</span>
                        </button>
                        <button
                          className="btn-lv04 bg-sky"
                          type="button"
                        >
                          <span className="txt">이체하기</span>
                        </button>
                      </div>
                    </div>
                    <div className="btn-group depth2">
                      <button className="btn-lv04" type="button">
                        <span className="txt">카드분실</span>
                      </button>
                      <div className="depth2-group">
                        <button
                          className="btn-lv04 bg-sky"
                          type="button"
                        >
                          <span className="txt">가져오기</span>
                        </button>
                        <button
                          className="btn-lv04 bg-sky"
                          type="button"
                        >
                          <span className="txt">이체하기</span>
                        </button>
                      </div>
                    </div>
                    {/*e: FETASK-1475 추가(홈_카드영역 통폐합(체크카드_성년)) 2023-09-18*/}
                  </div>
                  {/*s: FETASK-1475 추가(발급중 팁) 2023-09-18*/}
                  <div className="banner-tooltip-group open ui-tooltip">
                    <div className="tooltip-area">
                      <div className="tooltip-box">
                        <button
                          className="btn-tooltip-close"
                          type="button"
                        >
                          <span className="hide-txt">툴팁 닫기</span>
                        </button>
                        <div className="tooltip-content">
                          <p className="tit">
                            카드 발급이 늦어지고 있어요
                          </p>
                          <p className="txt">조금만 기다려 주세요</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*e: FETASK-1475 추가(발급중 팁) 2023-09-18*/}
                  <div className="home-card-living-group">
                    {/*계좌 1개 묶음*/}
                    <div className="home-card-group">
                      <div className="home-card-col">
                        <i
                          className="logo-bank089 w34"
                          aria-hidden="true"
                          data-bankname="케이뱅크"
                        />
                      </div>
                      <div className="home-card-col">
                        <div className="card-info">
                          <div className="card-account-tit">
                            <div>
                              <span className="account-name">
                                MY입출금통장
                              </span>
                            </div>
                            {/* s: 퀵버튼 */}
                            <a className="btn-quick-more" href="#none">
                              <i
                                className="ico-more-dot"
                                aira-hidden="true"
                              />
                              <span className="hide-txt">퀵버튼</span>
                            </a>
                            {/* e: 퀵버튼 */}
                          </div>
                          <div className="card-account-num">
                            100-200-000029
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="home-card-group">
                      <div className="home-card-col">
                        <div className="home-card-desc">
                          <div className="desc02">
                            <div className="sum-group fs28b ui-amount">
                              <button
                                className="sum-check"
                                type="button"
                                style={{}}
                              >
                                금액확인
                              </button>
                              {/* sum-loading 로딩영역 - 필요시 사용
                            <div class="sum-loading">
                              <div class="dot-flashing" aria-hidden="true"></div>
                            </div>*/}
                              <div className="sum">1,220,000원</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="btn-group depth2">
                      <button className="btn-lv04" type="button">
                        <span className="txt">카드조회</span>
                      </button>
                      <div className="depth2-group">
                        <button
                          className="btn-lv04 bg-sky"
                          type="button"
                        >
                          <span className="txt">가져오기</span>
                        </button>
                        <button
                          className="btn-lv04 bg-sky"
                          type="button"
                        >
                          <span className="txt">이체하기</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*s: FETASK-1475 추가(생활통장 '성년' tip 모음) 2023-09-18*/}
                  {/*Case 0. 팁*/}
                  <div className="banner-tooltip-group open ui-tooltip">
                    <div className="tooltip-area">
                      <div className="tooltip-box">
                        <button
                          className="btn-tooltip-close"
                          type="button"
                        >
                          <span className="hide-txt">툴팁 닫기</span>
                        </button>
                        <div className="tooltip-content">
                          <p className="tit">
                            쓰던 계좌 그대로, 금리와 혜택은 UP
                          </p>
                          <p className="txt">
                            지금 생활통장으로 업그레이드하세요
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*//Case 0. 팁*/}
                  {/*Case 1. 팁*/}
                  <div className="banner-tooltip-group open ui-tooltip">
                    <div className="tooltip-area">
                      <div className="tooltip-box">
                        <button
                          className="btn-tooltip-close"
                          type="button"
                        >
                          <span className="hide-txt">툴팁 닫기</span>
                        </button>
                        <div className="tooltip-content">
                          <p className="tit">
                            잊고있던 숨은 내 돈은 얼마일까요?
                          </p>
                          <p className="txt">
                            가입한 계좌를 한 눈에 조회해보세요
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*//Case 1. 팁*/}
                  {/*Case 2. 팁*/}
                  <div className="banner-tooltip-group open ui-tooltip">
                    <div className="tooltip-area">
                      <div className="tooltip-box">
                        <button
                          className="btn-tooltip-close"
                          type="button"
                        >
                          <span className="hide-txt">툴팁 닫기</span>
                        </button>
                        <div className="tooltip-content">
                          <p className="tit">
                            22년 7월에 체크카드 유효기간이 만료됩니다.
                          </p>
                          <p className="txt">
                            혜택이 가득한 카드로 재발급받으세요
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*//Case 2. 팁*/}
                  {/*Case 3. 팁*/}
                  <div className="banner-tooltip-group open ui-tooltip">
                    <div className="tooltip-area">
                      <div className="tooltip-box">
                        <button
                          className="btn-tooltip-close"
                          type="button"
                        >
                          <span className="hide-txt">툴팁 닫기</span>
                        </button>
                        <div className="tooltip-content">
                          <p className="tit">
                            이번달 25일까지 50만원 이상 사용하시면,
                          </p>
                          <p className="txt">
                            특별 캐시백 2만원을 받을 수 있어요
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*//Case 3. 팁*/}
                  {/*Case 5. 팁*/}
                  <div className="banner-tooltip-group open ui-tooltip">
                    <div className="tooltip-area">
                      <div className="tooltip-box">
                        <button
                          className="btn-tooltip-close"
                          type="button"
                        >
                          <span className="hide-txt">툴팁 닫기</span>
                        </button>
                        <div className="tooltip-content">
                          <p className="tit">
                            삼성페이에 카드 등록 신청하셨네요
                          </p>
                          <p className="txt">
                            여기를 눌러 등록을 완료해 주세요
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*//Case 5. 팁*/}
                  {/*e: FETASK-1475 추가(생활통장 '성년' tip 모음) 2023-09-18*/}
                  <div className="home-card-living-group">
                    {/*계좌 1개 묶음*/}
                    <div className="home-card-group">
                      <div className="home-card-col">
                        <i
                          className="logo-bank089 w34"
                          aria-hidden="true"
                          data-bankname="케이뱅크"
                        />
                      </div>
                      <div className="home-card-col">
                        <div className="card-info">
                          <div className="card-account-tit">
                            <div>
                              <span className="account-name">
                                MY입출금통장
                              </span>
                              {/*생활통장만 2개 이상 보유 시 생활금리가 설정된 계좌명 옆에 태그 노출*/}
                              <div className="tag negative">
                                <span className="txt">거래중지</span>
                              </div>
                              {/*
                          <div class="tag positive">
                            <span class="txt">마이너스</span>
                          </div>
                          <div class="tag neutral">
                            <span class="txt">한도계좌</span>
                          </div> */}
                              <div className="tag account">
                                <span className="txt">
                                  최고 연 3.0%
                                </span>
                                {/*FETASK-1184 수정(태그명 '생활금리' > '최고 연 3.0%') 2023-08-10*/}
                              </div>
                              {/*//생활통장만 2개 이상 보유 시 생활금리가 설정된 계좌명 옆에 태그 노출*/}
                            </div>
                            {/* s: 퀵버튼 */}
                            <a className="btn-quick-more" href="#none">
                              <i
                                className="ico-more-dot"
                                aira-hidden="true"
                              />
                              <span className="hide-txt">퀵버튼</span>
                            </a>
                            {/* e: 퀵버튼 */}
                          </div>
                          <div className="card-account-num">
                            100-200-000029
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="home-card-group">
                      <div className="home-card-col">
                        <div className="home-card-desc">
                          <div className="desc02">
                            <div className="sum-group fs28b ui-amount">
                              <button
                                className="sum-check"
                                type="button"
                                style={{}}
                              >
                                금액확인
                              </button>
                              {/* sum-loading 로딩영역 - 필요시 사용
                            <div class="sum-loading">
                              <div class="dot-flashing" aria-hidden="true"></div>
                            </div>*/}
                              <div className="sum">1,220,000원</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="btn-group depth2">
                      <button className="btn-lv04" type="button">
                        <span className="txt">카드신청</span>
                      </button>
                      <div className="depth2-group">
                        <button
                          className="btn-lv04 bg-sky"
                          type="button"
                        >
                          <span className="txt">가져오기</span>
                        </button>
                        <button
                          className="btn-lv04 bg-sky"
                          type="button"
                        >
                          <span className="txt">이체하기</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*생활통장 1개 보유시 노출*/}
                  <div className="home-card-bottom-group">
                    <div className="btn-group">
                      <button className="btn-lv01" type="button">
                        <i className="ico-plus" aria-hidden="true" />
                        <span className="txt">생활비 돌려받기</span>
                        {/*FETASK-1475 수정(버튼명) 2023-09-15*/}
                      </button>
                    </div>
                  </div>
                  {/*//생활통장 1개 보유시 노출*/}
                </div>
              </div>
              {/*생활통장이 없을 경우 전략상품 노출*/}
              {/* <div class="component-card">
            <div class="frm-flip">
              <div class="flip-conts">
                <a href="#none">
                  <div class="home-card-layout-group join-gate">
                    <div class="card-img-figure">
                      <i class="ico-home-plus" aria-hidden="true"></i>
                    </div>
                    <div class="card-text-box">플러스박스 만들기</div>
                  </div>
                </a>
              </div>
            </div>
          </div> */}
              {/*생활통장이 없을 경우 전량상품 노출*/}
              {/*e: FETASK-1184 추가(생활통장) 2023-07-18*/}
              {/*s: FETASK-1475 추가(홈_카드영역 통폐합(체크카드_하이틴,미성년)) 2023-09-18  */}
              <div className="component-card living">
                <div className="home-card-layout-group">
                  {/*s: Hi teen + 미성년 계좌 + 카드 보유*/}
                  <div className="home-card-living-group">
                    {/*미성년 계좌 + 체크카드 보유*/}
                    <div className="home-card-group">
                      <div className="home-card-col">
                        <i
                          className="logo-bank089 w34"
                          aria-hidden="true"
                          data-bankname="케이뱅크"
                        />
                      </div>
                      <div className="home-card-col">
                        <div className="card-info">
                          <div className="card-account-tit">
                            <div>
                              <span className="account-name">
                                우리 똥강아지 용돈
                              </span>
                            </div>
                            {/* s: 퀵버튼 */}
                            <a className="btn-quick-more" href="#none">
                              <i
                                className="ico-more-dot"
                                aira-hidden="true"
                              />
                              <span className="hide-txt">퀵버튼</span>
                            </a>
                            {/* e: 퀵버튼 */}
                          </div>
                          <div className="card-account-num">
                            100-200-000029
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="home-card-group">
                      <div className="home-card-col">
                        <div className="home-card-desc">
                          <div className="desc02">
                            <div className="sum-group fs28b ui-amount">
                              <button
                                className="sum-check"
                                type="button"
                                style={{}}
                              >
                                금액확인
                              </button>
                              {/* sum-loading 로딩영역 - 필요시 사용
                            <div class="sum-loading">
                              <div class="dot-flashing" aria-hidden="true"></div>
                            </div>*/}
                              <div className="sum">1,220,000원</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="btn-group depth2">
                      <button className="btn-lv04" type="button">
                        <span className="txt">카드조회</span>
                      </button>
                      <div className="depth2-group">
                        <button
                          className="btn-lv04 bg-sky"
                          type="button"
                        >
                          <span className="txt">용돈조르기</span>
                        </button>
                        <button
                          className="btn-lv04 bg-sky"
                          type="button"
                        >
                          <span className="txt">이체하기</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="home-card-living-group">
                    {/*Hi teen + 체크카드 보유*/}
                    <div className="home-card-group">
                      <div className="home-card-col">
                        <i
                          className="logo-bank089 w34"
                          aria-hidden="true"
                          data-bankname="케이뱅크"
                        />
                      </div>
                      <div className="home-card-col">
                        <div className="card-info">
                          <div className="card-account-tit">
                            <div>
                              <span className="account-name">
                                Hi teen
                              </span>
                            </div>
                            {/* s: 퀵버튼 */}
                            <a className="btn-quick-more" href="#none">
                              <i
                                className="ico-more-dot"
                                aira-hidden="true"
                              />
                              <span className="hide-txt">퀵버튼</span>
                            </a>
                            {/* e: 퀵버튼 */}
                          </div>
                          <div className="card-account-num">
                            100-200-000029
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="home-card-group">
                      <div className="home-card-col">
                        <div className="home-card-desc">
                          <div className="desc02">
                            <div className="sum-group fs28b ui-amount">
                              <button
                                className="sum-check"
                                type="button"
                                style={{}}
                              >
                                금액확인
                              </button>
                              {/* sum-loading 로딩영역 - 필요시 사용
                            <div class="sum-loading">
                              <div class="dot-flashing" aria-hidden="true"></div>
                            </div>*/}
                              <div className="sum">1,220,000원</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="btn-group depth2">
                      <button className="btn-lv04" type="button">
                        <span className="txt">카드조회</span>
                      </button>
                      <div className="depth2-group">
                        <button
                          className="btn-lv04 bg-sky"
                          type="button"
                        >
                          <span className="txt">용돈조르기</span>
                        </button>
                        <button
                          className="btn-lv04 bg-sky"
                          type="button"
                        >
                          <span className="txt">이체하기</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*e: Hi teen + 미성년 계좌 + 카드 보유*/}
                </div>
              </div>
              {/*e: FETASK-1475 추가(홈_카드영역 통폐합(체크카드_하이틴,미성년)) 2023-09-18  */}
              <div className="component-card">
                <div className="home-card-layout-group">
                  <div className="home-card-top-group">
                    <div className="card-header">
                      <div className="card-tit">
                        <span className="txt">다른은행</span>
                        {/*s: FETASK-152 2022-11-29 화살표 아이콘 추가 */}
                        {/*  FETASK-1080 링크 제거 2023-06-15 <a href="#none" class="quick-link">
                      <span class="hide-txt">다른은행 바로가기</span>
                      <i class="ico-arrow-sbr" aria-hidden="true"></i>
                    </a> */}
                        {/*e: FETASK-152 2022-11-29 화살표 아이콘 추가 */}
                      </div>
                    </div>
                  </div>
                  <div className="home-card-group">
                    <div className="home-card-col">
                      <i
                        className="logo-bank090 w34"
                        aria-hidden="true"
                        data-bankname="카카오"
                      />
                    </div>
                    <div className="home-card-col">
                      <div className="home-card-desc">
                        <div className="desc01">
                          <span className="name">카카오뱅크(3331)</span>
                        </div>
                        <div className="desc02">
                          <button
                            className="txt-lv03 ui-btn-animate"
                            type="button"
                          >
                            오픈뱅킹망 점검중
                            <i
                              className="ico-refresh"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="home-card-group">
                    <div className="home-card-col">
                      <i
                        className="logo-bank090 w34"
                        aria-hidden="true"
                        data-bankname="카카오"
                      />
                    </div>
                    <div className="home-card-col">
                      <div className="home-card-desc">
                        <div className="desc01">
                          <span className="name">카카오뱅크(3331)</span>
                        </div>
                        <div className="desc02">
                          <div className="txt-lv03">
                            <i
                              className="ico-warning"
                              aria-hidden="true"
                            />
                            해지계좌
                            <a className="btn-under-link" href="#none">
                              연결해제
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="home-card-group">
                    <div className="home-card-col">
                      <i
                        className="logo-bank090 w34"
                        aria-hidden="true"
                        data-bankname="카카오"
                      />
                    </div>
                    <div className="home-card-col">
                      <div className="home-card-desc">
                        <div className="desc01">
                          <span className="name">카카오뱅크(3331)</span>
                        </div>
                        <div className="desc02">
                          <div className="sum-group fs21b ui-amount">
                            <button className="sum-check" type="button">
                              금액확인
                            </button>
                            {/* sum-loading 로딩영역 - 필요시 사용
                          <div class="sum-loading">
                            <div class="dot-flashing" aria-hidden="true"></div>
                          </div>*/}
                            <div className="sum">14,230원</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="home-card-col">
                      <a
                        className="btn-lv04 bg-sky disabled"
                        href="#none"
                      >
                        {/*FETASK-1184 수정(class 명 'bg-sky') 2023-08-10*/}
                        {/* disabled case */}
                        <span className="txt">이체</span>
                      </a>
                    </div>
                  </div>
                  {/* s: Tip */}
                  <div className="banner-tooltip-group open ui-tooltip">
                    <div className="tooltip-area">
                      <div className="tooltip-box">
                        <button
                          className="btn-tooltip-close"
                          type="button"
                        >
                          <span className="hide-txt">툴팁 닫기</span>
                        </button>
                        <div className="tooltip-content">
                          <p className="tit">
                            자주쓰는 다른은행 입출금계좌를
                          </p>
                          <p className="txt">
                            나에게 맞게 순서를 바꾸어 보세요
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* e: Tip */}
                  <div className="home-card-group">
                    <div className="home-card-col">
                      <i
                        className="logo-bank090 w34"
                        aria-hidden="true"
                        data-bankname="카카오"
                      />
                    </div>
                    <div className="home-card-col">
                      <div className="home-card-desc">
                        <div className="desc01">
                          <span className="name">카카오뱅크(3331)</span>
                        </div>
                        <div className="desc02">
                          <div className="sum-group fs21b ui-amount">
                            <button className="sum-check" type="button">
                              금액확인
                            </button>
                            {/* sum-loading 로딩영역 - 필요시 사용
                          <div class="sum-loading">
                            <div class="dot-flashing" aria-hidden="true"></div>
                          </div>*/}
                            <div className="sum">14,230원</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="home-card-col">
                      <a className="btn-lv04 bg-sky" href="#none">
                        {/*FETASK-1184 수정(class 명 'bg-sky') 2023-08-10*/}
                        <span className="txt">이체</span>
                      </a>
                    </div>
                  </div>
                  <div className="home-card-group">
                    <div className="home-card-col">
                      <i
                        className="logo-bank092 w34"
                        aria-hidden="true"
                        data-bankname="토스"
                      />
                    </div>
                    <div className="home-card-col">
                      <div className="home-card-desc">
                        <div className="desc01">
                          <span className="name">토스뱅크(5077)</span>
                        </div>
                        <div className="desc02">
                          <div className="sum-group fs21b ui-amount">
                            <button className="sum-check" type="button">
                              금액확인
                            </button>
                            {/* sum-loading 로딩영역 - 필요시 사용
                          <div class="sum-loading">
                            <div class="dot-flashing" aria-hidden="true"></div>
                          </div>*/}
                            <div className="sum">14,230원</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="home-card-col">
                      <a className="btn-lv04 bg-sky" href="#none">
                        {/*FETASK-1184 수정(class 명 'bg-sky') 2023-08-10*/}
                        <span className="txt">이체</span>
                      </a>
                    </div>
                  </div>
                  <div className="home-card-group">
                    <div className="home-card-col">
                      <i
                        className="logo-bank240 w34"
                        aria-hidden="true"
                        data-bankname="삼성증권"
                      />
                    </div>
                    <div className="home-card-col">
                      <div className="home-card-desc">
                        <div className="desc01">
                          <span className="name">삼성증권(1909)</span>
                        </div>
                        <div className="desc02">
                          <div className="sum-group fs21b ui-amount">
                            {/* 금액확인 필요시 사용하기
                          <button class="sum-check" type="button">금액확인</button>*/}
                            <div className="sum-loading">
                              <div
                                className="dot-flashing"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="sum">14,230원</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="home-card-col">
                      <a className="btn-lv04 bg-sky" href="#none">
                        {/*FETASK-1184 수정(class 명 'bg-sky') 2023-08-10*/}
                        <span className="txt">이체</span>
                      </a>
                    </div>
                  </div>
                  <div className="banner-tooltip-group open ui-tooltip">
                    <div className="tooltip-area">
                      <div className="tooltip-box">
                        <button
                          className="btn-tooltip-close"
                          type="button"
                        >
                          <span className="hide-txt">툴팁 닫기</span>
                        </button>
                        <div className="tooltip-content">
                          <p className="tit">
                            자주쓰는 다른은행 입출금계좌를
                          </p>
                          <p className="txt">
                            나에게 맞게 순서를 바꾸어 보세요
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*s: FETASK-1184 수정(다른은행 더보기 버튼 수정) 2023-08-18*/}
                  <div
                    className="home-card-bottom-group"
                    style={{ marginTop: "4rem" }}
                  >
                    <div className="btn-group">
                      <button
                        className="btn-lv01"
                        type="button"
                        style={{
                          height: "2.1rem",
                          marginTop: "0 !important"
                        }}
                      >
                        <i
                          className="ico-arrow-open"
                          aria-hidden="true"
                          style={{
                            width: "1.6rem",
                            height: "1.6rem",
                            backgroundSize: "1.2rem 1.2rem",
                            border: "1px solid #17008c",
                            borderRadius: "50%"
                          }}
                        />
                        <span className="txt txt-lv01 primary1">
                          더보기
                        </span>
                      </button>
                    </div>
                    {/* 더보기 클릭 후 ('btn-lv01' class 추가 'open')
                <div class="btn-group">
                  <button class="btn-lv01 open" type="button" style="height: 2.1rem;margin-top: 4rem;">
                    <i class="ico-arrow-open" aria-hidden="true"style="width:1.6rem;height:1.6rem;background-size: 1.2rem 1.2rem; border:1px solid #17008c;border-radius:50%"></i>
                    <span class="txt txt-lv01 primary1">간략히 보기</span>
                  </button>
                </div> */}
                  </div>
                  {/*e: FETASK-1184 수정(다른은행 더보기 버튼 수정) 2023-08-18*/}
                </div>
              </div>
              {/*e: FETASK-152 2022-11-25 오픈뱅킹 다른은행 계좌 분리 */}
              {/* 계좌 리스트*/}
              <div className="component-card">
                <div className="home-card-layout-group">
                  <div className="home-card-top-group my-home-card-top-group">
                    <div className="card-header">
                      <div className="card-info">
                        <div className="card-account-tit">
                          <span>$상품명or별칭(최대10자)$</span>
                          <a className="tag neutral" href="#none">
                            <span className="txt">Hi teen</span>
                          </a>
                          <a className="btn-quick-more" href="#none">
                            <i
                              className="ico-more-dot"
                              aira-hidden="true"
                            />
                            <span className="hide-txt">퀵버튼</span>
                          </a>
                        </div>
                        <div className="card-account-num">
                          24763-345-3453
                        </div>
                      </div>
                    </div>
                    <div className="card-row">
                      <div className="card-col-content">
                        <div className="sum-group fs28b ui-amount">
                          <button className="sum-check" type="button">
                            금액확인
                          </button>
                          {/* sum-loading 로딩영역 - 필요시 사용
                        <div class="sum-loading">
                          <div class="dot-flashing" aria-hidden="true"></div>
                        </div>*/}
                          <div className="sum">1,000,000,000원</div>
                        </div>
                      </div>
                    </div>
                    {/*s: FETASK-1184 수정(버튼) 2023-07-20*/}
                    <div className="btn-group depth2">
                      <button className="btn-lv04" type="button">
                        <span className="txt">카드신청</span>
                      </button>
                      <div className="depth2-group">
                        <button
                          className="btn-lv04 bg-sky"
                          type="button"
                        >
                          <span className="txt">가져오기</span>
                        </button>
                        <button
                          className="btn-lv04 bg-sky"
                          type="button"
                        >
                          <span className="txt">이체하기</span>
                        </button>
                      </div>
                    </div>
                    {/*e: FETASK-1184 수정(버튼) 2023-07-20*/}
                  </div>
                </div>
              </div>
              {/* //220916 SR-1912 추가 */}
              {/*s: FETASK-888 하이틴 체크카드 없는 경우 미가입상품 진입점 노출 2023-04-20*/}
              {/* <div class="component-card">
            <div class="frm-flip">
              <div class="flip-conts">
                <a href="#none">
                  <div class="home-card-layout-group join-gate">
                    <div class="card-img-figure">
                      <i class="ico-home-plus" aria-hidden="true"></i>
                    </div>
                    <div class="card-text-box">Hi teen 카드 만들기</div>
                  </div>
                </a>
              </div>
            </div>
          </div> */}
              {/*e: FETASK-888 하이틴 체크카드 없는 경우 미가입상품 진입점 노출 2023-04-20*/}
              {/* 220824 SR-1809 수정 : DOM 위치 */}
              {/* 계좌 리스트*/}
              <div className="component-card">
                <div className="home-card-layout-group">
                  <div className="home-card-top-group">
                    <div className="card-header">
                      <div className="card-tit">
                        <span className="txt">카드</span>
                        {/*s: FETASK-152 2022-11-29 화살표 아이콘 추가 */}
                        <a href="#none" className="quick-link">
                          <span className="hide-txt">
                            카드 바로가기
                          </span>
                          <i
                            className="ico-arrow-sbr"
                            aria-hidden="true"
                          />
                        </a>
                        {/*e: FETASK-152 2022-11-29 화살표 아이콘 추가 */}
                      </div>
                    </div>
                  </div>
                  {/*s: FETASK-208 수정(하이틴 카드 추가) 2022-11-24*/}
                  <div className="home-card-group">
                    <div className="home-card-col">
                      <i
                        className="ico-main-card-103196-A w22"
                        aria-hidden="true"
                      />
                      {/*모임체크카드 ico_main_card_103196_A : FETASK-1344 2023-08-21 */}
                    </div>
                    <div className="home-card-col">
                      <div className="home-card-desc">
                        <div className="desc01">
                          <span className="name type2">
                            모임체크카드
                          </span>
                          {/*모임체크카드 ico_main_card_103196_A : FETASK-1344 2023-08-21 */}
                          {/* <div class="tag">
                        <span class="txt">모바일</span>
                      </div> */}
                        </div>
                        <div className="desc02">
                          <div className="sum-group fs21b ui-amount">
                            <button className="sum-check" type="button">
                              금액확인
                            </button>
                            {/* sum-loading 로딩영역 - 필요시 사용
                          <div class="sum-loading">
                            <div class="dot-flashing" aria-hidden="true"></div>
                          </div>*/}
                            <div className="sum">14,230원</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="home-card-group">
                    <div className="home-card-col">
                      <i
                        className="ico-main-card-102317-B w22"
                        aria-hidden="true"
                      />
                      {/*타입 B*/}
                    </div>
                    <div className="home-card-col">
                      <div className="home-card-desc">
                        <div className="desc01">
                          <span className="name type2">
                            케이뱅크 Hi teen카드
                          </span>
                          {/* <div class="tag">
                        <span class="txt">모바일</span>
                      </div> */}
                        </div>
                        <div className="desc02">
                          <div className="sum-group fs21b ui-amount">
                            <button className="sum-check" type="button">
                              금액확인
                            </button>
                            {/* sum-loading 로딩영역 - 필요시 사용
                          <div class="sum-loading">
                            <div class="dot-flashing" aria-hidden="true"></div>
                          </div>*/}
                            <div className="sum">14,230원</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="home-card-group">
                    <div className="home-card-col">
                      <i
                        className="ico-main-card-102317-C w22"
                        aria-hidden="true"
                      />
                      {/*타입 C*/}
                    </div>
                    <div className="home-card-col">
                      <div className="home-card-desc">
                        <div className="desc01">
                          <span className="name type2">
                            케이뱅크 Hi teen카드
                          </span>
                          {/* <div class="tag">
                        <span class="txt">모바일</span>
                      </div> */}
                        </div>
                        <div className="desc02">
                          <div className="sum-group fs21b ui-amount">
                            <button className="sum-check" type="button">
                              금액확인
                            </button>
                            {/* sum-loading 로딩영역 - 필요시 사용
                          <div class="sum-loading">
                            <div class="dot-flashing" aria-hidden="true"></div>
                          </div>*/}
                            <div className="sum">14,230원</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*e: FETASK-208 수정(하이틴 카드 추가) 2022-11-24*/}
                  {/* 220824 SR-1809 수정 */}
                  {/* CASE : 기본 */}
                  <div className="home-card-group">
                    <div className="home-card-col">
                      <i
                        className="ico-main-card-960098-A w22"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="home-card-col">
                      <div className="home-card-desc">
                        <div className="desc01">
                          <span className="name type2">
                            플러스 체크카드
                          </span>
                          {/*SR-2074 수정(class 추가 'type2' 말줄임 너비 조정) 2022-11-08 */}
                          {/* <div class="tag">
                        <span class="txt">모바일</span>
                      </div> */}
                        </div>
                        <div className="desc02">
                          <div className="sum-group fs21b ui-amount">
                            <button className="sum-check" type="button">
                              금액확인
                            </button>
                            {/* sum-loading 로딩영역 - 필요시 사용
                          <div class="sum-loading">
                            <div class="dot-flashing" aria-hidden="true"></div>
                          </div>*/}
                            <div className="sum">14,230원</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*s: FETASK-1475 삭제(카드조회 진입점 삭제 후 통합) */}
                  {/* CASE : 반송 / 재발급 */}
                  <div
                    className="home-card-group"
                    style={{ display: "none" }}
                  >
                    <div className="home-card-col">
                      <i
                        className="ico-main-card-100008-C w22"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="home-card-col">
                      <div className="home-card-desc">
                        <div className="desc01">
                          <span className="name type2">
                            플러스 체크카드
                          </span>
                          {/*SR-2074 수정(class 추가 'type2' 말줄임 너비 조정) 2022-11-08 */}
                          <div className="tag negative">
                            <span className="txt">반송</span>
                          </div>
                        </div>
                        <div className="desc02">
                          <div className="sum-group fs21b ui-amount">
                            <button className="sum-check" type="button">
                              금액확인
                            </button>
                            {/* sum-loading 로딩영역 - 필요시 사용
                          <div class="sum-loading">
                            <div class="dot-flashing" aria-hidden="true"></div>
                          </div>*/}
                            <div className="sum">14,230원</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="home-card-col">
                      <a className="btn-under-link" href="#none">
                        <span className="txt-under-link">재발급</span>
                      </a>
                    </div>
                  </div>
                  {/* CASE : 발급중 / 배송조회 */}
                  <div
                    className="home-card-group"
                    style={{ display: "none" }}
                  >
                    <div className="home-card-col">
                      <i
                        className="ico-main-card-960098-C w22"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="home-card-col">
                      <div className="home-card-desc">
                        <div className="desc01">
                          <span className="name type2">
                            호캉스 딱 기다려 호캉스 딱 기다려
                          </span>
                          {/*SR-2074 수정(class 추가 'type2' 말줄임 너비 조정) 2022-11-08 */}
                          <div className="tag positive">
                            <span className="txt">발급중</span>
                          </div>
                        </div>
                        <div className="desc02">
                          <div className="sum-group fs21b ui-amount">
                            <button className="sum-check" type="button">
                              금액확인
                            </button>
                            {/* sum-loading 로딩영역 - 필요시 사용
                          <div class="sum-loading">
                            <div class="dot-flashing" aria-hidden="true"></div>
                          </div>*/}
                            <div className="sum">14,230원</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="home-card-col">
                      <a className="btn-under-link" href="#none">
                        <span className="txt-under-link">조회</span>
                        {/*SR-2074 수정(버튼명 : 배송조회/사용등록 > '조회'로 통일) 2022-11-08 */}
                      </a>
                    </div>
                  </div>
                  {/* CASE : 배송중 / 배송조회 */}
                  <div
                    className="home-card-group"
                    style={{ display: "none" }}
                  >
                    <div className="home-card-col">
                      <i
                        className="ico-main-card-960098-C w22"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="home-card-col">
                      <div className="home-card-desc">
                        <div className="desc01">
                          <span className="name type2">
                            호캉스 딱 기다려
                          </span>
                          {/*SR-2074 수정(class 추가 'type2' 말줄임 너비 조정) 2022-11-08 */}
                          <div className="tag neutral">
                            <span className="txt">배송중</span>
                          </div>
                        </div>
                        <div className="desc02">
                          <div className="sum-group fs21b ui-amount">
                            <button className="sum-check" type="button">
                              금액확인
                            </button>
                            {/* sum-loading 로딩영역 - 필요시 사용
                          <div class="sum-loading">
                            <div class="dot-flashing" aria-hidden="true"></div>
                          </div>*/}
                            <div className="sum">14,230원</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="home-card-col">
                      <a className="btn-under-link" href="#none">
                        <span className="txt-under-link">조회</span>
                        {/*SR-2074 수정(버튼명 : 배송조회/사용등록 > '조회'로 통일) 2022-11-08 */}
                      </a>
                    </div>
                  </div>
                  {/* s: FETASK-123 카드 2건일때 툴팁 추가 2022-11-15*/}
                  <div
                    className="banner-tooltip-group open ui-tooltip"
                    style={{ display: "none" }}
                  >
                    <div className="tooltip-area">
                      <div className="tooltip-box">
                        <button
                          className="btn-tooltip-close"
                          type="button"
                        >
                          <span className="hide-txt">툴팁 닫기</span>
                        </button>
                        <div className="tooltip-content">
                          <p className="tit">
                            카드발급이 늦어지고 있어요
                          </p>
                          <p className="txt">조금만 기다려 주세요</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* e: FETASK-123 카드 2건일때 툴팁 추가 2022-11-15*/}
                  {/* CASE : 배송중 / 사용등록 */}
                  <div
                    className="home-card-group"
                    style={{ display: "none" }}
                  >
                    <div className="home-card-col">
                      <i
                        className="ico-main-card-960098-C w22"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="home-card-col">
                      <div className="home-card-desc">
                        <div className="desc01">
                          <span className="name type2">
                            호캉스 딱 기다려
                          </span>
                          {/*SR-2074 수정(class 추가 'type2' 말줄임 너비 조정) 2022-11-08 */}
                          <div className="tag neutral">
                            <span className="txt">배송중</span>
                          </div>
                        </div>
                        <div className="desc02">
                          <div className="sum-group fs21b ui-amount">
                            <button className="sum-check" type="button">
                              금액확인
                            </button>
                            {/* sum-loading 로딩영역 - 필요시 사용
                          <div class="sum-loading">
                            <div class="dot-flashing" aria-hidden="true"></div>
                          </div>*/}
                            <div className="sum">14,230원</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="home-card-col">
                      <a className="btn-under-link" href="#none">
                        <span className="txt-under-link">조회</span>
                        {/*SR-2074 수정(버튼명 : 배송조회/사용등록 > '조회'로 통일) 2022-11-08 */}
                      </a>
                    </div>
                  </div>
                  {/* s: FETASK-335 배송완료 케이스 추가 2022-12-13 */}
                  {/* CASE : 배송완료 */}
                  <div
                    className="home-card-group"
                    style={{ display: "none" }}
                  >
                    <div className="home-card-col">
                      <i
                        className="ico-main-card-960098-C w22"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="home-card-col">
                      <div className="home-card-desc">
                        <div className="desc01">
                          <span className="name type2">
                            호캉스 딱 기다려
                          </span>
                          <div className="tag neutral">
                            <span className="txt">배송완료</span>
                          </div>
                        </div>
                        <div className="desc02">
                          <div className="sum-group fs21b ui-amount">
                            <button className="sum-check" type="button">
                              금액확인
                            </button>
                            {/* sum-loading 로딩영역 - 필요시 사용
                          <div class="sum-loading">
                            <div class="dot-flashing" aria-hidden="true"></div>
                          </div>*/}
                            <div className="sum">14,230원</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="home-card-col">
                      <a className="btn-under-link" href="#none">
                        <span className="txt-under-link">조회</span>
                      </a>
                    </div>
                  </div>
                  {/* e: FETASK-335 배송완료 케이스 추가 2022-12-13 */}
                  {/* CASE : 분실 / 재발급 */}
                  <div
                    className="home-card-group"
                    style={{ display: "none" }}
                  >
                    <div className="home-card-col">
                      <i
                        className="ico-main-card-960098-A w22"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="home-card-col">
                      <div className="home-card-desc">
                        <div className="desc01">
                          <span className="name type2">
                            KT멤버십 더블혜택
                          </span>
                          {/*SR-2074 수정(class 추가 'type2' 말줄임 너비 조정) 2022-11-08 */}
                          <div className="tag negative">
                            <span className="txt">분실</span>
                          </div>
                        </div>
                        <div className="desc02">
                          <div className="sum-group fs21b ui-amount">
                            <button className="sum-check" type="button">
                              금액확인
                            </button>
                            {/* sum-loading 로딩영역 - 필요시 사용
                          <div class="sum-loading">
                            <div class="dot-flashing" aria-hidden="true"></div>
                          </div>*/}
                            <div className="sum">14,230원</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="home-card-col">
                      <a className="btn-under-link" href="#none">
                        <span className="txt-under-link">재발급</span>
                      </a>
                    </div>
                  </div>
                  {/* //220824 SR-1809 수정 */}
                  <div
                    className="banner-tooltip-group open ui-tooltip"
                    style={{ display: "none" }}
                  >
                    {/* FETASK-123 카드영역 툴팁 class 수정 'tooltip-group' > 'banner-tooltip-group' 2022-11-15*/}
                    <div className="tooltip-area">
                      <div className="tooltip-box">
                        <button
                          className="btn-tooltip-close"
                          type="button"
                        >
                          <span className="hide-txt">툴팁 닫기</span>
                        </button>
                        <div className="tooltip-content">
                          <p className="tit">타이틀타이틀타이틀</p>
                          <p className="txt">
                            텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*e: FETASK-1475 삭제(카드조회 진입점 삭제 후 통합) */}
                </div>
              </div>
              {/* //220824 SR-1809 수정 : DOM 위치 */}
              {/* 계좌 리스트*/}
              <div className="component-card">
                <div className="home-card-layout-group">
                  <div className="home-card-top-group">
                    <div className="card-header">
                      <div className="card-tit">
                        <span className="txt">챌린지박스</span>
                        {/* FETASK-1555 2023-11-09 화살표 추가 */}
                        <a href="#none" className="quick-link">
                          <span className="hide-txt">
                            챌린지박스 바로가기
                          </span>
                          <i
                            className="ico-arrow-sbr"
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="home-card-group">
                    <div className="home-card-col">
                      <i
                        className="ico-cb-002 w34"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="home-card-col">
                      <div className="home-card-desc">
                        <div className="desc01">
                          <span className="name">
                            부모님 용돈마련 코 용돈마련 코
                          </span>
                        </div>
                        <div className="desc02">
                          <div className="sum-group fs21b ui-amount">
                            <button className="sum-check" type="button">
                              금액확인
                            </button>
                            {/* sum-loading 로딩영역 - 필요시 사용
                          <div class="sum-loading">
                            <div class="dot-flashing" aria-hidden="true"></div>
                          </div>*/}
                            <div className="sum">14,230원</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="home-card-col">
                      <div className="home-card-field">
                        <span className="t01">5</span>
                        <span className="t02">/</span>
                        <span className="t02">10회</span>
                      </div>
                    </div>
                  </div>
                  <div className="banner-tooltip-group open ui-tooltip">
                    {/* FETASK-123 카드영역 툴팁 class 수정 'tooltip-group' > 'banner-tooltip-group' 2022-11-15*/}
                    <div className="tooltip-area">
                      <div className="tooltip-box">
                        <button
                          className="btn-tooltip-close"
                          type="button"
                        >
                          <span className="hide-txt">툴팁 닫기</span>
                        </button>
                        <div className="tooltip-content">
                          <p className="tit">타이틀타이틀타이틀</p>
                          <p className="txt">
                            텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="home-card-group">
                    <div className="home-card-col">
                      <i
                        className="ico-cb-tony-002 w34"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="home-card-col">
                      <div className="home-card-desc">
                        <div className="desc01">
                          <span className="name">호캉스 딱 기다려</span>
                        </div>
                        <div className="desc02">
                          <div className="sum-group fs21b ui-amount">
                            <button className="sum-check" type="button">
                              금액확인
                            </button>
                            {/* sum-loading 로딩영역 - 필요시 사용
                          <div class="sum-loading">
                            <div class="dot-flashing" aria-hidden="true"></div>
                          </div>*/}
                            <div className="sum">14,230원</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="home-card-col">
                      <div className="home-card-field box01">
                        <div className="t02">성공까지</div>
                        <span className="t03">D</span>
                        <span className="t03">-</span>
                        <span className="t03">5</span>
                      </div>
                    </div>
                  </div>
                  <div className="home-card-group">
                    <div className="home-card-col">
                      <i
                        className="ico-cb-0082 w34"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="home-card-col">
                      <div className="home-card-desc">
                        <div className="desc01">
                          <span className="name">과연 이 돈 모을</span>
                        </div>
                        <div className="desc02">
                          <div className="sum-group fs21b ui-amount">
                            <button className="sum-check" type="button">
                              금액확인
                            </button>
                            {/* sum-loading 로딩영역 - 필요시 사용
                          <div class="sum-loading">
                            <div class="dot-flashing" aria-hidden="true"></div>
                          </div>*/}
                            <div className="sum">14,230원</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="home-card-col">
                      <div className="home-card-field box02">
                        <span className="t03">성공</span>
                      </div>
                    </div>
                  </div>
                  <div className="home-card-group">
                    <div className="home-card-col">
                      <i
                        className="ico-cb-005 w34"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="home-card-col">
                      <div className="home-card-desc">
                        <div className="desc01">
                          <span className="name">
                            나를 위한 아이패드
                          </span>
                        </div>
                        <div className="desc02">
                          <div className="sum-group fs21b ui-amount">
                            <button className="sum-check" type="button">
                              금액확인
                            </button>
                            {/* sum-loading 로딩영역 - 필요시 사용
                          <div class="sum-loading">
                            <div class="dot-flashing" aria-hidden="true"></div>
                          </div>*/}
                            <div className="sum">14,230원</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="home-card-col">
                      <div className="home-card-field">
                        <span className="t04">아쉬워요</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* s: 20220526 기분통장 추가*/}
              {/* 계좌 리스트*/}
              <div className="component-card">
                <div className="home-card-layout-group">
                  <div className="home-card-top-group">
                    <div className="card-header">
                      {/* s: 20220429 클릭 영역 제거*/}
                      <div className="card-tit">
                        <span className="txt">플러스박스</span>
                      </div>
                      {/* e: 20220429 클릭 영역 제거*/}
                    </div>
                  </div>
                  <div className="home-card-group">
                    <div className="home-card-col">
                      <i
                        className="ico-pb-005 w34"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="home-card-col">
                      <div className="home-card-desc">
                        <div className="desc01">
                          <span className="name">
                            부모님 용돈마련 코
                          </span>
                        </div>
                        <div className="desc02">
                          <div className="sum-group fs21b ui-amount">
                            <button className="sum-check" type="button">
                              금액확인
                            </button>
                            {/* sum-loading 로딩영역 - 필요시 사용
                          <div class="sum-loading">
                            <div class="dot-flashing" aria-hidden="true"></div>
                          </div>*/}
                            <div className="sum">14,230원</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="home-card-col large">
                      <a
                        className="btn-lv04 bg-sky disabled"
                        href="#none"
                      >
                        {/*FETASK-1184 수정(class 명 'bg-sky') 2023-08-10*/}
                        {/* disabled case */}
                        <span className="txt">더하기</span>
                        {/*FETASK-1791 수정(이자받기 > 더하기) 2023-12-12*/}
                      </a>
                    </div>
                  </div>
                  <div className="banner-tooltip-group open ui-tooltip">
                    {/* FETASK-123 카드영역 툴팁 class 수정 'tooltip-group' > 'banner-tooltip-group' 2022-11-15*/}
                    <div className="tooltip-area">
                      <div className="tooltip-box">
                        <button
                          className="btn-tooltip-close"
                          type="button"
                        >
                          <span className="hide-txt">툴팁 닫기</span>
                        </button>
                        <div className="tooltip-content">
                          <p className="tit">타이틀타이틀타이틀</p>
                          <p className="txt">
                            텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="home-card-group">
                    <div className="home-card-col">
                      <i
                        className="ico-pb-002 w34"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="home-card-col">
                      <div className="home-card-desc">
                        <div className="desc01">
                          <span className="name">호캉스 딱 기다려</span>
                        </div>
                        <div className="desc02">
                          <div className="sum-group fs21b ui-amount">
                            <button className="sum-check" type="button">
                              금액확인
                            </button>
                            {/* sum-loading 로딩영역 - 필요시 사용
                          <div class="sum-loading">
                            <div class="dot-flashing" aria-hidden="true"></div>
                          </div>*/}
                            <div className="sum">14,230원</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="home-card-col large">
                      <a className="btn-lv04 bg-sky" href="#none">
                        {/*FETASK-1184 수정(class 명 'bg-sky') 2023-08-10*/}
                        <span className="txt">더하기</span>
                        {/*FETASK-1791 수정(이자받기 > 더하기) 2023-12-12*/}
                      </a>
                    </div>
                  </div>
                  <div className="home-card-group">
                    <div className="home-card-col">
                      <i
                        className="ico-pb-003 w34"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="home-card-col">
                      <div className="home-card-desc">
                        <div className="desc01">
                          <span className="name">
                            과연 이 돈 모을수
                          </span>
                        </div>
                        <div className="desc02">
                          <div className="sum-group fs21b ui-amount">
                            <button className="sum-check" type="button">
                              금액확인
                            </button>
                            {/* sum-loading 로딩영역 - 필요시 사용
                          <div class="sum-loading">
                            <div class="dot-flashing" aria-hidden="true"></div>
                          </div>*/}
                            <div className="sum">14,230원</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="home-card-col large">
                      <a className="btn-lv04 bg-sky" href="#none">
                        {/*FETASK-1184 수정(class 명 'bg-sky') 2023-08-10*/}
                        <span className="txt">더하기</span>
                        {/*FETASK-1791 수정(이자받기 > 더하기) 2023-12-12*/}
                      </a>
                    </div>
                  </div>
                  {/*s: FETASK-1791 추가(모인 이자 한번에 받기) 2023-11-28*/}
                  <div className="home-card-bottom-group mt20">
                    {/*모인 이자 없을때 home-card-bottom-group : display:none*/}
                    <div className="btn-group">
                      <button className="btn-lv01" type="button">
                        <i
                          className="ico-minus-circle2"
                          aria-hidden="true"
                        />
                        <span className="txt">
                          모인 이자 한번에 받기
                        </span>
                      </button>
                    </div>
                  </div>
                  {/*e: FETASK-1791 추가(모인 이자 한번에 받기) 2023-11-28*/}
                </div>
              </div>
              <div className="component-card">
                <div className="home-card-layout-group">
                  <div className="home-card-top-group">
                    <div className="card-header">
                      <div className="card-tit">
                        <span className="txt">플러스박스</span>
                      </div>
                    </div>
                  </div>
                  <div className="home-card-group">
                    <div className="home-card-col">
                      <i
                        className="ico-pb-005 w34"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="home-card-col">
                      <div className="home-card-desc">
                        <div className="desc01">
                          <span className="name">
                            부모님 용돈마련 코
                          </span>
                        </div>
                        <div className="desc02">
                          <div className="sum-group fs21b ui-amount">
                            <button className="sum-check" type="button">
                              금액확인
                            </button>
                            {/* sum-loading 로딩영역 - 필요시 사용
                          <div class="sum-loading">
                            <div class="dot-flashing" aria-hidden="true"></div>
                          </div>*/}
                            <div className="sum">14,230원</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="home-card-col large">
                      <a className="btn-lv04 bg-sky" href="#none">
                        <span className="txt">더하기</span>
                        {/*FETASK-1791 수정(이자받기 > 더하기) 2023-12-12*/}
                      </a>
                    </div>
                  </div>
                  {/*s: FETASK-1791 추가(모인 이자 한번에 받기) 2023-11-28*/}
                  <div className="home-card-bottom-group mt20">
                    {/*모인 이자 없을때 home-card-bottom-group : display:none*/}
                    <div className="btn-group">
                      <button className="btn-lv01" type="button">
                        <i
                          className="ico-minus-circle2"
                          aria-hidden="true"
                        />
                        <span className="txt">
                          모인 이자 한번에 받기
                        </span>
                      </button>
                    </div>
                  </div>
                  {/*e: FETASK-1791 추가(모인 이자 한번에 받기) 2023-11-28*/}
                </div>
              </div>
              {/* 계좌 리스트*/}
              <div className="component-card">
                <div className="home-card-layout-group">
                  <div className="home-card-top-group">
                    <div className="card-header">
                      <div className="card-tit type01">
                        <span className="txt">기분통장</span>
                        {/* <span class="sub-txt">(플러스박스)</span> */}
                      </div>
                    </div>
                  </div>
                  <div className="home-card-group">
                    <div className="home-card-col">
                      <i
                        className="img-feeling-h01 w34"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="home-card-col">
                      <div className="home-card-desc">
                        <div className="desc01">
                          <span className="name">
                            오늘 기분은 어때요?
                          </span>
                        </div>
                        <div className="desc02">
                          <div className="sum-group fs21b ui-amount">
                            <button className="sum-check" type="button">
                              금액확인
                            </button>
                            {/* sum-loading 로딩영역 - 필요시 사용
                          <div class="sum-loading">
                            <div class="dot-flashing" aria-hidden="true"></div>
                          </div>*/}
                            <div className="sum">14,230원</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="home-card-col large">
                      {/*FETASK-796 2023-03-28 버튼 4글자용 large 클래스 추가 */}
                      <a className="btn-lv04 bg-sky" href="#none">
                        {/*FETASK-1184 수정(class 명 'bg-sky') 2023-08-10*/}
                        <span className="txt">기분입력</span>
                        {/*FETASK-796 2023-03-28 수정(이자받기 > 기분입력) */}
                      </a>
                    </div>
                  </div>
                  <div className="home-card-group">
                    <div className="home-card-col">
                      <i
                        className="img-feeling-h01 w34"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="home-card-col">
                      <div className="home-card-desc">
                        <div className="desc01">
                          <span className="name">
                            오늘 기분은 어때요?
                          </span>
                        </div>
                        <div className="desc02">
                          <div className="sum-group fs21b ui-amount">
                            <button className="sum-check" type="button">
                              금액확인
                            </button>
                            {/* sum-loading 로딩영역 - 필요시 사용
                          <div class="sum-loading">
                            <div class="dot-flashing" aria-hidden="true"></div>
                          </div>*/}
                            <div className="sum">14,230원</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="home-card-col large">
                      {/*FETASK-796 2023-03-28 버튼 4글자용 large 클래스 추가 */}
                      <a className="btn-lv04 bg-sky" href="#none">
                        {/*FETASK-1184 수정(class 명 'bg-sky') 2023-08-10*/}
                        <span className="txt">기분입력</span>
                        {/*FETASK-796 2023-03-28 수정(이자받기 > 기분입력) */}
                      </a>
                    </div>
                  </div>
                  {/*s: FETASK-1791 추가(모인 이자 한번에 받기) 2023-11-28*/}
                  <div className="home-card-bottom-group mt20">
                    {/*모인 이자 없을때 home-card-bottom-group : display:none*/}
                    <div className="btn-group">
                      <button className="btn-lv01" type="button">
                        <i
                          className="ico-minus-circle2"
                          aria-hidden="true"
                        />
                        <span className="txt">
                          모인 이자 한번에 받기
                        </span>
                      </button>
                    </div>
                  </div>
                  {/*e: FETASK-1791 추가(모인 이자 한번에 받기) 2023-11-28*/}
                </div>
              </div>
              <div className="component-card">
                <div className="home-card-layout-group">
                  <div className="home-card-top-group">
                    <div className="card-header">
                      <div className="card-tit type01">
                        <span className="txt">기분통장</span>
                        {/* <span class="sub-txt">(플러스박스)</span> */}
                      </div>
                    </div>
                  </div>
                  <div className="home-card-group">
                    <div className="home-card-col">
                      <i
                        className="img-feeling-h01 w34"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="home-card-col">
                      <div className="home-card-desc">
                        <div className="desc01">
                          <span className="name">
                            오늘 기분은 어때요?
                          </span>
                        </div>
                        <div className="desc02">
                          <div className="sum-group fs21b ui-amount">
                            <button className="sum-check" type="button">
                              금액확인
                            </button>
                            {/* sum-loading 로딩영역 - 필요시 사용
                          <div class="sum-loading">
                            <div class="dot-flashing" aria-hidden="true"></div>
                          </div>*/}
                            <div className="sum">14,230원</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="home-card-col large">
                      {/*FETASK-796 2023-03-28 버튼 4글자용 large 클래스 추가 */}
                      <a className="btn-lv04 bg-sky" href="#none">
                        {/*FETASK-1184 수정(class 명 'bg-sky') 2023-08-10*/}
                        <span className="txt">기분입력</span>
                        {/*FETASK-796 2023-03-28 수정(이자받기 > 기분입력) */}
                      </a>
                    </div>
                  </div>
                  {/*s: FETASK-1791 추가(모인 이자 한번에 받기) 2023-11-28*/}
                  <div className="home-card-bottom-group mt20">
                    {/*모인 이자 없을때 home-card-bottom-group : display:none*/}
                    <div className="btn-group">
                      <button className="btn-lv01" type="button">
                        <i
                          className="ico-minus-circle2"
                          aria-hidden="true"
                        />
                        <span className="txt">
                          모인 이자 한번에 받기
                        </span>
                      </button>
                    </div>
                  </div>
                  {/*e: FETASK-1791 추가(모인 이자 한번에 받기) 2023-11-28*/}
                </div>
              </div>
              {/* e: 20220526 기분통장 추가*/}
              {/* 계좌 리스트*/}
              <div className="component-card">
                <div className="home-card-layout-group">
                  <div className="home-card-top-group">
                    <div className="card-header">
                      <div className="card-tit">
                        <span className="txt">예금·적금</span>
                        {/*s: FETASK-152 2022-11-29 화살표 아이콘 추가 */}
                        <a href="#none" className="quick-link">
                          <span className="hide-txt">
                            예금·적금 바로가기
                          </span>
                          <i
                            className="ico-arrow-sbr"
                            aria-hidden="true"
                          />
                        </a>
                        {/*e: FETASK-152 2022-11-29 화살표 아이콘 추가 */}
                      </div>
                    </div>
                  </div>
                  <div className="home-card-group">
                    <div className="home-card-col">
                      <i className="ico-save-001" aria-hidden="true" />
                    </div>
                    <div className="home-card-col">
                      <div className="home-card-desc">
                        <div className="desc01">
                          <span className="name">
                            부모님 용돈마련 코
                          </span>
                          <div className="tag">
                            <i
                              className="ico-plus"
                              aria-hidden="true"
                            />
                            <span className="txt">금리보장</span>
                          </div>
                        </div>
                        <div className="desc02">
                          <div className="sum-group fs21b ui-amount">
                            <button className="sum-check" type="button">
                              금액확인
                            </button>
                            {/* sum-loading 로딩영역 - 필요시 사용
                          <div class="sum-loading">
                            <div class="dot-flashing" aria-hidden="true"></div>
                          </div>*/}
                            <div className="sum">14,230원</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="banner-tooltip-group open ui-tooltip">
                    {/* FETASK-123 카드영역 툴팁 class 수정 'tooltip-group' > 'banner-tooltip-group' 2022-11-15*/}
                    <div className="tooltip-area">
                      <div className="tooltip-box">
                        <button
                          className="btn-tooltip-close"
                          type="button"
                        >
                          <span className="hide-txt">툴팁 닫기</span>
                        </button>
                        <div className="tooltip-content">
                          <p className="tit">타이틀타이틀타이틀</p>
                          <p className="txt">
                            텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="home-card-group">
                    <div className="home-card-col">
                      <i className="ico-save-001" aria-hidden="true" />
                    </div>
                    <div className="home-card-col">
                      <div className="home-card-desc">
                        <div className="desc01">
                          <span className="name">호캉스 딱 기다려</span>
                        </div>
                        <div className="desc02">
                          <div className="sum-group fs21b ui-amount">
                            <button className="sum-check" type="button">
                              금액확인
                            </button>
                            {/* sum-loading 로딩영역 - 필요시 사용
                          <div class="sum-loading">
                            <div class="dot-flashing" aria-hidden="true"></div>
                          </div>*/}
                            <div className="sum">14,230원</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="home-card-group">
                    <div className="home-card-col">
                      <i className="ico-save-001" aria-hidden="true" />
                    </div>
                    <div className="home-card-col">
                      <div className="home-card-desc">
                        <div className="desc01">
                          <span className="name">과연 이 돈 모을</span>
                        </div>
                        <div className="desc02">
                          <div className="sum-group fs21b ui-amount">
                            <button className="sum-check" type="button">
                              금액확인
                            </button>
                            {/* sum-loading 로딩영역 - 필요시 사용
                          <div class="sum-loading">
                            <div class="dot-flashing" aria-hidden="true"></div>
                          </div>*/}
                            <div className="sum">14,230원</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 계좌 리스트*/}
              <div className="component-card">
                <div className="home-card-layout-group">
                  <div className="home-card-top-group">
                    <div className="card-header">
                      <div className="card-tit">
                        <span className="txt">대출</span>
                        {/*s: FETASK-152 2022-11-29 화살표 아이콘 추가 */}
                        <a href="#none" className="quick-link">
                          <span className="hide-txt">
                            대출 바로가기
                          </span>
                          <i
                            className="ico-arrow-sbr"
                            aria-hidden="true"
                          />
                        </a>
                        {/*e: FETASK-152 2022-11-29 화살표 아이콘 추가 */}
                      </div>
                    </div>
                  </div>
                  <div className="home-card-group">
                    <div className="home-card-col">
                      <i className="ico-loan-001" aria-hidden="true" />
                    </div>
                    <div className="home-card-col">
                      <div className="home-card-desc">
                        <div className="desc01">
                          <span className="name">
                            부모님 용돈마련 코
                          </span>
                        </div>
                        <div className="desc02">
                          <div className="sum-group fs21b ui-amount">
                            <button className="sum-check" type="button">
                              금액확인
                            </button>
                            {/* sum-loading 로딩영역 - 필요시 사용
                          <div class="sum-loading">
                            <div class="dot-flashing" aria-hidden="true"></div>
                          </div>*/}
                            <div className="sum">14,230원</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="home-card-group">
                    <div className="home-card-col">
                      <i className="ico-loan-001" aria-hidden="true" />
                    </div>
                    <div className="home-card-col">
                      <div className="home-card-desc">
                        <div className="desc01">
                          <span className="name">신용대출 플러스</span>
                          <div className="tag">
                            <i
                              className="ico-plus"
                              aria-hidden="true"
                            />
                            <span className="txt">대출안심플랜</span>
                          </div>
                        </div>
                        <div className="desc02">
                          <div className="sum-group fs21b ui-amount">
                            <button className="sum-check" type="button">
                              금액확인
                            </button>
                            {/* sum-loading 로딩영역 - 필요시 사용
                          <div class="sum-loading">
                            <div class="dot-flashing" aria-hidden="true"></div>
                          </div>*/}
                            <div className="sum">14,230원</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="home-card-group">
                    <div className="home-card-col">
                      <i className="ico-loan-001" aria-hidden="true" />
                    </div>
                    <div className="home-card-col">
                      <div className="home-card-desc">
                        <div className="desc01">
                          <span className="name">과연 이 돈 모을</span>
                        </div>
                        <div className="desc02">
                          <div className="sum-group fs21b ui-amount">
                            <button className="sum-check" type="button">
                              금액확인
                            </button>
                            {/* sum-loading 로딩영역 - 필요시 사용
                          <div class="sum-loading">
                            <div class="dot-flashing" aria-hidden="true"></div>
                          </div>*/}
                            <div className="sum">14,230원</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="banner-tooltip-group open ui-tooltip">
                    {/* FETASK-123 카드영역 툴팁 class 수정 'tooltip-group' > 'banner-tooltip-group' 2022-11-15*/}
                    <div className="tooltip-area">
                      <div className="tooltip-box">
                        <button
                          className="btn-tooltip-close"
                          type="button"
                        >
                          <span className="hide-txt">툴팁 닫기</span>
                        </button>
                        <div className="tooltip-content">
                          <p className="tit">타이틀타이틀타이틀</p>
                          <p className="txt">
                            텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 계좌 리스트*/}
              <div className="component-card">
                <div className="home-card-layout-group">
                  <div className="home-card-top-group">
                    <div className="card-header">
                      <div className="card-tit">
                        <span className="txt">실시간 인기</span>{" "}
                        {/* FETASK-1503 타이틀 수정 2023-09-22 */}
                      </div>
                    </div>
                  </div>
                  {/* 220824 SR-1809 추가 */}
                  <div className="home-card-group">
                    <div className="home-card-col">
                      <i
                        className="ico-service-012 w34"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="home-card-col">
                      <div className="home-card-desc">
                        <div className="desc01">
                          <span className="name">
                            소득공제에 특별한 혜택까지
                          </span>
                        </div>
                        <div className="desc02">
                          <span className="sum">체크카드</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* //220824 SR-1809 추가 */}
                  <div className="home-card-group">
                    <div className="home-card-col">
                      <i
                        className="ico-service-001 w34"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="home-card-col">
                      <div className="home-card-desc">
                        <div className="desc01">
                          <span className="name">최근사용</span>
                        </div>
                        <div className="desc02">
                          <span className="sum">
                            내 신용관리 서비스
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="home-card-group">
                    <div className="home-card-col">
                      <i
                        className="ico-service-002 w34"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="home-card-col">
                      <div className="home-card-desc">
                        <div className="desc01">
                          <span className="name">인기상승</span>
                        </div>
                        <div className="desc02">
                          <span className="sum">계좌이동 서비스</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="home-card-group">
                    <div className="home-card-col">
                      <i
                        className="ico-service-003 w34"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="home-card-col">
                      <div className="home-card-desc">
                        <div className="desc01">
                          <span className="name">자주사용</span>
                        </div>
                        <div className="desc02">
                          <span className="sum">
                            내 신용관리 서비스
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 거래중지 계좌 (입출금계좌가 1개 일 경우)*/}
              <div className="component-card">
                <div className="home-card-layout-group">
                  <div className="home-card-top-group">
                    <div className="card-header">
                      <div className="card-info">
                        <div className="card-account-tit">
                          <span>MY입출금통장</span>
                          <div className="tag negative">
                            <span className="txt">거래중지</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-row">
                      <div className="card-col-content">
                        <div className="sum-group fs28b ui-amount">
                          <div className="sum">104,230원</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 계좌 없을 경우1*/}
              <div className="component-nodata">
                <div className="nodata-account-group">
                  <p className="txt-lv01">보유중인 계좌가 없습니다.</p>
                </div>
              </div>
              {/* s: 20220429 계좌 없을 경우2 수정*/}
              <div className="component-nodata-card">
                <a className="nodata-card-group" href="#none">
                  <div className="nodata-card-col">
                    <i className="ico-add" aria-hidden="true" />
                  </div>
                  <div className="nodata-card-col">
                    <div className="nodata-card-desc">
                      <div className="desc01">
                        <span className="name">
                          보유중인 계좌가 없습니다.
                        </span>
                      </div>
                      <div className="desc02">
                        <span className="sum">입출금계좌 가입</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              {/* e: 20220429 계좌 없을 경우2 수정*/}
              {/* 버튼*/}
              <div className="component-btn">
                <div className="btn-group">
                  <a className="btn-lv02 white" href="#none">
                    <span className="txt">금액숨김</span>
                  </a>
                  <a className="btn-lv02 white" href="#none">
                    <span className="txt">순서변경</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>

    <BottomBar tab={"home"}></BottomBar>


    <div className="component-btn">
      {/* 20220427 btn-chatbot영역에 ing 클래스 추가 - 상담원 답변이 노출되어야 할때 사용*/}
      {/* 20220419 btn-chatbot영역에 on 클래스 추가*/}
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


    </>
  );
}

export default home;
