/** Dateformat date를 <N년 N월 N일 N:N> 형식으로 포맷 */
const formatDate = (preDate) => {
  const date = new Date(preDate);

  const padZero = (value) => (value < 10 ? `0${value}` : value);

  const year = date.getFullYear();
  const month = padZero(date.getMonth() + 1);
  const day = padZero(date.getDate());
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${year}년 ${month}월 ${day}일 ${hours}:${minutes}`;
};

export default formatDate;
