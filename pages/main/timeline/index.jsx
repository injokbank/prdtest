import Link from "next/link";
import React from "react";
import BottomBar from '@/components/Main/BottomBar'
import useSWR from "swr";
import fetcher from "@/pages/api/fetch.js";

function timeline() {
  const uri = "/ib20/act/PBKMAN0000002200A";
  const { data, error, isLoading } = useSWR(uri, fetcher);

  return (
    <>
    <div className="page-inner-scroll">
      <div className="main-tab-container">
        {/* 홈_알림*/}
        <div
          className="main-tab-content03"
        >
          <div className="main-tab-content-inner">
            <div className="container-component timeline-20220609">
              <div className="component-hea der">
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
                {/* <div className="component-banner">
                  <div className="home-timeline-banner-group">
                    <a className="timeline-banner-item" href="#none">
                      <img
                        src="../../../../resource/img/mmk/main/shopinshop_event_3.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div> */}
                {/* e: 20220427 배너영역 추가*/}
                {/* 날짜*/}
                {data?._msg_._body_.pushList.map(
                            (item) =><>
                {item.displayDate && <div className="component-form-date">
                  <button
                    className="btn-timeline-calendarview ui-calendar"
                    type="button"
                  >
                    {decodeURIComponent(item.displayDate).replace(/\+/g, " ")}
                    <span className="hide-txt">달력</span>
                    <i
                      className="ico-triangle-calendar"
                      aria-hidden="true"
                    />
                  </button>
                </div>}

                <div className="section-component">
                  <div className="component-card">
                    <div className="card-timeline-layout-group">
{/* 
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
                      </div> */}

                      <div className="card-timeline-group unconfirmed">
                        <a
                          className="card-timeline-contents-group"
                          href="#none"
                        >
                          <div className="card-timeline-contents">
                            {item.msgTitle && 
                            <div className="card-timeline-tit">
                              {decodeURIComponent(item.msgTitle).replace(/\+/g, " ")}
                            </div>
                            }
                            <div className="card-timeline-data">
                              <div className="timeline-txt">
                              {decodeURIComponent(item.msgCntnt).replace(/\+/g, " ")}
                              </div>
                              {/* <div className="timeline-txt">
                                출금가능액 1,000,000원
                              </div> */}
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
                            className={`icon ${item.type}`}
                            aria-hidden="true"
                          />
                          <span className="timeline-time">{decodeURIComponent(item.time).replace(/\+/g, " ")}</span>
                        </div>
                      </div>
                      {/* <div className="card-timeline-group unconfirmed">
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
                      </div> */}
                    </div>
                  </div>
                </div>
                </>
                )}

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
    </>
  );
}

export default timeline;
