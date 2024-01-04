// pages/api/updateJsessionid.js
export default function handler(req, res) {
  console.log("req.body " + req.method);
  console.log("req.body " + JSON.stringify(req.body));

  if (req.method === "POST") {
    // 요청 본문에서 jsessionid 추출
    const { userId } = req.body;

    if (userId) {
      // 응답 헤더에 쿠키 설정
      res.setHeader("Set-Cookie", `JSESSIONID=${userId}; Path=/; HttpOnly`);
      res.status(200).json({ message: "JSESSIONID updated" });
    } else {
      res.status(400).json({ error: "JSESSIONID is required" });
    }
  } else {
    // POST 요청이 아닌 경우 에러 처리
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
