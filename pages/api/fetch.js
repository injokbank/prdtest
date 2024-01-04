import axios from "axios";

let jsessionId = "rsfS4iqMJgbizZyMu9mXabAMmSqtXfvAqn1a4aOWABcs1xVynBjoVbt4LcWy99vb.aXNid2FzX2RvbWFpbi9pbmJhblN2cjEz";
const fetcher = async (uri) => {
  const result = await axios.get(uri, {
    withCredentials: true, // 쿠키를 요청에 포함하기 위한 옵션
    headers: {
      "Content-Type": "application/json",
      Cookie: `JSESSIONID=${jsessionId}`, // JSESSIONID를 Cookie 헤더에 추가
      // 추가적인 헤더가 필요한 경우 여기에 추가
    },
  });
  return result.data;
};

export default fetcher;
