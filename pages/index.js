import React from "react";
import Link from "next/link";

const test = () => {
  return (
    <>
      <div class="content type-renewal">
        <div class="component-product-list">
          <div class="title-group">
            <div
              class="title-field-page"
              style={{
                paddingTop: "30px",
              }}
            >
              테스트
            </div>
          </div>
          <div class="main-tab-container">
            <div class="main-tab-content">
              <div class="container-component frm-prd pb0">
                <div class="product-list-group">
                  <ul>
                    <li>
                      <a href="https://m.kbanknow.com/ib20/mnu/MWBMAN020000" className="tap-link">
                        <em>
                          운영중인 모바일웹 상품 페이지<span>기존 앱 호출하기</span>
                        </em>
                      </a>
                    </li>
                    <li>
                      <Link href="/keepSession">
                        <em>
                          운영 세션을 유지하기 위해 setInterval 하기
                          <span>sesion 유지 페이지</span>
                        </em>
                      </Link>
                    </li>
                    <li>
                      <Link href="/trnsList/susin">
                        <em>
                          운영중인 css를 활용하여 컴포넌트 만들기
                          <span>입출금 거래내역 페이지</span>
                        </em>
                      </Link>
                    </li>
                    <li>
                      <Link href="/main/home">
                        <em>
                          운영중인 html로 Home 만들기
                          <span>my Home 페이지</span>
                        </em>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default test;
