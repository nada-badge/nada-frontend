import { applyFontStyles } from '../../styles/fontStyle';
import { FilterHandler } from '../../icon/FilterHandler';

export const MainCategoryButton = () => {
  const MainCategoryStyle = {
    minWidth: '56px',
    height: '40px',
    backgroundColor: 'var(--myspec-gray-scalegray-200)',
    borderRadius: '10px  0px 0px 10px ',
    display: 'flex',
    boxSizing: 'border-box',
    padding: '7px 10px',
    gap: '4px',
    alignItems: 'center',
    ...applyFontStyles({
      font: 'body-01',
      color: 'var(--myspec-gray-scalegray-900)',
    }),
  };

  return (
    <div style={MainCategoryStyle}>
      모집
      <FilterHandler isSmall={true} className="unselected" color={'black'} />
    </div>
  );
};
