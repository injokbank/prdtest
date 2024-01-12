module.exports = {
  exteneds: "airbnb-base",
  parser: "babel-eslint",
  rules: {
    // 변수와 상수에 대한 카멜케이스 규칙
    camelcase: "error",
    // 네이티브 객체의 확장 금지
    "no-extend-native": "error",
    // 상수는 대문자 사용
    "constants/uppercase": "error",
    // 함수 선언에는 const 사용
    "prefer-const": "error",
    // 코드 블록은 항상 중괄호로 둘러싸이며, 들여쓰기는 일관된 스타일을 유지합니다.
    indent: ["error", 4],
  },
};
