import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("clicked~!");
    // 아이디 입력값 검사
    if (!userId) {
      alert("아이디를 입력해주세요.");
      return;
    }

    try {
      console.log("로그인 요청 시작");
      console.log(userId);

      const response = await axios.post("/api/updateJsessionid", {
        userId,
      });

      console.log("응답:", response.data);

      // 요청 완료 후 /main/event 페이지로 리디렉션
      router.push("/main/event");
    } catch (error) {
      console.error("요청 오류:", JSON.stringify(error.response));
      alert("로그인 요청 중 오류가 발생했습니다.");
    }
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "calc(100vh - 60px)", // 버튼 높이만큼 빼줍니다
    padding: "0 20px", // 좌우 패딩
  };

  const inputStyle = {
    margin: "10px 0",
    height: "40px",
    width: "100%", // 최대 너비
    fontSize: "16px",
    border: "2px solid lightgray",
    borderRadius: "5px",
    padding: "5px 10px",
  };

  const buttonStyle = {
    position: "fixed", // 고정 위치
    bottom: "0", // 화면 하단
    left: "0",
    width: "100%", // 전체 너비
    height: "60px", // 버튼 높이
    fontSize: "16px",
    backgroundColor: "#375a7f", // 더티 블루 색상
    color: "#00ff00", // 라임색 텍스트
    border: "none",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <h1>로그인</h1>
      <form
        onSubmit={handleSubmit}
        style={{ width: "100%", maxWidth: "300px" }}
      >
        <div>
          <input
            type="text"
            id="userId"
            placeholder="아이디"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            placeholder="패스워드"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>
          로그인
        </button>
      </form>
    </div>
  );
}
