export const CheckSvg = ({ $color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="12"
      viewBox="0 0 17 12"
      fill="none"
    >
      <path d="M1 5L6.5 10L16 1" stroke={`var(${$color})`} stroke-width="2" />
    </svg>
  );
};
