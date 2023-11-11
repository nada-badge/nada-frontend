/** Dateformat date를 <N년 N월 N일 N:N> 형식으로 포맷 */
const Dateformat = (preDate) => {
  const dateString = preDate;

  // Date 객체로 파싱
  const date = new Date(dateString);

  // 년, 월, 일, 시간 및 분 추출
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 월은 0부터 시작하므로 1을 더합니다.
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // 월과 일이 한 자리 숫자일 경우 앞에 0을 추가
  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedDay = day < 10 ? `0${day}` : day;

  // 결과 문자열 생성
  const formattedDate = `${year}년 ${formattedMonth}월 ${formattedDay}일 ${hours}:${minutes}`;

  return formattedDate; // "2023년 10월 24일 14:26"
};

export default Dateformat;
