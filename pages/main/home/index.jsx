import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Popup from "../../../components/popup";
import { useEffect, useState } from "react";
import dtlList from "@/public/datas/dtlList";
import Script from "next/script";
import BottomBar from "@/components/Main/BottomBar";

function home() {
  const [isOpen, setIsOpen] = useState(false);
  const [detailItem, setDetailItem] = useState([]);
  return (
    <>
    <Script async src={"https://m.kbanknow.com/resource/js/mmk/common.ui.libs.js"} />
    <Script async src={"https://m.kbanknow.com/resource/js/mmk/common.ui.js"} />
    <Script async src={"https://m.kbanknow.com/resource/js/mmk/main.ui.js"} />
    {/* <Script async src={"https://m.kbanknow.com/resource/js/smb/com/smbjs/smb.core.js"} /> */}
    <Script async src={"https://m.kbanknow.com/resource/js/ui.js"} />
    <Script async src={"https://m.kbanknow.com/resourcez/js/cmm/lib/lottie.min.js"} />

    <div id="wrap-mmk">
    
    <div id="content-mmk">
      <div id="page-popup-widget">

        <div className="kbank-page-container ui-widget">
          
          <div className="kbank-page-wrapper">
            
            <div className="kbank-page-PBKMAN0000000400S_M01 ui-kbank-page-control activeSlide">
            {/* <Popup
          onClose={() => {
            setIsOpen(!isOpen);
          }}
          isOpen={isOpen}
          item={detailItem}
        /> */}
              <div className="page-inner-scroll">
                
                <div className="main-tab-container">
                  
                  {/* 홈_MY*/}
                  <div
                    className="main-tab-content01"
                    id="content_1"
                    style={{ display: "block" }}
                  >
                    {/* 스켈레톤 div. 필요한 영역에 넣어서 사용해 보세요
                  <div class="component-skeleton"><span class="hide-txt">로딩중</span>
                    <div class="skeleton-main-group skeleton-animation-all" aria-hidden="true">
                      <div class="skeleton-item02-group">
                        <div class="skeleton-item02"></div>
                        <div class="skeleton-item02"></div>
                      </div>
                      <div class="skeleton-item03"></div>
                      <div class="skeleton-item04"></div>
                    </div>
                  </div>*/}
                    <div className="main-tab-content-inner">
                      <div className="container-component bg-gray">
                        {/* 탑 영역*/}
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
                        {/*s : FETASK-1118 추가(간편홈 유도 배너) 2023-06-29*/}
                        <div className="component-banner">
                          <div className="home-banner01-group simple-home-banner home-banner-bg-white">
                            <div className="home-banner-icon">
                              <img
                                src="../../../../resource/img/mmk/main/banner_simplehome.png"
                                className="simple-banner-img"
                                alt=""
                              />
                            </div>
                            <div className="home-banner-main-txt font-141414">
                              시니어를 위한
                              <br />
                              쉽고 간편한 홈 이용해보세요
                            </div>
                            <div className="home-banner-sub-txt font-414141">
                              하단 전체탭 &gt; 우측 상단의{" "}
                              <i className="ico-set" aria-hidden="true">
                                <span className="hide-txt">설정</span>
                              </i>{" "}
                              버튼을 누르면
                              <br /> 간편 홈 모드 설정이 가능해요.{" "}
                            </div>
                            <div className="home-banner-btn">
                              <a className="btn-banner01 btn-3a58ce" href="#none">
                                간편 홈 바로 사용하기
                              </a>
                            </div>
                            <div className="home-banner-btn-close">
                              <a
                                className="btn-banner02 font-414141"
                                href="#none"
                              >
                                나중에 하기
                              </a>
                            </div>
                          </div>
                        </div>
                        {/*e : FETASK-1118 추가(간편홈 유도 배너) 2023-06-29*/}
                        {/* s: SR-1969 221005 비정상계좌 케이스 추가 */}
                        {/* case1. 비계좌 회원 */}
                        <div className="component-banner unlock-member">
                          <div className="home-banner01-group home-banner-bg-white">
                            <div className="home-banner-icon">
                              <img
                                src="../../../../resource/img/bim//my_account_ani.png"
                                alt=""
                              />
                            </div>
                            <div className="home-banner-main-txt font-0f0060">
                              이제 입출금 통장을
                              <br /> 만들어보세요
                            </div>
                            <div className="home-banner-sub-txt font-414141">
                              간단한 인증절차를 거쳐 입출금 계좌를 만들 수 있어요.
                            </div>
                            <div className="home-banner-btn">
                              <a className="btn-banner01 btn-c8f03e" href="#none">
                                통장개설 이어하기
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* case2. EDD 재이행 FETASK-1861 수정(문구 현행화) 2023-12-04*/}
                        <div className="component-banner unlock-member">
                          <div className="home-banner01-group home-banner-bg-white">
                            <div className="home-banner-icon">
                              <img
                                src="../../../../resource/img/mmk/main/ico_my_unlock01.png"
                                alt=""
                              />
                            </div>
                            <div className="home-banner-main-txt font-0f0060">
                              케이님 본인이
                              <br />
                              맞으세요?
                            </div>
                            <div className="home-banner-sub-txt font-414141">
                              고객님의 안전을 위해, 본인확인 정보를
                              <br />
                              주기적으로 확인하고 있어요.
                              {/*FETASK-851 2023-04-12 EDD최초실행 ~ 6개월간 이행 안한 경우 안내문구 추가 
                        <br>YYYY년 MM월 DD일 이후에는 고객정보를 다시 확인하신 후 
                        서비스를 이용하실 수 있습니다.*/}
                            </div>
                            <div className="home-banner-btn">
                              <a className="btn-banner01 btn-c8f03e" href="#none">
                                지금 확인할게요
                              </a>
                            </div>
                            <div className="home-banner-btn-close">
                              <a
                                className="btn-banner02 font-141414"
                                href="#none"
                              >
                                오늘 그만 보기
                              </a>{" "}
                              {/* FETASK-1674 버튼명 수정 2023-11-13 */}
                            </div>
                          </div>
                        </div>
                        {/* case3. 거래중지 */}
                        <div className="component-banner unlock-member">
                          <div className="home-banner01-group home-banner-bg-white">
                            <div className="home-banner-icon">
                              <img
                                src="../../../../resource/img/mmk/main/ico_my_unlock02.png"
                                alt=""
                              />
                            </div>
                            <div className="home-banner-main-txt font-0f0060">
                              통장 거래 중지를 풀고
                              <br />
                              케이뱅크를 이용해보세요
                            </div>
                            <div className="home-banner-sub-txt font-414141">
                              고객님의 계좌를 안전하게 보호하기 위해
                              <br />
                              거래를 막아두었어요.
                              <br />
                              거래 중지를 풀고 더 편리해진 케이뱅크를 만나보세요.
                            </div>
                            <div className="home-banner-btn">
                              <a className="btn-banner01 btn-c8f03e" href="#none">
                                거래 중지 풀게요
                              </a>
                            </div>
                            <div className="home-banner-btn-close">
                              <a
                                className="btn-banner02 font-141414"
                                href="#none"
                              >
                                다음에 할게요
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* case4. 장기미사용(이체) */}
                        <div className="component-banner unlock-member">
                          <div className="home-banner01-group home-banner-bg-white">
                            <div className="home-banner-icon">
                              <img
                                src="../../../../resource/img/mmk/main/ico_my_unlock03.png"
                                alt=""
                              />
                            </div>
                            <div className="home-banner-main-txt font-0f0060">
                              본인 인증을 통해
                              <br />
                              간편하게 이체해보세요
                            </div>
                            <div className="home-banner-sub-txt font-414141">
                              안전한 금융거래를 위해
                              <br />
                              장기 미사용 고객님의 통장 사용을 막아두었어요.
                              <br />
                              본인 인증을 통해 제한을 풀고 이체를 이용해보세요.
                            </div>
                            <div className="home-banner-btn">
                              <a className="btn-banner01 btn-c8f03e" href="#none">
                                사용 제한 풀게요
                              </a>
                            </div>
                            <div className="home-banner-btn-close">
                              <a
                                className="btn-banner02 font-141414"
                                href="#none"
                              >
                                오늘 그만 보기
                              </a>{" "}
                              {/* FETASK-1674 버튼명 수정 2023-11-13 */}
                            </div>
                          </div>
                        </div>
                        {/* case5. 한도계좌 걸려있을 때 */}
                        <div className="component-banner unlock-member">
                          <div className="home-banner01-group home-banner-bg-white">
                            <div className="home-banner-icon">
                              <img
                                src="../../../../resource/img/mmk/main/ico_my_unlock05.png"
                                alt=""
                              />
                            </div>
                            <div className="home-banner-main-txt font-0f0060">
                              하루에 100만원이상
                              <br />
                              이체하고 싶어요
                            </div>
                            <div className="home-banner-sub-txt font-414141">
                              고객님의 자산을 안전하게 지키기 위해 1일 이체한도를
                              제한하고 있어요. 휴대폰 인증으로 한도를 풀어보세요.
                            </div>
                            <div className="home-banner-btn">
                              <a className="btn-banner01 btn-c8f03e" href="#none">
                                이체 한도를 풀게요
                              </a>
                            </div>
                            <div className="home-banner-btn-close">
                              <a
                                className="btn-banner02 font-141414"
                                href="#none"
                              >
                                오늘 그만 보기
                              </a>{" "}
                              {/* FETASK-1674 버튼명 수정 2023-11-13 */}
                            </div>
                          </div>
                        </div>
                        {/* case7. 2건 이상 걸려있을 때 */}
                        <div className="component-banner unlock-member">
                          <div className="home-banner01-group home-banner-bg-white">
                            <div className="home-banner-icon">
                              <img
                                src="../../../../resource/img/mmk/main/ico_my_unlock04.png"
                                alt=""
                              />
                            </div>
                            <div className="home-banner-main-txt font-0f0060">
                              더욱 편리해진 케이뱅크
                              <br />
                              지금 바로 이용해보세요
                            </div>
                            <div className="home-banner-sub-txt font-414141">
                              간단한 본인 인증만 거치면
                              <br />
                              케이뱅크 서비스를 이용할 수 있어요.
                            </div>
                            <div className="home-banner-btn">
                              <a className="btn-banner01 btn-c8f03e" href="#none">
                                지금 인증할게요
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="component-banner">
                          <div className="home-banner-new04-group home-banner-bg-white">
                            <a className="home-banner-link" href="#none">
                              <div className="home-banner-notice">
                                <div className="banner-notice01">
                                  <img
                                    src="../../../../resource/img/mmk/main/ico_my_unlock06.png"
                                    alt=""
                                  />
                                </div>
                                <div className="banner-notice02">
                                  <div className="banner-main-txt">
                                    <span className="font-141414">
                                      제출하신 서류를 검토하고 있어요
                                    </span>
                                  </div>
                                  <div className="banner-sub-txt">
                                    <span className="font-414141">
                                      심사는 평일 기준 최대 3일 소요되며
                                      <br />
                                      문자메시지로 결과를 알려드려요.
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </a>
                            <div className="home-banner-btn-close">
                              <button className="btn-delete02-txt" type="button">
                                <span className="hide-txt">닫기</span>
                                <i className="ico-delete" aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* e: SR-1969 221005 비정상계좌 케이스 추가 */}
                        {/* 아파트담보대출 배너*/}
                        <div className="component-banner">
                          <div className="home-banner06-group home-banner-bg-white">
                            <div className="home-banner-notice">
                              <div className="banner-notice01">
                                <img src="/resource/img/mmk/main/ico_main_009.png" />
                              </div>
                              <div className="banner-notice02">
                                <div className="banner-txt01">
                                  <span className="font-141414">박기옥님</span>
                                  <span className="font-003fc7">
                                    아파트담보대출
                                  </span>
                                  진행 단계를 확인해보세요
                                </div>
                              </div>
                            </div>
                            <div className="home-banner-btn">
                              <a className="btn-banner01 font-141414" href="#">
                                다음에 할게요
                              </a>
                              <a className="btn-banner02 font-141414" href="#">
                                계속 진행할게요
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* 220916 SR-1912 추가 */}
                        <div className="component-banner">
                          <div className="home-banner02-group home-banner-bg-white">
                            <div className="home-banner-main-txt font-141414">
                              입출금계좌 개설을
                              <br />
                              이어서 진행해보세요
                            </div>
                            <div className="home-banner-sub-txt font-414141">
                              주민등록증을 준비해주세요.
                              <br />
                              인증절차를 거쳐 입출금계좌를 만들 수 있어요.
                            </div>
                            <div className="home-banner-btn">
                              <a className="btn-banner01 btn-0f0060" href="#none">
                                입출금계좌 만들게요
                              </a>
                            </div>
                            <div className="home-banner-icon">
                              <img
                                src="../../../../resource/img/bim/my_account_0_navy.png"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        {/*s: SR-2022 수정(만17세이상 ~ 만18세 미만고객 case 추가 및 문구수정) 2022-10-19*/}
                        <div className="component-banner">
                          <div className="home-banner02-group home-banner-bg-white">
                            <div className="home-banner-main-txt font-141414">
                              이어서 통장을 만들까요?
                            </div>
                            <div className="home-banner-sub-txt font-414141">
                              간단한 인증만으로도 나만의 통장을 만들 수 있어요.
                            </div>
                            <div className="home-banner-btn">
                              <a className="btn-banner01 btn-0f0060" href="#none">
                                통장 만들기
                              </a>
                            </div>
                            <div className="home-banner-icon">
                              <img
                                src="../../../../resource/img/bim/my_account_0_navy.png"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="component-banner">
                          <div className="home-banner-new04-group home-banner-bg-primary2">
                            <a
                              className="home-banner-link font-0f0060"
                              href="#none"
                            >
                              <div className="home-banner-notice">
                                <div className="banner-notice01">
                                  <img
                                    src="../../../../resource/img/bim/my_piggybank.png"
                                    alt=""
                                  />
                                </div>
                                <div className="banner-notice02">
                                  <div className="banner-main-txt">
                                    <span className="font-0f0060">
                                      만 17세 케이님을 위한 Hi teen!
                                    </span>
                                  </div>
                                  <div className="banner-sub-txt">
                                    <span className="font-0f0060">
                                      스스로 하는 내 돈 관리, 시작해보세요
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </a>
                            <div className="home-banner-btn-close">
                              <button className="btn-delete02-txt" type="button">
                                <span className="hide-txt">닫기</span>
                                <i className="ico-delete" aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                        </div>
                        {/*e: SR-2022 수정(만17세이상 ~ 만18세 미만고객 case 추가 및 문구수정) 2022-10-19*/}
                        {/*s: SR-2022 수정(만14세이상 ~ 만17세 미만고객 선불계좌 만들기 진입점 제공 case 추가) 2022-10-19*/}
                        <div className="component-banner">
                          <div className="home-banner02-group home-banner-bg-primary2 ggg">
                            <div className="home-banner-main-txt font-0f0060">
                              1N세 케이님!
                              <br />
                              이제 돈 관리는
                              <br />
                              스스로 할 때가 되었죠
                            </div>
                            <div className="home-banner-btn">
                              <a className="btn-banner01 btn-c8f03e" href="#none">
                                Hi teen으로 내 돈 관리 시작
                              </a>
                            </div>
                            <div className="home-banner-icon">
                              <img
                                src="../../../../resource/img/bim/my_piggybank.png"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        {/*e: SR-2022 수정(만14세이상 ~ 만17세 미만고객 선불계좌 만들기 진입점 제공 case 추가) 2022-10-19*/}
                        <div className="component-banner">
                          <div className="home-banner02-group home-banner-bg-primary2 ggg">
                            <div className="home-banner-main-txt font-0f0060">
                              케이님, 만 14세를 위한
                              <br />
                              Hi teen
                              <br />
                              이어서 만들어보세요
                            </div>
                            <div className="home-banner-btn">
                              <a className="btn-banner01 btn-c8f03e" href="#none">
                                이어서 가입할게요
                              </a>
                            </div>
                            <div className="home-banner-icon">
                              <img
                                src="../../../../resource/img/bim/my_piggybank.png"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="component-banner">
                          <div className="home-banner-new03-group home-banner-bg-white">
                            <a className="home-banner-link" href="#none">
                              <div className="home-banner-icon">
                                <img
                                  src="../../../../resource/img/bim//my_account_ani.png"
                                  alt=""
                                />
                              </div>
                              <div className="home-banner-main-txt font-141414">
                                케이님, My입출금통장으로
                                <br />
                                업그레이드 하세요
                              </div>
                            </a>
                            <div className="home-banner-btn-close">
                              <button className="btn-delete02-txt" type="button">
                                <span className="hide-txt">닫기</span>
                                <i className="ico-delete" aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* //220916 SR-1912 추가 */}
                        {/* s: 20220624 추가 - 배너영역 신규 타입3*/}
                        <div className="component-banner">
                          <div className="home-banner-new03-group home-banner-bg-white">
                            <a className="home-banner-link" href="#none">
                              <div className="home-banner-icon">
                                <img
                                  src="../../../../resource/img/mmk/main/ico_main_009.png"
                                  alt=""
                                />
                              </div>
                              {/* s: 20220706 클래스명 수정*/}
                              <div className="home-banner-pre-txt font-414141">
                                계좌숨기기 서비스로 안전하게 숨겨놓으세요.
                              </div>
                              {/* e: 20220706 클래스명 수정*/}
                              <div className="home-banner-main-txt font-141414">
                                남에게 알리기 싫은 <br /> 나만의 통장이 있나요?
                              </div>
                              <div className="home-banner-sub-txt font-414141">
                                계좌숨기기 서비스로 안전하게 숨겨놓으세요.
                              </div>
                            </a>
                            <div className="home-banner-btn-close">
                              <button className="btn-delete02-txt" type="button">
                                <span className="hide-txt">닫기</span>
                                <i className="ico-delete" aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* e: 20220624 추가 - 배너영역 신규 타입3*/}
                        {/* s: 20220624 추가 - 배너영역 신규 타입4*/}
                        <div className="component-banner">
                          <div className="home-banner-new04-group home-banner-bg-white">
                            <a className="home-banner-link" href="#none">
                              <div className="home-banner-notice">
                                <div className="banner-notice01">
                                  <img
                                    src="../../../../resource/img/mmk/main/ico_main_009.png"
                                    alt=""
                                  />
                                </div>
                                <div className="banner-notice02">
                                  {/* s: 20220708 클래스 수정*/}
                                  <div className="banner-pre-txt">
                                    <span className="font-414141">
                                      메세지카드로 마음까지 전할수 있어요.
                                    </span>
                                  </div>
                                  <div className="banner-main-txt">
                                    <span className="font-141414">
                                      복잡한 계좌번호 대신
                                      <br />
                                      연락처로 송금하세요
                                    </span>
                                  </div>
                                  <div className="banner-sub-txt">
                                    <span className="font-414141">
                                      메세지카드로 마음까지 전할수 있어요.
                                    </span>
                                  </div>
                                  {/* e: 20220708 클래스 수정*/}
                                </div>
                              </div>
                            </a>
                            <div className="home-banner-btn-close">
                              <button className="btn-delete02-txt" type="button">
                                <span className="hide-txt">닫기</span>
                                <i className="ico-delete" aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* s: 20220624 추가 - 배너영역 신규 타입4*/}
                        {/* 배너영역 타입1*/}
                        <div className="component-banner">
                          <div className="home-banner01-group home-banner-bg-white">
                            <div className="home-banner-icon">
                              <img
                                src="../../../../resource/img/mmk/main/ico_main_009.png"
                                alt=""
                              />
                            </div>
                            <div className="home-banner-pre-txt font-414141">
                              preTxt
                            </div>
                            <div className="home-banner-main-txt font-0f0060">
                              케이님, 8월까지
                              <br />
                              납부하실 세금이 있어요!
                            </div>
                            <div className="home-banner-sub-txt font-414141">
                              자동납부 서비스 등록하시고 부담 "툭" 털어내세요!
                            </div>
                            <div className="home-banner-btn">
                              <a className="btn-banner01 btn-c8f03e" href="#none">
                                자동납부 설정하기
                              </a>
                            </div>
                            <div className="home-banner-btn-close">
                              <a
                                className="btn-banner02 font-141414"
                                href="#none"
                              >
                                다음에 할게요
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* 배너영역 타입2*/}
                        <div className="component-banner">
                          <div className="home-banner02-group home-banner-bg-white">
                            <div className="home-banner-pre-txt font-414141">
                              preTxt
                            </div>
                            <div className="home-banner-main-txt font-141414">
                              케이님, 8월까지
                              <br />
                              납부하실 세금이 있어요!
                            </div>
                            <div className="home-banner-sub-txt font-414141">
                              자동납부 서비스 등록하시고 부담 "툭" 털어내세요!
                            </div>
                            <div className="home-banner-btn">
                              <a className="btn-banner01 btn-0f0060" href="#none">
                                자동납부 설정하기
                              </a>
                            </div>
                            <div className="home-banner-icon">
                              <img
                                src="../../../../resource/img/mmk/main/note_1.png"
                                alt=""
                              />
                            </div>
                            <div className="home-banner-btn-close">
                              <a
                                className="btn-banner02 font-141414"
                                href="#none"
                              >
                                다음에 할게요
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* 배너영역 타입4*/}
                        <div className="component-banner">
                          <div className="home-banner04-group home-banner-bg-white">
                            <div className="home-banner-icon">
                              <img
                                src="../../../../resource/img/mmk/main/ico_main_009.png"
                                alt=""
                              />
                            </div>
                            <div className="home-banner-main-txt font-0f0060">
                              케이님, 혜택이 되는
                              <br />
                              정보를 알려드릴까요?
                            </div>
                            <div className="home-banner-pre-txt font-414141">
                              preTxt
                            </div>
                            <div className="home-banner-agreement">
                              <div className="input-checkbox-group left">
                                <div className="input-checkbox">
                                  <input
                                    type="checkbox"
                                    id="hab0001"
                                    name="hab0000"
                                  />
                                  <i
                                    className="checkbox-shape-line"
                                    aria-hidden="true"
                                  />
                                </div>
                                <label
                                  className="checkbox-txt-field fs12 font-141414"
                                  htmlFor="hab0001"
                                >
                                  상품서비스안내 및 이용권유 동의
                                  <div className="tag lv-01">
                                    <span className="txt">안심</span>
                                  </div>
                                </label>
                                <i className="ico-arrow-sbr" aria-hidden="true" />
                              </div>
                              <div className="input-checkbox-group left">
                                <div className="input-checkbox">
                                  <input
                                    type="checkbox"
                                    id="hab0002"
                                    name="hab0000"
                                  />
                                  <i
                                    className="checkbox-shape-line"
                                    aria-hidden="true"
                                  />
                                </div>
                                <label
                                  className="checkbox-txt-field fs12 font-141414"
                                  htmlFor="hab0002"
                                >
                                  광고성 수신동의 앱푸시
                                  <div className="tag lv-02">
                                    <span className="txt">다소안심</span>
                                  </div>
                                </label>
                                <i className="ico-arrow-sbr" aria-hidden="true" />
                              </div>
                              <div className="input-checkbox-group left">
                                <div className="input-checkbox">
                                  <input
                                    type="checkbox"
                                    id="hab0003"
                                    name="hab0000"
                                  />
                                  <i
                                    className="checkbox-shape-line"
                                    aria-hidden="true"
                                  />
                                </div>
                                <label
                                  className="checkbox-txt-field fs12 font-141414"
                                  htmlFor="hab0003"
                                >
                                  광고성 수신동의 LMS
                                  <div className="tag lv-03">
                                    <span className="txt">보통</span>
                                  </div>
                                </label>
                                <i className="ico-arrow-sbr" aria-hidden="true" />
                              </div>
                              <div className="input-checkbox-group left">
                                <div className="input-checkbox">
                                  <input
                                    type="checkbox"
                                    id="hab0004"
                                    name="hab0000"
                                  />
                                  <i
                                    className="checkbox-shape-line"
                                    aria-hidden="true"
                                  />
                                </div>
                                <label
                                  className="checkbox-txt-field fs12 font-141414"
                                  htmlFor="hab0004"
                                >
                                  테스트샘플
                                  <div className="tag lv-04">
                                    <span className="txt">신중</span>
                                  </div>
                                </label>
                                <i className="ico-arrow-sbr" aria-hidden="true" />
                              </div>
                              <div className="input-checkbox-group left">
                                <div className="input-checkbox">
                                  <input
                                    type="checkbox"
                                    id="hab0005"
                                    name="hab0000"
                                  />
                                  <i
                                    className="checkbox-shape-line"
                                    aria-hidden="true"
                                  />
                                </div>
                                <label
                                  className="checkbox-txt-field fs12 font-141414"
                                  htmlFor="hab0005"
                                >
                                  테스트샘플
                                  <div className="tag lv-05">
                                    <span className="txt">주의</span>
                                  </div>
                                </label>
                                <i className="ico-arrow-sbr" aria-hidden="true" />
                              </div>
                            </div>
                            <div className="home-banner-btn">
                              <a className="btn-banner01 btn-c8f03e" href="#none">
                                모두 동의하고 추천받기
                              </a>
                            </div>
                            <div className="home-banner-btn-close">
                              <a
                                className="btn-banner02 font-141414"
                                href="#none"
                              >
                                다음에 할게요
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* s: FETASK-440 2023-01-03 배너이미지 추가 건 */}
                        <div className="component-banner">
                          <div className="home-banner05-group home-banner-bg-white">
                            <div className="home-banner-icon">
                              <i
                                className="ico-notice-popset"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="home-banner-info">
                              <div className="banner-txt01 font-141414">
                                매번 뜨는 붙여넣기 허용팝업
                              </div>
                              <div className="banner-txt02 font-0f0060">
                                더이상 뜨지 않게 설정하려면?
                              </div>
                            </div>
                            <div className="home-banner-btn">
                              <button className="btn-delete-txt" type="button">
                                <span className="hide-txt">닫기</span>
                                <i className="ico-delete" aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* e: FETASK-440 2023-01-03 배너이미지 추가 건 */}
                        {/* 이체 복사*/}
                        <div className="component-banner">
                          <div className="home-banner05-group home-banner-bg-white">
                            <div className="home-banner-icon">
                              <i
                                className="logo-bank271 w34"
                                aria-hidden="true"
                                data-bankname="케이뱅크"
                              />
                            </div>
                            {/* s: 20220531 텍스트 영역 추가*/}
                            <div className="home-banner-info">
                              <div className="banner-txt01 font-141414">
                                복사한 계좌로 50,000원 이체할게요
                              </div>{" "}
                              {/* FETASK-152 2022-11-29 텍스트 수정(이체할께요 => 이체할게요) */}
                              <div className="banner-txt02 font-0f0060">
                                12334-445-359900
                              </div>
                              <div className="banner-txt03 font-141414">
                                부지런히 일하게 하세요!
                              </div>
                            </div>
                            {/* e: 20220531 텍스트 영역 추가*/}
                            <div className="home-banner-btn">
                              <button className="btn-delete-txt" type="button">
                                <span className="hide-txt">닫기</span>
                                {/* s: 20220706 아이콘 교체*/}
                                <i className="ico-delete" aria-hidden="true" />
                                {/* e: 20220706 아이콘 교체*/}
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* 220801 SR-1809 추가 : 계좌번호 복사 CASE 추가 */}
                        {/* 은행명 + 계좌번호 + 금액 */}
                        <div className="component-banner">
                          <div className="home-banner05-group home-banner-bg-white">
                            <div className="home-banner-icon">
                              <i
                                className="logo-bank278 w34"
                                aria-hidden="true"
                                data-bankname="케이뱅크"
                              />
                            </div>
                            <div className="home-banner-info">
                              <div className="banner-txt01 font-141414">
                                복사한 계좌로 1,000원 이체할게요
                              </div>{" "}
                              {/* FETASK-152 2022-11-29 텍스트 수정(이체할께요 => 이체할게요) */}
                              <div className="banner-txt02 font-0f0060">
                                12334-445-359900
                              </div>
                            </div>
                            <div className="home-banner-btn">
                              <button className="btn-delete-txt" type="button">
                                <span className="hide-txt">닫기</span>
                                <i className="ico-delete" aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* 은행명 + 계좌번호 */}
                        <div className="component-banner">
                          <div className="home-banner05-group home-banner-bg-white">
                            <div className="home-banner-icon">
                              <i
                                className="logo-bank089 w34"
                                aria-hidden="true"
                                data-bankname="케이뱅크"
                              />
                            </div>
                            <div className="home-banner-info">
                              <div className="banner-txt01 font-141414">
                                복사한 계좌로 이체할게요
                              </div>{" "}
                              {/* FETASK-152 2022-11-29 텍스트 수정(이체할께요 => 이체할게요) */}
                              <div className="banner-txt02 font-0f0060">
                                12334-445-359900
                              </div>
                            </div>
                            <div className="home-banner-btn">
                              <button className="btn-delete-txt" type="button">
                                <span className="hide-txt">닫기</span>
                                <i className="ico-delete" aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* 계좌번호 + 금액 */}
                        <div className="component-banner">
                          <div className="home-banner05-group home-banner-bg-white">
                            <div className="home-banner-icon">
                              <i
                                className="logo-bank-none w34"
                                aria-hidden="true"
                                data-bankname=""
                              />
                              {/* 은행명 없는 경우 : class logo-bank-none */}
                            </div>
                            <div className="home-banner-info">
                              <div className="banner-txt01 font-141414">
                                복사한 계좌로 1,000원 이체할게요
                              </div>{" "}
                              {/* FETASK-152 2022-11-29 텍스트 수정(이체할께요 => 이체할게요) */}
                              <div className="banner-txt02 font-0f0060">
                                12334-445-359900
                              </div>
                            </div>
                            <div className="home-banner-btn">
                              <button className="btn-delete-txt" type="button">
                                <span className="hide-txt">닫기</span>
                                <i className="ico-delete" aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* 계좌번호 */}
                        <div className="component-banner">
                          <div className="home-banner05-group home-banner-bg-white">
                            <div className="home-banner-icon">
                              <i
                                className="logo-bank-none w34"
                                aria-hidden="true"
                                data-bankname=""
                              />
                              {/* 은행명 없는 경우 : class logo-bank-none */}
                            </div>
                            <div className="home-banner-info">
                              <div className="banner-txt01 font-141414">
                                복사한 계좌로 이체할게요
                              </div>{" "}
                              {/* FETASK-152 2022-11-29 텍스트 수정(이체할께요 => 이체할게요) */}
                              <div className="banner-txt02 font-0f0060">
                                12334-445-359900
                              </div>
                            </div>
                            <div className="home-banner-btn">
                              <button className="btn-delete-txt" type="button">
                                <span className="hide-txt">닫기</span>
                                <i className="ico-delete" aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* //220801 SR-1809 추가 : 계좌번호 복사 CASE 추가 */}
                        {/*s: FETASK-152 2022-11-25 입출금계좌 수정*/}
                        <div className="component-card">
                          <div className="home-card-layout-group">
                            <div className="home-card-top-group my-home-card-top-group">
                              {/* 220913 SR-1904 수정 : 클래스 추가 .my-home-card-top-group */}
                              <div className="card-header">
                                <div className="card-info">
                                  <div className="card-account-tit">
                                    <span>MY입출금통장</span>
                                    {/* s: 20220624 링크추가*/}
                                    <a className="tag neutral" href="#none">
                                      <span className="txt">한도계좌</span>
                                    </a>
                                    <a className="tag negative" href="#none">
                                      <span className="txt">거래중지</span>
                                    </a>
                                    {/* e: 20220624 링크추가*/}
                                    <div className="tag positive">
                                      <span className="txt">마이너스</span>
                                    </div>
                                    {/* s: 20220701 퀵버튼 추가*/}
                                    <a className="btn-quick-more" href="#none">
                                      <i
                                        className="ico-more-dot"
                                        aira-hidden="true"
                                      />
                                      <span className="hide-txt">퀵버튼</span>
                                    </a>
                                    {/* e: 20220701 퀵버튼 추가*/}
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
                            {/* s: 20220616 Tip 추가*/}
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
                            </div>
                            {/* e: 20220616 Tip 추가*/}
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
                                      MY입출금통장(1123)
                                    </span>
                                    <div className="tag negative">
                                      <span className="txt">거래중지</span>
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
                            {/* s: 20220616 Tip 추가*/}
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
                            {/* e: 20220616 Tip 추가*/}
                            {/* s: FETASK-152 2022-11-25 입출금계좌 추가*/}
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
                                      MY입출금통장(1124)
                                    </span>
                                    <div className="tag negative">
                                      <span className="txt">거래중지</span>
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
                            data-space-between={16}
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
                  {/* 홈_상품 FETASK-364 2023-01-03 홈_추천 => 홈_상품으로 수정 */}
                  <div
                    className="main-tab-content02"
                    id="content_2"
                    style={{ display: "none" }}
                  >
                    {/* 스켈레톤 div. 필요한 영역에 넣어서 사용해 보세요
                  <div class="component-skeleton"><span class="hide-txt">로딩중</span>
                    <div class="skeleton-rec-group skeleton-animation-all" aria-hidden="true">
                      <div class="skeleton-item01-group">
                        <div class="skeleton-item01"></div>
                        <div class="skeleton-item01"></div>
                        <div class="skeleton-item01"></div>
                        <div class="skeleton-item01"></div>
                      </div>
                      <div class="skeleton-item02-group">
                        <div class="skeleton-item02"></div>
                        <div class="skeleton-item02"></div>
                      </div>
                      <div class="skeleton-item03"></div>
                      <div class="skeleton-item04"></div>
                    </div>
                  </div>*/}
                    <div className="main-tab-content-inner">
                      {/*s: FETASK-364 2023-01-03 상품탭 리뉴얼 */}
                      <div className="container-component frm-prd">
                        {/* Product Header Tab */}
                        <div className="headertab-products">
                          <div className="component-header">
                            <div className="home-header-group">
                              <div className="home-header-col">
                                <div className="home-header-tit">
                                  <span className="home-tit">상품</span>{" "}
                                  {/* FETASK-364 2023-01-03 추천 => 상품으로 수정*/}
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* 상단탭 */}
                          <div className="component-tab sticky-tab no-space type-extend">
                            {/**/}
                            <div className="tab-group ui-tab">
                              <div className="tab-round-group">
                                <div className="tab-list-type ui-tab-nav">
                                  <ul className="tab-list-col" role="tablist">
                                    {/* SR-1962 : new 아이콘 적용시 tab-item에 new 클래스 적용 */}
                                    <li className="tab-item active new">
                                      <a
                                        className="tab-link"
                                        href="#none"
                                        role="button"
                                      >
                                        <img
                                          src="../../../../resource/img/mmk/main/products/home/ico_prod_homemenu01.svg"
                                          alt=""
                                        />
                                        <span className="txt">예적금</span>
                                      </a>
                                    </li>
                                    <li className="tab-item">
                                      <a
                                        className="tab-link"
                                        href="#none"
                                        role="button"
                                      >
                                        <img
                                          src="../../../../resource/img/mmk/main/products/home/ico_prod_homemenu02.svg"
                                          alt=""
                                        />
                                        <span className="txt">대출</span>
                                      </a>
                                    </li>
                                    <li className="tab-item">
                                      <a
                                        className="tab-link"
                                        href="#none"
                                        role="button"
                                      >
                                        <img
                                          src="../../../../resource/img/mmk/main/products/home/ico_prod_homemenu03.svg"
                                          alt=""
                                        />
                                        <span className="txt">카드</span>
                                      </a>
                                    </li>
                                    <li className="tab-item">
                                      <a
                                        className="tab-link"
                                        href="#none"
                                        role="button"
                                      >
                                        <img
                                          src="../../../../resource/img/mmk/main/products/home/ico_prod_homemenu04.svg"
                                          alt=""
                                        />
                                        <span className="txt">증권/보험</span>
                                      </a>
                                    </li>
                                    <li className="tab-item">
                                      <a
                                        className="tab-link"
                                        href="#none"
                                        role="button"
                                      >
                                        <img
                                          src="../../../../resource/img/mmk/main/products/home/ico_prod_homemenu05.svg"
                                          alt=""
                                        />
                                        <span className="txt">Hi teen</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*// 상단탭 */}
                        </div>
                        {/*// Product Header Tab */}
                        {/* List */}
                        <div className="component-products-carousel">
                          <div className="title-group">
                            <div className="title-field-page">
                              주목할 만한 상품
                            </div>
                          </div>
                          {/* Swiper */}
                          <div
                            className="product-carousel-group carousel-group ui-swiper"
                            data-space-between={10}
                          >
                            {/* 카드 간 간격 */}
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
                                        {/*s: FETASK-606 2023-03-02 마케팅 문구 건 */}
                                        <p className="txt-notice">
                                          <span>금리가 올랐어요</span>
                                          <span />{" "}
                                          {/* 이모지가 없을때에는 왼쪽 span을 삭제해주세요 */}
                                        </p>
                                        {/* ※ 마케팅 문구가 없을때에는 txt-notice 영역 전체를 삭제해주세요. */}
                                        {/*e: FETASK-606 2023-03-02 마케팅 문구 건 */}
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
                          {/*// Swiper */}
                        </div>
                        {/*// List */}
                        {/* List */}
                        <div className="component-product-list">
                          <div className="title-group">
                            <div className="title-field-page">인기상품 Top5</div>
                          </div>
                          <div className="product-list-group">
                            <ul>
                              <li>
                                <a href="#none">
                                  <em>
                                    <span>코드K 자유적금</span>
                                    <span>코드로 우대받는 간편한 자유적금</span>
                                  </em>
                                  <span className="ico-txt">적금 BEST</span>
                                </a>
                              </li>
                              <li>
                                <a href="#none">
                                  <em>
                                    <span>챌린지박스</span>
                                    <span>최소 30일만 모아도 쏠쏠한 이자</span>
                                  </em>
                                  <span className="ico-txt">입출금 BEST</span>
                                </a>
                              </li>
                              <li>
                                <a href="#none">
                                  <em>
                                    <span>신용대출</span>
                                    <span>맞춤 상품을 추천하는</span>
                                  </em>
                                  <span className="ico-txt">대출 BEST</span>
                                </a>
                              </li>
                              <li>
                                <a href="#none">
                                  <em>
                                    <span>사장님 신용대출</span>
                                    <span>개인 사업자라면 최대 1억원까지</span>
                                  </em>
                                  <span className="ico-txt">사장님 BEST</span>
                                </a>
                              </li>
                              <li>
                                <a href="#none">
                                  <em>
                                    <span>삼성증권계좌</span>
                                    <span>계좌 만들면 5천원, 해외주식하면</span>
                                  </em>
                                  <span className="ico-txt">증권 BEST</span>
                                </a>
                              </li>
                              <li>
                                <a href="#none">
                                  <em>
                                    <span>미래에셋증권계좌</span>
                                    <span>
                                      계좌 만들면 5천원, 해외주식하면 계좌 만들면
                                      5천원, 해외주식하면
                                    </span>
                                  </em>
                                  <span className="ico-txt">증권 BEST</span>
                                </a>
                              </li>
                              <li>
                                <a href="#none">
                                  <em>
                                    <span>NH투자증권계좌</span>
                                    <span>
                                      계좌 만들면 5천원, 해외주식하면 계좌 만들면
                                      5천원, 해외주식하면
                                    </span>
                                  </em>
                                  {/* <span class="ico-txt">증권 BEST</span> */}
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/*// List */}
                        {/* List */}
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
                              <li>
                                <a href="none">
                                  <em>
                                    <img
                                      src="../../../../resource/img/mmk/main/products/home/ico_prod_home_wm_01.svg"
                                      alt=""
                                    />
                                    <span>머니톡</span>
                                  </em>
                                  <b className="txt-detail">
                                    <span>부자되는 모닝루틴</span>
                                  </b>
                                </a>
                              </li>
                              <li>
                                <a href="none">
                                  <em>
                                    <img
                                      src="../../../../resource/img/mmk/main/products/home/ico_prod_home_wm_02.svg"
                                      alt=""
                                    />
                                    <span>내 신용관리</span>
                                  </em>
                                  <b className="txt-detail">
                                    <span>내 신용점수 확인하기</span>
                                  </b>
                                </a>
                              </li>
                              <li>
                                <a href="none">
                                  <em>
                                    <img
                                      src="../../../../resource/img/mmk/main/products/home/ico_prod_home_wm_03.svg"
                                      alt=""
                                    />
                                    <span>가상자산</span>
                                  </em>
                                  <b className="txt-detail">
                                    <span>업비트는 역시 케뱅</span>
                                  </b>
                                </a>
                              </li>
                              <li>
                                <a href="none">
                                  <em>
                                    <img
                                      src="../../../../resource/img/mmk/main/products/home/ico_prod_home_wm_04.svg"
                                      alt=""
                                    />
                                    <span>부동산</span>
                                  </em>
                                  <b className="txt-detail">
                                    <span>부동산 자산 관리</span>
                                  </b>
                                </a>
                              </li>
                              <li>
                                <a href="none">
                                  <em>
                                    <img
                                      src="../../../../resource/img/mmk/main/products/home/ico_prod_home_wm_05.svg"
                                      alt=""
                                    />
                                    <span>주식투자서비스</span>
                                  </em>
                                  <b className="txt-detail">
                                    <span>주식 투자 서비스</span>
                                  </b>
                                </a>
                              </li>
                              <li>
                                <a href="none">
                                  <em>
                                    <img
                                      src="../../../../resource/img/mmk/main/products/home/ico_prod_home_wm_06.svg"
                                      alt=""
                                    />
                                    <span>금투자</span>
                                  </em>
                                  <b className="txt-detail">
                                    <span>센골드 금투자</span>
                                  </b>
                                </a>
                              </li>
                              <li>
                                <a href="none">
                                  <em>
                                    <img
                                      src="../../../../resource/img/mmk/main/products/home/ico_prod_home_wm_07.svg"
                                      alt=""
                                    />
                                    <span>공모주 청약 일정</span>
                                  </em>
                                  <b className="txt-detail">
                                    <span>공모주 일정</span>
                                  </b>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/*// List */}
                      </div>
                      {/*e: FETASK-364 2023-01-03 상품탭 리뉴얼 */}
                    </div>
                  </div>
                  {/* 홈_알림*/}
                  <div
                    className="main-tab-content03"
                    id="content_3"
                    style={{ display: "none" }}
                  >
                    {/* 스켈레톤 div. 필요한 영역에 넣어서 사용해 보세요
                  <div class="component-skeleton"><span class="hide-txt">로딩중</span>
                    <div class="skeleton-timeline-group skeleton-animation-all" aria-hidden="true">
                      <div class="skeleton-item01"></div>
                      <div class="skeleton-item02-group">
                        <div class="skeleton-item02-img"></div>
                        <div class="skeleton-item02-box"></div>
                      </div>
                      <div class="skeleton-item02-group">
                        <div class="skeleton-item02-img"></div>
                        <div class="skeleton-item02-box"></div>
                      </div>
                      <div class="skeleton-item03-group">
                        <div class="skeleton-item03-img"></div>
                        <div class="skeleton-item03-box"></div>
                      </div>
                      <div class="skeleton-item04-group">
                        <div class="skeleton-item04-box"></div>
                      </div>
                      <div class="skeleton-item04-group">
                        <div class="skeleton-item04-box"></div>
                      </div>
                      <div class="skeleton-item04-group">
                        <div class="skeleton-item04-box"></div>
                      </div>
                      <div class="skeleton-item04-group">
                        <div class="skeleton-item04-box"></div>
                      </div>
                    </div>
                  </div>*/}
                    <div className="main-tab-content-inner">
                      <div className="container-component timeline-20220609">
                        <div className="component-header">
                          <div className="home-header-group">
                            <div className="home-header-col">
                              <div className="home-header-tit">
                                <span className="home-tit">알림</span>{" "}
                                {/* FETASK-585 2023-02-07 타임라인 => 알림으로 수정*/}
                              </div>
                            </div>
                            <div className="home-header-col">
                              <button
                                className="btn-timeline-refresh ui-btn-animate"
                                type="button"
                              >
                                <span className="hide-txt">새로고침</span>
                                <i
                                  className="ico-timeline-refresh"
                                  aria-hidden="true"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="section-component" id="pull-down-content">
                          {/* s: 20220427 배너영역 추가*/}
                          <div className="component-banner">
                            <div className="home-timeline-banner-group">
                              <a className="timeline-banner-item" href="#none">
                                <img
                                  src="../../../../resource/img/mmk/main/shopinshop_event_3.png"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                          {/* e: 20220427 배너영역 추가*/}
                          {/* 날짜*/}
                          <div className="component-form-date">
                            <button
                              className="btn-timeline-calendarview ui-calendar"
                              type="button"
                            >
                              오늘, 02월 23일 수
                              <span className="hide-txt">달력</span>
                              <i
                                className="ico-triangle-calendar"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                          {/* 날짜별 데이터*/}
                          <div className="section-component">
                            <div className="component-card">
                              <div className="card-timeline-layout-group">
                                {/*미확인 알람의 경우 .unconfirmed 추가*/}
                                <div className="card-timeline-group unconfirmed">
                                  <a
                                    className="card-timeline-contents-group"
                                    href="#none"
                                  >
                                    <div className="card-timeline-contents">
                                      <div className="card-timeline-tit">
                                        부자되는 습관 만들기 '머니톡'
                                      </div>
                                    </div>
                                    <div className="card-timeline-btn-group">
                                      <div className="timeline-link">
                                        <span className="hide-txt">더보기</span>
                                        <i
                                          className="ico-arrow-link"
                                          aria-hidden="true"
                                        />
                                      </div>
                                    </div>
                                  </a>
                                  <div className="card-util">
                                    <span
                                      className="icon moneytalk"
                                      aria-hidden="true"
                                    />
                                    <span className="timeline-time">11:11</span>
                                  </div>
                                </div>
                                {/* s: 20220609 신규 추가 영역*/}
                                <div className="card-timeline-new-group">
                                  <a className="card-time-new-item" href="#none">
                                    <div className="new-txt-area">
                                      <div className="new-txt">
                                        오늘 사는게 제일 저렴한 오늘 사는게 제일
                                        저렴한 차?
                                      </div>
                                    </div>
                                    <div className="new-icon-area">
                                      <span className="new-icon">NEW</span>
                                      <i
                                        className="ico-arrow-link"
                                        aria-hidden="true"
                                      />
                                    </div>
                                  </a>
                                  <a className="card-time-new-item" href="#none">
                                    <div className="new-txt-area">
                                      <div className="new-txt">오늘 사는게</div>
                                    </div>
                                    <div className="new-icon-area">
                                      <i
                                        className="ico-arrow-link"
                                        aria-hidden="true"
                                      />
                                    </div>
                                  </a>
                                  <a className="card-time-new-item" href="#none">
                                    <div className="new-txt-area">
                                      <div className="new-txt">
                                        오늘 사는게 제일 저렴한 오늘 사는게 제일
                                        저렴한 차?
                                      </div>
                                    </div>
                                    <div className="new-icon-area">
                                      <i
                                        className="ico-arrow-link"
                                        aria-hidden="true"
                                      />
                                    </div>
                                  </a>
                                </div>
                                {/* e: 20220609 신규 추가 영역*/}
                                <div className="card-timeline-group unconfirmed">
                                  <a
                                    className="card-timeline-contents-group"
                                    href="#none"
                                  >
                                    <div className="card-timeline-contents">
                                      <div className="card-timeline-tit">
                                        입금 4,000원
                                      </div>
                                      <div className="card-timeline-data">
                                        <div className="timeline-txt">
                                          김수림환불 | MY입출금통장(8558) 잔액
                                          108,827,321원
                                        </div>
                                        <div className="timeline-txt">
                                          출금가능액 1,000,000원
                                        </div>
                                      </div>
                                    </div>
                                    <div className="card-timeline-btn-group">
                                      <div className="timeline-link">
                                        <span className="hide-txt">더보기</span>
                                        <i
                                          className="ico-arrow-link"
                                          aria-hidden="true"
                                        />
                                      </div>
                                    </div>
                                  </a>
                                  <div className="card-util">
                                    <span
                                      className="icon deposit"
                                      aria-hidden="true"
                                    />
                                    <span className="timeline-time">11:11</span>
                                  </div>
                                </div>
                                <div className="card-timeline-group unconfirmed">
                                  <a
                                    className="card-timeline-contents-group"
                                    href="#none"
                                  >
                                    <div className="card-timeline-contents">
                                      <div className="card-timeline-tit">
                                        승인 4,000원
                                      </div>
                                      <div className="card-timeline-data">
                                        <div className="timeline-txt">
                                          장준혁 | 체크카드(0000) 02/01
                                        </div>
                                        <div className="timeline-txt">
                                          출금가능액 1,000,000원
                                        </div>
                                      </div>
                                    </div>
                                    <div className="card-timeline-btn-group">
                                      <div className="timeline-link">
                                        <span className="hide-txt">더보기</span>
                                        <i
                                          className="ico-arrow-link"
                                          aria-hidden="true"
                                        />
                                      </div>
                                    </div>
                                  </a>
                                  <div className="card-util">
                                    <span
                                      className="icon card"
                                      aria-hidden="true"
                                    />
                                    <span className="timeline-time">
                                      2시간 전
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* 날짜*/}
                          <div className="component-form-date">
                            <button
                              className="btn-timeline-calendarview ui-calendar"
                              type="button"
                            >
                              어제, 02월 22일 화
                              <span className="hide-txt">달력</span>
                              <i
                                className="ico-triangle-calendar"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                          {/* 날짜별 데이터*/}
                          <div className="section-component">
                            <div className="component-card">
                              <div className="card-timeline-layout-group">
                                <div className="card-timeline-group">
                                  <a
                                    className="card-timeline-contents-group"
                                    href="#none"
                                  >
                                    <div className="card-timeline-contents">
                                      <div className="card-timeline-tit">
                                        출금예정 1,000,000원 자동납부
                                      </div>
                                      <div className="card-timeline-data">
                                        <div className="timeline-txt">
                                          BC직원식당 | 체크카드(0000) 02/01
                                        </div>
                                        <div className="timeline-txt">
                                          출금가능액 1,000,000원
                                        </div>
                                      </div>
                                    </div>
                                    <div className="card-timeline-btn-group">
                                      <div className="timeline-link">
                                        <span className="hide-txt">더보기</span>
                                        <i
                                          className="ico-arrow-link"
                                          aria-hidden="true"
                                        />
                                      </div>
                                    </div>
                                  </a>
                                  <div className="card-util">
                                    <span
                                      className="icon deposit"
                                      aria-hidden="true"
                                    />
                                    <span className="timeline-time">09:41</span>
                                  </div>
                                </div>
                                <div className="card-timeline-group unconfirmed">
                                  <a
                                    className="card-timeline-contents-group"
                                    href="#none"
                                  >
                                    <div className="card-timeline-contents">
                                      <div className="card-timeline-tit">
                                        신용관리 정보가 변경되었습니다. 변동내역을
                                        확인해 보세요.
                                      </div>
                                    </div>
                                    <div className="card-timeline-btn-group">
                                      <div className="timeline-link">
                                        <span className="hide-txt">더보기</span>
                                        <i
                                          className="ico-arrow-link"
                                          aria-hidden="true"
                                        />
                                      </div>
                                    </div>
                                  </a>
                                  <div className="card-util">
                                    <span
                                      className="icon etc"
                                      aria-hidden="true"
                                    />
                                    <span className="timeline-time">11:11</span>
                                  </div>
                                </div>
                                <div className="card-timeline-group">
                                  <a
                                    className="card-timeline-contents-group"
                                    href="#none"
                                  >
                                    <div className="card-timeline-contents">
                                      <div className="card-timeline-tit">
                                        케이뱅크 활동에 따라 다양한 정보를
                                        제공해드려요.
                                      </div>
                                      <div className="card-timeline-data line">
                                        <div className="timeline-txt">
                                          알림 설정하기
                                        </div>{" "}
                                        {/* FETASK-585 2023-02-07 타임라인 피드 => 알림으로 수정*/}
                                        <i
                                          className="ico-arrow-link"
                                          aria-hidden="true"
                                        />
                                      </div>
                                    </div>
                                    <div className="card-timeline-btn-group">
                                      <div className="timeline-link">
                                        <span className="hide-txt">더보기</span>
                                      </div>
                                    </div>
                                  </a>
                                  <div className="card-util">
                                    <span
                                      className="icon etc"
                                      aria-hidden="true"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* 날짜*/}
                          <div className="component-form-date">
                            <button className="btn-timeline-calendarview ui-calendar">
                              02월 21일 월<span className="hide-txt">달력</span>
                              <i
                                className="ico-triangle-calendar"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                          {/* 날짜별 데이터*/}
                          <div className="section-component">
                            <div className="component-card">
                              <div className="card-timeline-layout-group">
                                <div className="card-timeline-list-group">
                                  <div className="card-timeline-group">
                                    <a
                                      className="card-timeline-contents-group"
                                      href="#none"
                                    >
                                      <div className="card-timeline-contents">
                                        <div className="card-timeline-tit">
                                          출금예정 1,000,000원 자동납부
                                        </div>
                                        <div className="card-timeline-data">
                                          <div className="timeline-txt">
                                            BC직원식당 | 체크카드(0000) 02/01
                                          </div>
                                          <div className="timeline-txt">
                                            출금가능액 1,000,000원
                                          </div>
                                        </div>
                                      </div>
                                      <div className="card-timeline-btn-group">
                                        <div className="timeline-link">
                                          <span className="hide-txt">더보기</span>
                                          <i
                                            className="ico-arrow-link"
                                            aria-hidden="true"
                                          />
                                        </div>
                                      </div>
                                    </a>
                                    <div className="card-util">
                                      <span
                                        className="icon deposit"
                                        aria-hidden="true"
                                      />
                                      <span className="timeline-time">09:41</span>
                                    </div>
                                  </div>
                                  <div className="card-timeline-group">
                                    <a
                                      className="card-timeline-contents-group"
                                      href="#none"
                                    >
                                      <div className="card-timeline-contents">
                                        <div className="card-timeline-tit">
                                          출금예정 1,000,000원 자동납부
                                        </div>
                                        <div className="card-timeline-data">
                                          <div className="timeline-txt">
                                            BC직원식당 | 체크카드(0000) 02/01
                                          </div>
                                          <div className="timeline-txt">
                                            출금가능액 1,000,000원
                                          </div>
                                        </div>
                                      </div>
                                      <div className="card-timeline-btn-group">
                                        <div className="timeline-link">
                                          <span className="hide-txt">더보기</span>
                                          <i
                                            className="ico-arrow-link"
                                            aria-hidden="true"
                                          />
                                        </div>
                                      </div>
                                    </a>
                                    <div className="card-util">
                                      <span
                                        className="icon deposit"
                                        aria-hidden="true"
                                      />
                                      <span className="timeline-time">09:41</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* 안내사항*/}
                          <div className="component-text">
                            <div className="timeline-storage-info">
                              <div className="txt">
                                알림은 90일 동안 보관됩니다.
                              </div>{" "}
                              {/* FETASK-585 2023-02-07 타임라인 정보는 => 알림은으로 수정*/}
                            </div>
                          </div>
                          {/*알림 내역없음*/}
                          <div className="component-nodata no-space">
                            <div className="nodata-statement-group">
                              <p className="txt-lv01">
                                케이뱅크 활동에 따라 다양한
                                <br /> 정보를 제공해드려요.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 홈_전체메뉴*/}
                  <div
                    className="main-tab-content04"
                    id="content_4"
                    style={{ display: "none" }}
                  >
                    {/* 스켈레톤 div. 필요한 영역에 넣어서 사용해 보세요
                <div class="component-skeleton-sub">
                  <span class="hide-txt">로딩중</span>
                  <div class="skeleton-menu-group renewal skeleton-animation-all" aria-hidden="true">
                    <div class="skeleton-header">
                      <div class="skeleton-h-item00"></div>
                    </div>
                    <div class="skeleton-item00"></div>
                    <div class="skeleton-item-group-01">
                      <div class="skeleton-item01-group">
                        <div class="skeleton-item01">
                          <div class="skeleton-item01-img"></div>
                          <div class="skeleton-item01-txt"></div>
                        </div>
                        <div class="skeleton-item01">
                          <div class="skeleton-item01-img"></div>
                          <div class="skeleton-item01-txt"></div>
                        </div>
                        <div class="skeleton-item01">
                          <div class="skeleton-item01-img"></div>
                          <div class="skeleton-item01-txt"></div>
                        </div>
                        <div class="skeleton-item01">
                          <div class="skeleton-item01-img"></div>
                          <div class="skeleton-item01-txt"></div>
                        </div>
                      </div>
                      <div class="skeleton-item02-group">
                        <div class="skeleton-item02"></div>
                      </div>
                    </div>
                    <div class="skeleton-item03-group">
                      <div class="skeleton-item03-item"></div>
                      <div class="skeleton-item03-item"></div>
                      <div class="skeleton-item03-item"></div>
                      <div class="skeleton-item03-item"></div>
                      <div class="skeleton-item03-item"></div>
                      <div class="skeleton-item03-item"></div>
                    </div>
                  </div>
                </div>*/}
                    <div className="main-tab-content-inner">
                      <div className="container-component">
                        {/* 헤더 */}
                        <div className="component-header">
                          <div className="home-header-group">
                            <div className="home-header-col">
                              <div className="home-header-tit">
                                <span className="home-tit">전체</span>
                              </div>
                            </div>
                            <div className="home-header-col">
                              <button className="btn-home-user" type="button">
                                <span className="txt">유경</span>
                                {/* 프로필사진일 때 이름 삭제 */}
                                {/* <img class="img" src="./프로필사진" alt="프로필사진"> */}
                              </button>
                              <button className="btn-home-set" type="button">
                                <span className="hide-txt">세팅</span>
                                <i className="ico-setting" aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* 검색 */}
                        <div className="component-search">
                          <div className="input-txt-group main ui-input">
                            <input
                              type="text"
                              className="ui-text-del"
                              id="itx0001"
                              placeholder="무엇을 도와드릴까요?"
                            />
                            <button
                              className="btn-search-input right"
                              type="button"
                            >
                              <span className="hide-txt">검색</span>
                              <i
                                className="ico-search-input"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                        {/* 퀵메뉴링크 */}
                        <div className="component-link-quick">
                          <div className="quick-menu-group">
                            <div className="quick-link-group">
                              {/* <a>메뉴가 1~3개일 때 */}
                              <a className="btn-quick-link" href="#none">
                                <i className="ico-quick">
                                  <img
                                    src="../../../../resource/img/mmk/main/ico_quick_cs.svg"
                                    alt=""
                                    aria-hidden="true"
                                  />
                                </i>
                                <span className="txt-quick-link">고객센터</span>
                              </a>
                              <a
                                className="btn-quick-link unconfirmed"
                                href="#none"
                              >
                                <i className="ico-quick">
                                  <img
                                    src="../../../../resource/img/mmk/main/ico_quick_security.svg"
                                    alt=""
                                    aria-hidden="true"
                                  />
                                </i>
                                <span className="txt-quick-link">인증/보안</span>
                              </a>
                              <a className="btn-quick-link" href="#none">
                                <i className="ico-quick">
                                  <img
                                    src="../../../../resource/img/mmk/main/ico_quick_announce.svg"
                                    alt=""
                                    aria-hidden="true"
                                  />
                                </i>
                                <span className="txt-quick-link">공지사항</span>
                                <span className="unconfirmed">
                                  <span className="hide-txt">알림</span>
                                </span>
                              </a>
                            </div>
                          </div>
                          <div className="quick-menu-group">
                            <div className="quick-link-group left">
                              {/* <a>메뉴가 4개 이상일 때 left 클래스 */}
                              <a className="btn-quick-link" href="#none">
                                <i className="ico-quick">
                                  <img
                                    src="../../../../resource/img/mmk/main/ico_quick_cs.svg"
                                    alt=""
                                    aria-hidden="true"
                                  />
                                </i>
                                <span className="txt-quick-link">고객센터</span>
                              </a>
                              <a
                                className="btn-quick-link unconfirmed"
                                href="#none"
                              >
                                <i className="ico-quick">
                                  <img
                                    src="../../../../resource/img/mmk/main/ico_quick_security.svg"
                                    alt=""
                                    aria-hidden="true"
                                  />
                                </i>
                                <span className="txt-quick-link">인증/보안</span>
                              </a>
                              <a className="btn-quick-link" href="#none">
                                <i className="ico-quick">
                                  <img
                                    src="../../../../resource/img/mmk/main/ico_quick_announce.svg"
                                    alt=""
                                    aria-hidden="true"
                                  />
                                </i>
                                <span className="txt-quick-link">공지사항</span>
                                <span className="unconfirmed">
                                  <span className="hide-txt">알림</span>
                                </span>
                              </a>
                              <a className="btn-quick-link" href="#none">
                                <i className="ico-quick">
                                  <img
                                    src="../../../../resource/img/mmk/main/ico_quick_benefit.svg"
                                    alt=""
                                    aria-hidden="true"
                                  />
                                </i>
                                <span className="txt-quick-link">혜택</span>
                                <span className="unconfirmed">
                                  <span className="hide-txt">알림</span>
                                </span>
                              </a>
                              <a className="btn-quick-link" href="#none">
                                <i className="ico-quick">
                                  <img
                                    src="../../../../resource/img/mmk/main/ico_quick_announce.svg"
                                    alt=""
                                    aria-hidden="true"
                                  />
                                </i>
                                <span className="txt-quick-link">공지사항</span>
                                <span className="unconfirmed">
                                  <span className="hide-txt">알림</span>
                                </span>
                              </a>
                              <a className="btn-quick-link" href="#none">
                                <i className="ico-quick">
                                  <img
                                    src="../../../../resource/img/mmk/main/ico_quick_benefit.svg"
                                    alt=""
                                    aria-hidden="true"
                                  />
                                </i>
                                <span className="txt-quick-link">혜택</span>
                                <span className="unconfirmed">
                                  <span className="hide-txt">알림</span>
                                </span>
                              </a>
                            </div>
                            <div className="quick-link-row">
                              <a className="link-list" href="#none">
                                <div className="item-icon">
                                  <img
                                    src="../../../../resource/img/mmk/main/ico_quick_account.svg"
                                    alt=""
                                    aria-hidden="true"
                                  />
                                </div>
                                <div className="item-text">내 자산보기</div>
                                <i className="ico-arrow-sbr" aria-hidden="true" />
                              </a>
                            </div>
                            <div className="quick-link-row">
                              <a className="link-list" href="#none">
                                <div className="item-text">
                                  오아시스마켓 장보기
                                </div>
                                <div className="item-option">
                                  최대 3% 적립 혜택
                                </div>
                                <i className="ico-arrow-sbr" aria-hidden="true" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="component-link-banner">
                          <a className="banner-group" href="#none">
                            <img
                              src="../../../../resource/img/mmk/temp/menu_banner.png"
                              alt="친구를 초대하면 너도 나도 5천원!"
                            />
                          </a>
                        </div>
                        {/* 최근방문 */}
                        <div className="component-link-list">
                          <div className="title-group">
                            <div className="title-icon">
                              <img
                                src="../../../../resource/img/mmk/main/ico_menu_money.svg"
                                alt=""
                                aria-hidden="true"
                              />
                            </div>
                            <div className="title-field-01">최근 방문</div>
                          </div>
                          <ul className="link-list-group">
                            <li className="link-list">
                              <a className="item-group" href="#none">
                                <div className="item-icon">
                                  <img
                                    src="../../../../resource/img/mmk/main/ico_menu_money.svg"
                                    alt=""
                                    aria-hidden="true"
                                  />
                                </div>
                                <div className="item-text">오늘의 쿠폰</div>
                              </a>
                              <i className="ico-pin-on" aria-hidden="true" />
                            </li>
                            <li className="link-list">
                              <a className="item-group" href="#none">
                                <div className="item-icon">
                                  <img
                                    src="../../../../resource/img/mmk/main/ico_menu_money.svg"
                                    alt=""
                                    aria-hidden="true"
                                  />
                                </div>
                                <div className="item-text">
                                  자동이체 등록/조회하기
                                </div>
                              </a>
                              <i className="ico-pin-off" aria-hidden="true" />
                            </li>
                            <li className="link-list">
                              <a className="item-group" href="#none">
                                <div className="item-icon">
                                  <img
                                    src="../../../../resource/img/mmk/main/ico_menu_money.svg"
                                    alt=""
                                    aria-hidden="true"
                                  />
                                </div>
                                <div className="item-text">
                                  매일 10만원이 터지는 행운상자
                                </div>
                              </a>
                              <i className="ico-pin-off" aria-hidden="true" />
                            </li>
                            <li className="link-list">
                              <a className="item-group" href="#none">
                                <div className="item-icon">
                                  <img
                                    src="../../../../resource/img/mmk/main/ico_menu_money.svg"
                                    alt=""
                                    aria-hidden="true"
                                  />
                                </div>
                                <div className="item-text">
                                  휴대폰번호를 계좌번호로 쓰기
                                </div>
                              </a>
                              <i className="ico-pin-off" aria-hidden="true" />
                            </li>
                          </ul>
                        </div>
                        {/* 생활 */}
                        <div className="component-link-list">
                          <div className="title-group">
                            <div className="title-icon">
                              <img
                                src="../../../../resource/img/mmk/main/ico_calendar_check.svg"
                                alt=""
                                aria-hidden="true"
                              />
                            </div>
                            <div className="title-field-01">생활</div>
                          </div>
                          <div className="link-list-group left">
                            <a className="link-list" href="#none">
                              <div className="item-icon">
                                <img
                                  src="../../../../resource/img/mmk/main/ico_calendar_check.svg"
                                  alt=""
                                  aria-hidden="true"
                                />
                              </div>
                              <div className="item-text">오늘의 쿠폰</div>
                              <div className="item-option">
                                배달의 민족 브랜드 추가
                              </div>
                              <div className="tag line-light">
                                <span className="txt">UP</span>
                              </div>
                            </a>
                            <a className="link-list" href="#none">
                              <div className="item-icon">
                                <img
                                  src="../../../../resource/img/mmk/main/ico_calendar_check.svg"
                                  alt=""
                                  aria-hidden="true"
                                />
                              </div>
                              <div className="item-text">쿠팡 와우 무료혜택</div>
                              <div className="tag line-light">
                                <span className="txt">이벤트</span>
                              </div>
                            </a>
                            <a className="link-list" href="#none">
                              <div className="item-icon">
                                <img
                                  src="../../../../resource/img/mmk/main/ico_calendar_check.svg"
                                  alt=""
                                  aria-hidden="true"
                                />
                              </div>
                              <div className="item-text">오늘의 생활시세</div>
                              <div className="tag lv-01">
                                <span className="txt">NEW</span>
                              </div>
                              <div className="tag line-light">
                                <span className="txt">이벤트</span>
                              </div>
                            </a>
                            <a className="link-list" href="#none">
                              <div className="item-icon">
                                <img
                                  src="../../../../resource/img/mmk/main/ico_calendar_check.svg"
                                  alt=""
                                  aria-hidden="true"
                                />
                              </div>
                              <div className="item-text">오아시스마켓 장보기</div>
                              <div className="item-option">최대 3% 적립 혜택</div>
                            </a>
                            <a className="link-list" href="#none">
                              <div className="item-icon">
                                <img
                                  src="../../../../resource/img/mmk/main/ico_calendar_check.svg"
                                  alt=""
                                  aria-hidden="true"
                                />
                              </div>
                              <div className="item-text">
                                이체 받고 현금 또 받기
                              </div>
                              <div className="tag line-light">
                                <span className="txt">이벤트</span>
                              </div>
                            </a>
                          </div>
                        </div>
                        {/* 인기 */}
                        <div className="component-link-list">
                          <div className="title-group">
                            <div className="title-field-01">인기</div>
                          </div>
                          <div className="link-list-group left">
                            <a className="link-list" href="#none">
                              <div className="item-text">내 신용관리</div>
                            </a>
                            <a className="link-list" href="#none">
                              <div className="item-text">
                                친구에게 생활통장 선물하기
                              </div>
                              <div className="tag line-light">
                                <span className="txt">이벤트</span>
                              </div>
                            </a>
                            <a className="link-list" href="#none">
                              <div className="item-text">
                                매일 10만원이 터지는 행운상자
                              </div>
                            </a>
                            <a className="link-list" href="#none">
                              <div className="item-text">
                                부자되는 모닝 루틴, 머니톡
                              </div>
                            </a>
                          </div>
                        </div>
                        {/* 송금 */}
                        <div className="component-link-list">
                          <div className="title-group">
                            <div className="title-field-01">송금</div>
                          </div>
                          <div className="link-list-group left">
                            <a className="link-list" href="#none">
                              <div className="item-text">이체하기</div>
                            </a>
                            <a className="link-list" href="#none">
                              <div className="item-text">이체내역</div>
                            </a>
                            <a className="link-list" href="#none">
                              <div className="item-text">이체한도 변경</div>
                            </a>
                            <a className="link-list" href="#none">
                              <div className="item-text">연락처로 돈보내기</div>
                            </a>
                            <a className="link-list" href="#none">
                              <div className="item-text">해외송금</div>
                            </a>
                          </div>
                        </div>
                        {/* 계좌 */}
                        <div className="component-link-list">
                          <div className="title-group">
                            <div className="title-field-01">계좌</div>
                          </div>
                          <div className="link-list-group left">
                            <a className="link-list" href="#none">
                              <div className="item-text">내 계좌숨기기</div>
                            </a>
                            <a className="link-list" href="#none">
                              <div className="item-text">
                                내 계좌/카드 모두찾기
                              </div>
                            </a>
                            <a className="link-list" href="#none">
                              <div className="item-text">
                                자동이체 등록/조회하기
                              </div>
                            </a>
                            <a className="link-list" href="#none">
                              <div className="item-text">
                                자동납부 신청내역 조회하기
                              </div>
                            </a>
                            <a className="link-list" href="#none">
                              <div className="item-text">
                                휴대폰번호를 계좌번호로 쓰기
                              </div>
                            </a>
                          </div>
                        </div>
                        {/* 카드 */}
                        <div className="component-link-list">
                          <div className="title-group">
                            <div className="title-field-01">카드</div>
                          </div>
                          <div className="link-list-group left">
                            <a className="link-list" href="#none">
                              <div className="item-text">체크카드 만들기</div>
                            </a>
                            <a className="link-list" href="#none">
                              <div className="item-text">
                                제휴 신용카드 만들기
                              </div>
                            </a>
                          </div>
                        </div>
                        {/* 재테크 */}
                        <div className="component-link-list">
                          <div className="title-group">
                            <div className="title-field-01">재테크</div>
                          </div>
                          <div className="link-list-group left">
                            <a className="link-list" href="#none">
                              <div className="item-text">우리집 변동알림</div>
                            </a>
                            <a className="link-list" href="#none">
                              <div className="item-text">가상자산 시세조회</div>
                            </a>
                            <a className="link-list" href="#none">
                              <div className="item-text">
                                제휴 증권사 계좌만들기
                              </div>
                            </a>
                            <a className="link-list" href="#none">
                              <div className="item-text">주식거래</div>
                            </a>
                            <a className="link-list" href="#none">
                              <div className="item-text">공모주 메이트</div>
                            </a>
                          </div>
                        </div>
                        {/* 편의 */}
                        <div className="component-link-list">
                          <div className="title-group">
                            <div className="title-field-01">편의</div>
                          </div>
                          <div className="link-list-group left">
                            <a className="link-list" href="#none">
                              <div className="item-text">케이뱅크페이</div>
                            </a>
                            <a className="link-list" href="#none">
                              <div className="item-text">공과금 내기</div>
                            </a>
                            <a className="link-list" href="#none">
                              <div className="item-text">카드 없이 현금찾기</div>
                            </a>
                          </div>
                        </div>
                        {/* 사장님 */}
                        <div className="component-link-list">
                          <div className="title-group">
                            <div className="title-field-01">사장님</div>
                          </div>
                          <div className="link-list-group left">
                            <a className="link-list" href="#none">
                              <div className="item-text">사장님 신용대출</div>
                            </a>
                            <a className="link-list" href="#none">
                              <div className="item-text">사장님 전용 혜택</div>
                              <div className="tag line-light">
                                <span className="txt">이벤트</span>
                              </div>
                            </a>
                            <a className="link-list" href="#none">
                              <div className="item-text">우리가게 매출관리</div>
                            </a>
                          </div>
                        </div>
                        {/* 하이틴(Hi teen) */}
                        <div className="component-link-list">
                          <div className="title-group">
                            <div className="title-field-01">하이틴(Hi teen)</div>
                          </div>
                          <div className="link-list-group left">
                            <a className="link-list" href="#none">
                              <div className="item-text">중고생 전용혜택</div>
                            </a>
                            <a className="link-list" href="#none">
                              <div className="item-text">
                                친구 초대하고 선물받기
                              </div>
                              <div className="tag line-light">
                                <span className="txt">이벤트</span>
                              </div>
                            </a>
                            <a className="link-list" href="#none">
                              <div className="item-text">하이틴 카드 만들기</div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 홈 메뉴 네비게이션*/}
                {/* s: 20220419 수정 (새알림 아이콘 추가 new-info)*/}
                {/* s: 20230207 리뉴얼 홈탭 정기배포 적용 */}
                {/* s: SR-2014 2022-10-25 로티이미지 추가로 인한 마크업 수정 */}
                <BottomBar tab={"home"}></BottomBar>

                {/* e: 20230207 리뉴얼 홈탭 정기배포 적용 */}
                {/* e: 20220419 수정 (새알림 아이콘 추가 new-info)*/}
                {/* s: 20220427 상담원 답변영역 추가*/}
                {/* s: 20220426 진행중 챗봇 버튼 영역*/}
                {/* s: 20220518 텍스트 내용 수정*/}
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
                {/* e: 20220518 텍스트 내용 수정*/}
                {/* e: 20220426 진행중 챗봇 버튼 영역*/}
                {/* e: 20220427 상담원 답변영역 추가*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
);
}

export default home;
