export const RightArrowSvg = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 8}
      height={height || 13}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      <path
        d="M1 0.5L7 6.5L1 12.5"
        stroke="black"
        stroke-width={width ? 2 : 1}
      />
    </svg>
  );
};
