export const ArrowSvg = ({ onClick, isActive }) => {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 36"
      fill="none"
    >
      <rect
        width="36"
        height="36"
        fill={`${isActive ? `#1363ff` : `#F8F8F8`} `}
        rx="12"
      />
      <path
        stroke={`${isActive ? `#fff` : `#D9D9D9`} `}
        strokeLinecap="round"
        strokeWidth="2"
        d="m12 17 6-6 6 6m-6-4v12"
      />
    </svg>
  );
};
