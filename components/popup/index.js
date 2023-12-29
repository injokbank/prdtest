// Popup.js

import React from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import styles from "./styles.module.css";
const Popup = ({ isOpen, onClose, item }) => {
  const controls = useAnimation();
  const popupVariants = {
    hidden: { y: 100, opacity: 0 }, // 초기 상태: 아래로 숨겨져 있음
    visible: { y: 0, opacity: 1 }, // 최종 상태: 위로 올라오며 나타남
  };

  const popupTransition = {
    duration: 0.2, // 애니메이션 지속 시간 (초)
    ease: "easeIn", // 이징 함수, 필요에 따라 수정 가능
  };
  return (
    <>
      <motion.div
        className={styles["bottom-sheet-overlay"]}
        //   initial={{ opacity: 0 }}
        //   animate={{ opacity: isOpen ? 1 : 0 }}4
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={popupVariants}
        transition={popupTransition}
      >
        <div className="popup-dialog ui-popup ui-bottom">
          <div className="popup-section">
            <div className="popup-group">
              <div className="popup-content">
                <div className="popup-inner">
                  <div
                    className="admin-popup-content type-e1"
                    // onclick="onHalfPopupBannerClick(this, '/ib20/mnu/CMMNOT020100?ib20_wc=CMMNOT0201000100V:CMMNOT0201000200V&evntId=1233&click=hhb_home&team=marketing&bid=2127', '2127')"
                  >
                    <div className="img-wrap">
                      <img src="/resource/img/bim/1123_christmas_mainPOP_A.png" alt="" />
                    </div>
                    <div className="txt-wrap">
                      <span className="desc first">매일 최대 1만원 🎄</span> <span className="tit first">오늘 출석하고</span> <span className="tit second">당첨 금액 확인해보세요</span>
                      <span className="desc second" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="popup-footer">
                <div className="btn-wrap">
                  <button
                    className="btn-week-close"
                    type="button"
                    // onclick="onHalfPopupCloseOneDayClick(this, '/ib20/mnu/CMMNOT020100?ib20_wc=CMMNOT0201000100V:CMMNOT0201000200V&evntId=1233&click=hhb_home&team=marketing&bid=2127', '2127')"
                  >
                    <span className="txt-lv01">이 혜택 오늘 안보기</span>
                  </button>
                  <button
                    className="btn-banner-close"
                    type="button"
                    // onclick="onHalfPopupCloseButtonClick(this, '/ib20/mnu/CMMNOT020100?ib20_wc=CMMNOT0201000100V:CMMNOT0201000200V&evntId=1233&click=hhb_home&team=marketing&bid=2127', '2127')"
                  >
                    <span className="txt-lv01 bold">닫기</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={styles["bottom-sheet"]} onClick={onClose}>
          <button className={styles["close-button"]} onClick={onClose}>
            닫기
          </button>
          <div className={styles["popup-content"]}>
            <div className="component-list-infobox">
              <div className="list-infobox-group">
                <ul className="list-row">
                  <li className="list-item">
                    <dl className="item-box">
                      <dt className="area-term">거래일시</dt>
                      <dd className="area-desc">
                        {item.txDt} {item.txHms}
                      </dd>
                    </dl>
                  </li>
                  <li className="list-item">
                    <dl className="item-box">
                      <dt className="area-term">거래구분</dt>
                      <dd className="area-desc">{item.whdrwlPsbkCntnt}</dd>
                    </dl>
                  </li>
                  <li className="list-item">
                    <dl className="item-box">
                      <dt className="area-term">거래금액</dt>
                      <dd className="area-desc">{Number(item.txAmt)}원</dd>
                    </dl>
                  </li>
                  <li className="list-item">
                    <dl className="item-box">
                      <dt className="area-term">계좌잔액</dt>
                      <dd className="area-desc">{Number(item.txAfBal)}원</dd>
                    </dl>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
      </motion.div>
    </>
    // <motion.div className="popup" variants={popupVariants} initial="hidden" animate={isOpen ? "visible" : "hidden"}>
    //    <div className={styles["popup-overlay"]}>
    //     <div className={styles["popup-container"]}>
    //       <button className={styles["close-button"]} onClick={onClose}>
    //         닫기
    //       </button>
    //       <div className={styles["popup-content"]}>
    //         <p>안녕하세요! 이것은 팝업입니다.</p>
    //       </div>
    //     </div>
    //   </div>
    // </motion.div>
  );
};

export default Popup;
