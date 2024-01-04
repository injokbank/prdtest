import React, { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";

const MainLayout = ({ children }) => {
  return (
    <div id="wrap-mmk">
      <div id="content-mmk">
        <div id="page-popup-widget">
          <div className="kbank-page-container ui-widget">
            <div className="kbank-page-wrapper">
              <div className="kbank-page-PBKMAN0000000400S_M01 ui-kbank-page-control activeSlide">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
