export const FilterHandler = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
    >
      <path
        d={`${
          className === 'unselected'
            ? 'M1 0.5L7 6.5L13 0.5'
            : 'M13 7.5L7 1.5L1 7.5'
        }`}
        stroke={`${className === 'unselected' ? '#888888' : 'white'}`}
      />
    </svg>
  );
};
