// JWT 토큰의 페이로드를 디코딩하기
export const decodeJwtToken = (token) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64));

  return JSON.parse(jsonPayload);
};
// 예시
//let {email, userType} = decodeJwtToken(data.token);
