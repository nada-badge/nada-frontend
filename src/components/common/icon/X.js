export const X = ({ color }) => {
  console.log(color);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
    >
      <path
        d="M9.88964 1.00003L1 10M10 9.99997L1.11036 1"
        stroke={color ? color : '#000'}
        stroke-width="1.01015"
      />
    </svg>
  );
};
