import Link from "next/link";
import React from "react";
import BottomBar from '@/components/Main/BottomBar'

function timeline() {
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
                  {/* 홈_알림*/}
                  <div
                    className="main-tab-content03"
                    id="content_3"
                    
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
                </div>

                <BottomBar tab={"timeline"}></BottomBar>
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

export default timeline;
