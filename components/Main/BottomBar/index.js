import Link from "next/link";
import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import home from "../../../public/datas/home-tab1.json";
import event from "../../../public/datas/home-tab2.json";
import timeline from "../../../public/datas/home-tab3.json";
import menu from "../../../public/datas/home-tab4.json";

const BottomBar = ({ tab }) => {
  console.log(`bottomBar tab called : ` + tab);
  const [showLottie, setShowLottie] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLottie(false);
    }, 900); // 5초 후에 자동으로 전환

    return () => clearTimeout(timer);
  }, []); // componentDidMount 시에만 실행
  var animationData = tab;
  const defaultOptions = [
    {
      loop: true, // 애니메이션 반복 여부
      autoplay: true, // 자동 재생 여부
      animationData: home, // 애니메이션 데이터
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice", // 애니메이션 배치 설정
      },
    },
    {
      loop: true, // 애니메이션 반복 여부
      autoplay: true, // 자동 재생 여부
      animationData: event, // 애니메이션 데이터
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice", // 애니메이션 배치 설정
      },
    },
    {
      loop: true, // 애니메이션 반복 여부
      autoplay: true, // 자동 재생 여부
      animationData: timeline, // 애니메이션 데이터
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice", // 애니메이션 배치 설정
      },
    },
    {
      loop: true, // 애니메이션 반복 여부
      autoplay: true, // 자동 재생 여부
      animationData: menu, // 애니메이션 데이터
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice", // 애니메이션 배치 설정
      },
    },
  ];

  return (
    <>
      <div className="component-btn fixed-bottom home-tab-menu new-home">
        <div className="btn-group">
          <Link className="btn-home-tab1" href="./home" id="home-tab1">
            <div className="btn-ico-item">
              {tab !== "home" && (
                <i className="btn-home-icon" id="" aria-hidden="true">
                  <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <g id="Artboard-Copy-21" transform="translate(-30.000000, -737.000000)">
                        <g id={3} transform="translate(0.000000, 728.000000)">
                          <g transform="translate(0.997340, 1.000000)">
                            <g id="Group-2" transform="translate(29.920213, 8.000000)">
                              <rect id="Rectangle-Copy-8" opacity="0.03" x={0} y={0} width={32} height={32} />
                              <path
                                d="M17,5 L26.2630176,11.4261467 C26.7265494,11.7646838 27,12.3002401 27,12.8695357 L27,26.2046899 C27,27.1962123 26.1859723,28 25.1818182,28 L20.7304021,28 C20.1796496,28 19.7325716,27.5546734 19.7304098,27.0039251 L19.7272727,26.2046899 L19.7272727,23.9197498 C19.7272727,22.7028814 18.5062311,21.7164146 17,21.7164146 C15.4937689,21.7164146 14.2727273,22.7028814 14.2727273,23.9197498 L14.2727273,23.9197498 L14.2727273,26.2046899 L14.2738559,26.9985783 C14.2746411,27.5508625 13.8275628,27.9992138 13.2752786,27.999999 C13.2748047,27.9999997 13.2743308,28 13.2738569,28 L8.81818182,28 C7.81402773,28 7,27.1962123 7,26.2046899 L7,12.8695357 C7,12.3002401 7.27345058,11.7646838 7.73698241,11.4261467 L17,5 Z"
                                id="Combined-Shape"
                                stroke="#141414"
                                strokeWidth={2}
                                fill="#FFFFFF"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </i>
              )}

              {tab === "home" &&
                (showLottie ? (
                  <Lottie options={defaultOptions[0]} height={32} width={32} />
                ) : (
                  <i class="btn-home-icon icon-lottie" aria-hidden="true" id="lottieHomeTab">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      width="32"
                      height="32"
                      preserveAspectRatio="xMidYMid meet"
                      style={{ width: "100%", height: "100%", transform: "translate3d(0px, 0px, 0px)" }}
                    >
                      <defs>
                        <clippath id="__lottie_element_17">
                          <rect width="32" height="32" x="0" y="0"></rect>
                        </clippath>
                      </defs>
                      <g clip-path="url(#__lottie_element_17)">
                        <g transform="matrix(1,0,0,1,0,0)" opacity="1" style={{ display: "block" }}>
                          <g opacity="1" transform="matrix(1,0,0,1,17,16.5)">
                            <path
                              fill="rgb(23,0,139)"
                              fill-opacity="1"
                              d=" M0,-11.5 C0,-11.5 9.262999534606934,-5.073999881744385 9.262999534606934,-5.073999881744385 C9.72700023651123,-4.735000133514404 10,-4.199999809265137 10,-3.630000114440918 C10,-3.630000114440918 10,9.704999923706055 10,9.704999923706055 C10,10.696000099182129 9.185999870300293,11.5 8.182000160217285,11.5 C8.182000160217285,11.5 3.7300000190734863,11.5 3.7300000190734863,11.5 C3.180000066757202,11.5 2.7330000400543213,11.055000305175781 2.7300000190734863,10.503999710083008 C2.7300000190734863,10.503999710083008 2.7269999980926514,9.704999923706055 2.7269999980926514,9.704999923706055 C2.7269999980926514,9.704999923706055 2.7269999980926514,7.420000076293945 2.7269999980926514,7.420000076293945 C2.7269999980926514,6.203000068664551 1.50600004196167,5.216000080108643 0,5.216000080108643 C-1.50600004196167,5.216000080108643 -2.7269999980926514,6.203000068664551 -2.7269999980926514,7.420000076293945 C-2.7269999980926514,7.420000076293945 -2.7269999980926514,9.704999923706055 -2.7269999980926514,9.704999923706055 C-2.7269999980926514,9.704999923706055 -2.7260000705718994,10.49899959564209 -2.7260000705718994,10.49899959564209 C-2.7249999046325684,11.050999641418457 -3.171999931335449,11.49899959564209 -3.7249999046325684,11.5 C-3.7249999046325684,11.5 -3.7260000705718994,11.5 -3.7260000705718994,11.5 C-3.7260000705718994,11.5 -8.182000160217285,11.5 -8.182000160217285,11.5 C-9.185999870300293,11.5 -10,10.696000099182129 -10,9.704999923706055 C-10,9.704999923706055 -10,-3.630000114440918 -10,-3.630000114440918 C-10,-4.199999809265137 -9.72700023651123,-4.735000133514404 -9.262999534606934,-5.073999881744385 C-9.262999534606934,-5.073999881744385 0,-11.5 0,-11.5z"
                            ></path>
                          </g>
                          <g opacity="1" transform="matrix(1,0,0,1,17,16.5)">
                            <path
                              stroke-linecap="butt"
                              stroke-linejoin="miter"
                              fill-opacity="0"
                              stroke-miterlimit="4"
                              stroke="rgb(23,0,139)"
                              stroke-opacity="1"
                              stroke-width="2"
                              d=" M0,-11.5 C0,-11.5 9.262999534606934,-5.073999881744385 9.262999534606934,-5.073999881744385 C9.72700023651123,-4.735000133514404 10,-4.199999809265137 10,-3.630000114440918 C10,-3.630000114440918 10,9.704999923706055 10,9.704999923706055 C10,10.696000099182129 9.185999870300293,11.5 8.182000160217285,11.5 C8.182000160217285,11.5 3.7300000190734863,11.5 3.7300000190734863,11.5 C3.180000066757202,11.5 2.7330000400543213,11.055000305175781 2.7300000190734863,10.503999710083008 C2.7300000190734863,10.503999710083008 2.7269999980926514,9.704999923706055 2.7269999980926514,9.704999923706055 C2.7269999980926514,9.704999923706055 2.7269999980926514,7.420000076293945 2.7269999980926514,7.420000076293945 C2.7269999980926514,6.203000068664551 1.50600004196167,5.216000080108643 0,5.216000080108643 C-1.50600004196167,5.216000080108643 -2.7269999980926514,6.203000068664551 -2.7269999980926514,7.420000076293945 C-2.7269999980926514,7.420000076293945 -2.7269999980926514,9.704999923706055 -2.7269999980926514,9.704999923706055 C-2.7269999980926514,9.704999923706055 -2.7260000705718994,10.49899959564209 -2.7260000705718994,10.49899959564209 C-2.7249999046325684,11.050999641418457 -3.171999931335449,11.49899959564209 -3.7249999046325684,11.5 C-3.7249999046325684,11.5 -3.7260000705718994,11.5 -3.7260000705718994,11.5 C-3.7260000705718994,11.5 -8.182000160217285,11.5 -8.182000160217285,11.5 C-9.185999870300293,11.5 -10,10.696000099182129 -10,9.704999923706055 C-10,9.704999923706055 -10,-3.630000114440918 -10,-3.630000114440918 C-10,-4.199999809265137 -9.72700023651123,-4.735000133514404 -9.262999534606934,-5.073999881744385 C-9.262999534606934,-5.073999881744385 0,-11.5 0,-11.5z"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </i>
                ))}
              <em>홈</em>
            </div>
            <span className="hide-txt select">선택됨</span>
          </Link>

          <Link href="./event" className="btn-home-tab2" id="home-tab2">
            <div className="btn-ico-item">
              {/* <span className="new-info">
              <span className="hide-txt">새알림</span>
            </span> */}
              {tab !== "event" && (
                <i className="btn-home-icon" aria-hidden="true">
                  <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <g id="Artboard-Copy-21" transform="translate(-124.000000, -736.000000)">
                        <g transform="translate(0.000000, 728.000000)">
                          <g transform="translate(94.747340, 0.000000)">
                            <g id="Group-3" transform="translate(29.920213, 8.000000)">
                              <rect id="Rectangle-Copy-8" fill="#FF0000" opacity={0} x={0} y={0} width={32} height={32} />
                              <g id="Group-4" transform="translate(5.000000, 5.000000)">
                                <rect id="Rectangle" stroke="#141414" strokeWidth={2} x={1} y={1} width={22} height={22} rx={6} />
                                <g id="Group-11" transform="translate(6.000000, 6.000000)" fill="#141414">
                                  <rect id="Rectangle" x={5} y={0} width={2} height={12} rx={1} />
                                  <path
                                    d="M6,0 C6.55228475,-1.01453063e-16 7,0.44771525 7,1 L7,11 C7,11.5522847 6.55228475,12 6,12 C5.44771525,12 5,11.5522847 5,11 L5,1 C5,0.44771525 5.44771525,1.01453063e-16 6,0 Z"
                                    id="Rectangle"
                                    transform="translate(6.000000, 6.000000) rotate(-90.000000) translate(-6.000000, -6.000000) "
                                  />
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </i>
              )}
              {tab === "event" &&
                (showLottie ? (
                  <Lottie options={defaultOptions[1]} height={32} width={32} />
                ) : (
                  <i class="btn-home-icon icon-lottie" aria-hidden="true" id="lottieHomeTab">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      width="32"
                      height="32"
                      preserveAspectRatio="xMidYMid meet"
                      style={{ width: "100%", height: "100%", transform: "translate3d(0px, 0px, 0px)" }}
                    >
                      <defs>
                        <clipPath id="__lottie_element_22">
                          <rect width="32" height="32" x="0" y="0"></rect>
                        </clipPath>
                      </defs>
                      <g clip-path="url(#__lottie_element_22)">
                        <g transform="matrix(0,1,-1,0,34,0)" opacity="1" style={{ display: "block" }}>
                          <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                            <g opacity="1" transform="matrix(1,0,0,1,17,17)">
                              <path
                                fill="rgb(23,0,139)"
                                fill-opacity="1"
                                d=" M-5,-11 C-5,-11 5,-11 5,-11 C8.314000129699707,-11 11,-8.314000129699707 11,-5 C11,-5 11,5 11,5 C11,8.314000129699707 8.314000129699707,11 5,11 C5,11 -5,11 -5,11 C-8.314000129699707,11 -11,8.314000129699707 -11,5 C-11,5 -11,-5 -11,-5 C-11,-8.314000129699707 -8.314000129699707,-11 -5,-11z"
                              ></path>
                            </g>
                            <g opacity="1" transform="matrix(1,0,0,1,17,17)">
                              <path
                                stroke-linecap="butt"
                                stroke-linejoin="miter"
                                fill-opacity="0"
                                stroke-miterlimit="4"
                                stroke="rgb(23,0,139)"
                                stroke-opacity="1"
                                stroke-width="2"
                                d=" M-5,-11 C-5,-11 5,-11 5,-11 C8.314000129699707,-11 11,-8.314000129699707 11,-5 C11,-5 11,5 11,5 C11,8.314000129699707 8.314000129699707,11 5,11 C5,11 -5,11 -5,11 C-8.314000129699707,11 -11,8.314000129699707 -11,5 C-11,5 -11,-5 -11,-5 C-11,-8.314000129699707 -8.314000129699707,-11 -5,-11z"
                              ></path>
                            </g>
                          </g>
                          <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                            <g opacity="1" transform="matrix(1,0,0,1,17,17)">
                              <path
                                fill="rgb(255,255,255)"
                                fill-opacity="1"
                                d=" M0,-6 C0,-6 0,-6 0,-6 C0.5519999861717224,-6 1,-5.552000045776367 1,-5 C1,-5 1,5 1,5 C1,5.552000045776367 0.5519999861717224,6 0,6 C-0.5519999861717224,6 -1,5.552000045776367 -1,5 C-1,5 -1,-5 -1,-5 C-1,-5.552000045776367 -0.5519999861717224,-6 0,-6z"
                              ></path>
                            </g>
                            <g opacity="1" transform="matrix(1,0,0,1,17,17)">
                              <path
                                fill="rgb(255,255,255)"
                                fill-opacity="1"
                                d=" M-6,0 C-6,-0.5519999861717224 -5.552000045776367,-1 -5,-1 C-5,-1 5,-1 5,-1 C5.552000045776367,-1 6,-0.5519999861717224 6,0 C6,0.5519999861717224 5.552000045776367,1 5,1 C5,1 -5,1 -5,1 C-5.552000045776367,1 -6,0.5519999861717224 -6,0z"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </i>
                ))}
              <em>상품</em> {/* FETASK-250 2022-12-01 텍스트 수정 */}
            </div>
            <span className="hide-txt select">선택됨</span>
          </Link>
          <Link href="./timeline" className="btn-home-tab3" id="home-tab3">
            <div className="btn-ico-item">
              {tab !== "timeline" && (
                <i className="btn-home-icon" aria-hidden="true">
                  <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <g id="Artboard-Copy-17" transform="translate(-218.000000, -736.000000)">
                        <g transform="translate(0.000000, 728.000000)">
                          <g transform="translate(188.497340, 0.000000)">
                            <g id="Group-5" transform="translate(29.920213, 8.000000)">
                              <rect id="Rectangle-Copy-8" fill="#FF0000" opacity={0} x={0} y={0} width={32} height={32} />
                              <g id="Group" transform="translate(6.981383, 6.000000)" stroke="#141414" strokeWidth={2}>
                                <path
                                  d="M19.5851578,17.1127112 C19.4460403,17.2045498 19.2821839,17.2522919 19.1151571,17.2493085 L0.862096871,17.2493085 C0.691933589,17.2562708 0.523597781,17.2105182 0.380493857,17.1183511 C0.237224185,17.0261814 0.126160546,16.8920751 0.0622457229,16.7344246 C-0.00034311922,16.5867214 -0.016280388,16.4234395 0.0169243803,16.266468 C0.0499608511,16.1094837 0.130312736,15.9664232 0.247351788,15.8565147 L1.61578944,14.5031451 C2.5837979,13.5529304 3.12931998,12.254305 3.12965998,10.8987711 L3.12965998,6.81914124 C3.12965998,4.38298267 4.4313736,2.13151144 6.54423045,0.913559466 C8.6572573,-0.304519822 11.260387,-0.304519822 13.3734564,0.913559466 C15.4863132,2.13163875 16.7880269,4.38298267 16.7880269,6.81914124 L16.7880269,10.8987711 C16.7885249,12.2542625 17.3338889,13.5529304 18.3018974,14.5031451 L19.670335,15.8565147 C19.7940168,15.9617805 19.882169,16.1026852 19.9223436,16.259835 C19.9625187,16.4169848 19.9530562,16.5829233 19.8951177,16.7344543 C19.8325169,16.8889178 19.7244453,17.020707 19.5851578,17.1127112 Z"
                                  id="Path"
                                />
                                <path d="M5.75840501,19.1666667 C5.75840501,21.2837582 7.69199932,23 10.0772088,23 C12.4624182,23 14.3960125,21.2837582 14.3960125,19.1666667" id="Path" />
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </i>
              )}
              {tab === "timeline" &&
                (showLottie ? (
                  <Lottie options={defaultOptions[2]} height={32} width={32} />
                ) : (
                  <i class="btn-home-icon icon-lottie" aria-hidden="true" id="lottieHomeTab">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      width="32"
                      height="32"
                      preserveAspectRatio="xMidYMid meet"
                      style={{ width: "100%", height: "100%", transform: "translate3d(0px, 0px, 0px)" }}
                    >
                      <defs>
                        <clipPath id="__lottie_element_27">
                          <rect width="32" height="32" x="0" y="0"></rect>
                        </clipPath>
                      </defs>
                      <g clip-path="url(#__lottie_element_27)">
                        <g transform="matrix(1,0,0,1,0,0)" opacity="1" style={{ display: "block" }}>
                          <g opacity="1" transform="matrix(1,0,0,1,16.954999923706055,14.47599983215332)">
                            <path
                              fill="rgb(23,0,139)"
                              fill-opacity="1"
                              d=" M9.612000465393066,8.63700008392334 C9.472999572753906,8.729000091552734 9.309000015258789,8.776000022888184 9.142000198364258,8.77299976348877 C9.142000198364258,8.77299976348877 -9.111000061035156,8.77299976348877 -9.111000061035156,8.77299976348877 C-9.281000137329102,8.779999732971191 -9.449999809265137,8.734999656677246 -9.593000411987305,8.642999649047852 C-9.736000061035156,8.550000190734863 -9.847000122070312,8.414999961853027 -9.91100025177002,8.258000373840332 C-9.973999977111816,8.109999656677246 -9.98900032043457,7.947000026702881 -9.956000328063965,7.789999961853027 C-9.92300033569336,7.632999897003174 -9.843000411987305,7.489999771118164 -9.72599983215332,7.380000114440918 C-9.72599983215332,7.380000114440918 -8.357000350952148,6.0269999504089355 -8.357000350952148,6.0269999504089355 C-7.388999938964844,5.077000141143799 -6.843999862670898,3.7790000438690186 -6.843999862670898,2.4230000972747803 C-6.843999862670898,2.4230000972747803 -6.843999862670898,-1.6579999923706055 -6.843999862670898,-1.6579999923706055 C-6.843999862670898,-4.093999862670898 -5.541999816894531,-6.343999862670898 -3.428999900817871,-7.561999797821045 C-1.315999984741211,-8.779999732971191 1.2869999408721924,-8.779999732971191 3.4000000953674316,-7.561999797821045 C5.513000011444092,-6.343999862670898 6.815000057220459,-4.093999862670898 6.815000057220459,-1.6579999923706055 C6.815000057220459,-1.6579999923706055 6.815000057220459,2.4230000972747803 6.815000057220459,2.4230000972747803 C6.815000057220459,3.7790000438690186 7.361000061035156,5.077000141143799 8.329000473022461,6.0269999504089355 C8.329000473022461,6.0269999504089355 9.696999549865723,7.380000114440918 9.696999549865723,7.380000114440918 C9.821000099182129,7.485000133514404 9.909000396728516,7.625999927520752 9.949000358581543,7.7829999923706055 C9.98900032043457,7.940000057220459 9.979999542236328,8.105999946594238 9.92199993133545,8.258000373840332 C9.859000205993652,8.411999702453613 9.75100040435791,8.545000076293945 9.612000465393066,8.63700008392334z"
                            ></path>
                          </g>
                          <g opacity="1" transform="matrix(1,0,0,1,16.954999923706055,14.47599983215332)">
                            <path
                              stroke-linecap="butt"
                              stroke-linejoin="miter"
                              fill-opacity="0"
                              stroke-miterlimit="4"
                              stroke="rgb(23,0,139)"
                              stroke-opacity="1"
                              stroke-width="2"
                              d=" M9.612000465393066,8.63700008392334 C9.472999572753906,8.729000091552734 9.309000015258789,8.776000022888184 9.142000198364258,8.77299976348877 C9.142000198364258,8.77299976348877 -9.111000061035156,8.77299976348877 -9.111000061035156,8.77299976348877 C-9.281000137329102,8.779999732971191 -9.449999809265137,8.734999656677246 -9.593000411987305,8.642999649047852 C-9.736000061035156,8.550000190734863 -9.847000122070312,8.414999961853027 -9.91100025177002,8.258000373840332 C-9.973999977111816,8.109999656677246 -9.98900032043457,7.947000026702881 -9.956000328063965,7.789999961853027 C-9.92300033569336,7.632999897003174 -9.843000411987305,7.489999771118164 -9.72599983215332,7.380000114440918 C-9.72599983215332,7.380000114440918 -8.357000350952148,6.0269999504089355 -8.357000350952148,6.0269999504089355 C-7.388999938964844,5.077000141143799 -6.843999862670898,3.7790000438690186 -6.843999862670898,2.4230000972747803 C-6.843999862670898,2.4230000972747803 -6.843999862670898,-1.6579999923706055 -6.843999862670898,-1.6579999923706055 C-6.843999862670898,-4.093999862670898 -5.541999816894531,-6.343999862670898 -3.428999900817871,-7.561999797821045 C-1.315999984741211,-8.779999732971191 1.2869999408721924,-8.779999732971191 3.4000000953674316,-7.561999797821045 C5.513000011444092,-6.343999862670898 6.815000057220459,-4.093999862670898 6.815000057220459,-1.6579999923706055 C6.815000057220459,-1.6579999923706055 6.815000057220459,2.4230000972747803 6.815000057220459,2.4230000972747803 C6.815000057220459,3.7790000438690186 7.361000061035156,5.077000141143799 8.329000473022461,6.0269999504089355 C8.329000473022461,6.0269999504089355 9.696999549865723,7.380000114440918 9.696999549865723,7.380000114440918 C9.821000099182129,7.485000133514404 9.909000396728516,7.625999927520752 9.949000358581543,7.7829999923706055 C9.98900032043457,7.940000057220459 9.979999542236328,8.105999946594238 9.92199993133545,8.258000373840332 C9.859000205993652,8.411999702453613 9.75100040435791,8.545000076293945 9.612000465393066,8.63700008392334z"
                            ></path>
                          </g>
                          <g opacity="1" transform="matrix(1,0,0,1,17.05900001525879,27.08300018310547)">
                            <path
                              fill="rgb(23,0,139)"
                              fill-opacity="1"
                              d=" M-4.318999767303467,-1.9170000553131104 C-4.318999767303467,0.20000000298023224 -2.384999990463257,1.9170000553131104 0,1.9170000553131104 C2.384999990463257,1.9170000553131104 4.318999767303467,0.20000000298023224 4.318999767303467,-1.9170000553131104"
                            ></path>
                          </g>
                          <g opacity="1" transform="matrix(1,0,0,1,17.05900001525879,27.08300018310547)">
                            <path
                              stroke-linecap="butt"
                              stroke-linejoin="miter"
                              fill-opacity="0"
                              stroke-miterlimit="4"
                              stroke="rgb(23,0,139)"
                              stroke-opacity="1"
                              stroke-width="2"
                              d=" M-4.318999767303467,-1.9170000553131104 C-4.318999767303467,0.20000000298023224 -2.384999990463257,1.9170000553131104 0,1.9170000553131104 C2.384999990463257,1.9170000553131104 4.318999767303467,0.20000000298023224 4.318999767303467,-1.9170000553131104"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </i>
                ))}

              <em>알림</em>
            </div>
            <span className="hide-txt select">선택됨</span>
          </Link>
          <Link href="./menu" className="btn-home-tab4" id="home-tab4">
            <div className="btn-ico-item">
              {/* <span className="new-info">
              <span className="hide-txt">새알림</span>
            </span> */}
              {tab !== "menu" && (
                <i className="btn-home-icon" aria-hidden="true">
                  <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <g id="Artboard-Copy-21" transform="translate(-312.000000, -736.000000)">
                        <g transform="translate(0.000000, 728.000000)">
                          <g transform="translate(282.000000, 0.000000)">
                            <g id="Group-6" transform="translate(30.000000, 8.000000)">
                              <rect id="Rectangle-Copy-8" fill="#FF0000" opacity={0} x={0} y={0} width={32} height={32} />
                              <g id="Group-4" transform="translate(5.000000, 5.000000)">
                                <rect id="Rectangle" stroke="#141414" strokeWidth={2} fill="#FFFFFF" x={1} y={1} width={22} height={22} rx={6} />
                                <g id="Group-11" transform="translate(6.000000, 6.000000)" fill="#141414">
                                  <path
                                    d="M6,-5 C6.55228475,-5 7,-4.55228475 7,-4 L7,6 C7,6.55228475 6.55228475,7 6,7 C5.44771525,7 5,6.55228475 5,6 L5,-4 C5,-4.55228475 5.44771525,-5 6,-5 Z"
                                    id="Rectangle"
                                    transform="translate(6.000000, 1.000000) rotate(-90.000000) translate(-6.000000, -1.000000) "
                                  />
                                  <path
                                    d="M5,1 C5.55228475,1 6,1.44771525 6,2 L6,10 C6,10.5522847 5.55228475,11 5,11 C4.44771525,11 4,10.5522847 4,10 L4,2 C4,1.44771525 4.44771525,1 5,1 Z"
                                    id="Rectangle-Copy"
                                    transform="translate(5.000000, 6.000000) rotate(-90.000000) translate(-5.000000, -6.000000) "
                                  />
                                  <path
                                    d="M3.5,7.5 C4.05228475,7.5 4.5,7.94771525 4.5,8.5 L4.5,13.5 C4.5,14.0522847 4.05228475,14.5 3.5,14.5 C2.94771525,14.5 2.5,14.0522847 2.5,13.5 L2.5,8.5 C2.5,7.94771525 2.94771525,7.5 3.5,7.5 Z"
                                    id="Rectangle-Copy-2"
                                    transform="translate(3.500000, 11.000000) rotate(-90.000000) translate(-3.500000, -11.000000) "
                                  />
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </i>
              )}
              {tab === "menu" &&
                (showLottie ? (
                  <Lottie options={defaultOptions[3]} height={32} width={32} />
                ) : (
                  <i class="btn-home-icon icon-lottie" aria-hidden="true" id="lottieHomeTab">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      width="32"
                      height="32"
                      preserveAspectRatio="xMidYMid meet"
                      style={{ width: "100%", height: "100%", transform: "translate3d(0px, 0px, 0px)" }}
                    >
                      <defs>
                        <clipPath id="__lottie_element_32">
                          <rect width="32" height="32" x="0" y="0"></rect>
                        </clipPath>
                      </defs>
                      <g clip-path="url(#__lottie_element_32)">
                        <g transform="matrix(1,0,0,1,0,0)" opacity="1" style={{ display: "block" }}>
                          <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                            <g opacity="1" transform="matrix(1,0,0,1,17,17)">
                              <path
                                fill="rgb(23,0,139)"
                                fill-opacity="1"
                                d=" M-5,-11 C-5,-11 5,-11 5,-11 C8.314000129699707,-11 11,-8.314000129699707 11,-5 C11,-5 11,5 11,5 C11,8.314000129699707 8.314000129699707,11 5,11 C5,11 -5,11 -5,11 C-8.314000129699707,11 -11,8.314000129699707 -11,5 C-11,5 -11,-5 -11,-5 C-11,-8.314000129699707 -8.314000129699707,-11 -5,-11z"
                              ></path>
                            </g>
                            <g opacity="1" transform="matrix(1,0,0,1,17,17)">
                              <path
                                stroke-linecap="butt"
                                stroke-linejoin="miter"
                                fill-opacity="0"
                                stroke-miterlimit="4"
                                stroke="rgb(23,0,139)"
                                stroke-opacity="1"
                                stroke-width="2"
                                d=" M-5,-11 C-5,-11 5,-11 5,-11 C8.314000129699707,-11 11,-8.314000129699707 11,-5 C11,-5 11,5 11,5 C11,8.314000129699707 8.314000129699707,11 5,11 C5,11 -5,11 -5,11 C-8.314000129699707,11 -11,8.314000129699707 -11,5 C-11,5 -11,-5 -11,-5 C-11,-8.314000129699707 -8.314000129699707,-11 -5,-11z"
                              ></path>
                            </g>
                          </g>
                          <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                            <g opacity="1" transform="matrix(1,0,0,1,17,12)">
                              <path
                                fill="rgb(255,255,255)"
                                fill-opacity="1"
                                d=" M-6,0 C-6,-0.5519999861717224 -5.552000045776367,-1 -5,-1 C-5,-1 5,-1 5,-1 C5.552000045776367,-1 6,-0.5519999861717224 6,0 C6,0.5519999861717224 5.552000045776367,1 5,1 C5,1 -5,1 -5,1 C-5.552000045776367,1 -6,0.5519999861717224 -6,0z"
                              ></path>
                            </g>
                            <g opacity="1" transform="matrix(1,0,0,1,16,17)">
                              <path
                                fill="rgb(255,255,255)"
                                fill-opacity="1"
                                d=" M-5,0 C-5,-0.5519999861717224 -4.552000045776367,-1 -4,-1 C-4,-1 4,-1 4,-1 C4.552000045776367,-1 5,-0.5519999861717224 5,0 C5,0.5519999861717224 4.552000045776367,1 4,1 C4,1 -4,1 -4,1 C-4.552000045776367,1 -5,0.5519999861717224 -5,0z"
                              ></path>
                            </g>
                            <g opacity="1" transform="matrix(1,0,0,1,14.5,22)">
                              <path
                                fill="rgb(255,255,255)"
                                fill-opacity="1"
                                d=" M-3.5,0 C-3.5,-0.5519999861717224 -3.052000045776367,-1 -2.5,-1 C-2.5,-1 2.5,-1 2.5,-1 C3.052000045776367,-1 3.5,-0.5519999861717224 3.5,0 C3.5,0.5519999861717224 3.052000045776367,1 2.5,1 C2.5,1 -2.5,1 -2.5,1 C-3.052000045776367,1 -3.5,0.5519999861717224 -3.5,0z"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </i>
                ))}
              <em>전체</em> {/* FETASK-250 2022-12-01 텍스트 수정 */}
            </div>
            <span className="hide-txt select">선택됨</span>
          </Link>
          {/* e: SR-2014 2022-10-25 로티이미지 추가로 인한 마크업 수정 */}
        </div>
      </div>
    </>
  );
};

export default BottomBar;
