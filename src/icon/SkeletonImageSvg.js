export const SkeletonImageSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="72"
      height="72"
      fill="none"
      viewBox="0 0 72 72"
    >
      <rect width="72" height="72" fill="#F8F8F8" rx="10" />
      <path
        fill="#D9D9D9"
        fillRule="evenodd"
        d="M50 18c2.2 0 4 1.8 4 4v28c0 2.2-1.8 4-4 4H22c-2.2 0-4-1.8-4-4V22c0-2.2 1.8-4 4-4h28ZM34 45.02 29 39l-7 9h28l-9-12-7 9.02ZM29 33a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        clipRule="evenodd"
      />
      <circle
        cx="53"
        cy="53"
        r="11"
        fill="#888"
        stroke="#F8F8F8"
        strokeWidth="2"
      />
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="2"
        d="M47 53h12m-6 6V47"
      />
    </svg>
  );
};
