// 월 규칙에 따라서 컬러 만들어내기
export const generateRGBAArray = (x, y) => {
  const result = [];

  let r = x === 1 || x === 4 || x === 7 || x === 10 ? 255 : 0;
  let g = x === 2 || x === 5 || x === 8 || x === 11 ? 255 : 0;
  let b = x === 3 || x === 6 || x === 9 || x === 12 ? 255 : 0;

  // 배열 생성
  for (let i = 0; i < y; i++) {
    result.push(`rgb(${r},${g},${b})`);
    if (r !== 0) {
      i % 2 === 0 ? (g += 70) : (b += 70);
      if (g + b > 500) {
        g = g - 210;
        b = b - 210;
      }
    } else if (g !== 0) {
      i % 2 === 0 ? (r += 70) : (b += 70);
      if (r + b > 500) {
        r = r - 210;
        b = b - 210;
      }
    } else if (b !== 0) {
      i % 2 === 0 ? (r += 70) : (g += 70);
      if (g + r > 500) {
        g = g - 210;
        r = r - 210;
      }
    }
  }

  return result;
};
