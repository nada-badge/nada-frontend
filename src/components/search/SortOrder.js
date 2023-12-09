import { applyFontStyles } from '../../styles/fontStyle';

export const SortOrder = ({ text }) => {
  const sortContainer = {
    display: 'flex',
    width: 'calc(100% - 16px)',
    padding: '4px 8px',
    justifyContent: 'flex-end',
    alignItems: 'center',
  };

  const wrapper = {
    display: 'flex',
    alignItems: 'center',
    gap: '3px',
    cursor: 'pointer',
  };

  return (
    <div style={sortContainer}>
      <div style={wrapper}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="100%"
          viewBox="0 0 11 13"
          fill="none"
        >
          <path
            d="M1 4L3.64706 1.5V11.5"
            stroke="var(--myspec-gray-scalegray-600)"
          />
          <path
            d="M10 9L7.35294 11.5L7.35294 1.5"
            stroke="var(--myspec-gray-scalegray-600)"
          />
        </svg>
        <div
          style={applyFontStyles({
            font: 'body-01',
            color: 'var(--myspec-gray-scalegray-600)',
          })}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default SortOrder;
