import Link from "next/link";
import Script from "next/script";
import React from "react";
import BottomBar from '@/components/Main/BottomBar'

function event() {
  return (
    <>
    <div id="wrap-mmk">

    <div id="content-mmk">
      <div id="page-popup-widget">
        <div className="kbank-page-container ui-widget">
          <div className="kbank-page-wrapper">
            <div className="kbank-page-PBKMAN0000000400S_M01 ui-kbank-page-control activeSlide">
              <div className="page-inner-scroll">
                <div className="main-tab-container">
                  {/* 홈_상품 FETASK-364 2023-01-03 홈_추천 => 홈_상품으로 수정 */}
                  <div
                    className="main-tab-content02"
                    id="content_2"
                    
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
                </div>
                {/* 홈 메뉴 네비게이션*/}
                {/* s: 20220419 수정 (새알림 아이콘 추가 new-info)*/}
                {/* s: 20230207 리뉴얼 홈탭 정기배포 적용 */}
                {/* s: SR-2014 2022-10-25 로티이미지 추가로 인한 마크업 수정 */}
                <BottomBar tab={"event"}></BottomBar>
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

export default event;
