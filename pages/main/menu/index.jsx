import BottomBar from '@/components/Main/BottomBar'
import Link from 'next/link'
import React, { useEffect } from 'react'
import useSWR from "swr";
import fetcher from "@/pages/api/fetch.js";
function menu() {

  const uri = "/ib20/act/PBKMAN0000002300A";
  const { data, error, isLoading } = useSWR(uri, fetcher);
  let groupedData = [];
  
  useEffect(() => {
    data?._msg_._body_?.savedMenuLists.map((item)=>{
      const category = item.CATEGORY_SEQ;
      if(!groupedData[category]){
        groupedData[category] = [];
      }
      groupedData[category].push(item);
    });
    console.log(`#### groupedData : ` + JSON.stringify(groupedData));
  },[data]);

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
                  <div
                    className="main-tab-content04"
                    id="content_4" 
                  >
                    <div className="main-tab-content-inner">
                      <div className="container-component">
                        <div className="component-header">
                          <div className="home-header-group">
                            <div className="home-header-col">
                              <div className="home-header-tit">
                                <span className="home-tit">전체</span>
                              </div>
                            </div>
                            <div className="home-header-col">
                              <button className="btn-home-user" type="button">
                                <span className="txt">인조</span>
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

                        <div className="component-link-quick">

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
                                <div className="item-text">내 계좌 전체보기</div>
                                <i className="ico-arrow-sbr" aria-hidden="true" />
                              </a>
                            </div>
                            <div className="quick-link-row">
                              <a className="link-list" href="#none">
                                <div className="item-text">
                                  내 신용관리
                                </div>
                                <div className="item-option">
                                  지금 내 신용점수는?
                                </div>
                                <i className="ico-arrow-sbr" aria-hidden="true" />
                              </a>
                            </div>
                          </div>
                        </div>


                      {groupedData?.map(
                        (item) =>{
                          if(item.MN_ORDER === 1){
                            return 
                            <>
                            <div className="component-link-list">
                            <div className="title-group">
                              <div className="title-icon">
                                {/* <img
                                  src="../../../../resource/img/mmk/main/ico_menu_money.svg"
                                  alt=""
                                  aria-hidden="true"
                                /> */}
                              </div>
                              <div className="title-field-01">{decodeURIComponent(item.MN_NM).replace(/\+/g, " ")}</div>
                            </div>
                            </div>
                            </>
                          }else{

                          }

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
                      })}
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
                <BottomBar tab={"menu"}></BottomBar>
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
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default menu