import { Link } from 'react-router-dom';
import { AngleBracket } from '../../icon/AngleBracket';
import { applyFontStyles } from '../../styles/fontStyle';

export const Content = ({ url, text, Direction }) => {
  const link = {
    width: '375px',
    height: '60px',
    padding: '18px 17px',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    textDecorationLine: 'none',
    backgroundColor: 'white',
    ...applyFontStyles({
      font: 'subtitle-02',
      color: 'var(--myspec-gray-scalegray-900)',
    }),
  };

  return (
    <Link to={url} style={link}>
      {text}
      <AngleBracket Direction={Direction || 'right'} />
    </Link>
  );
};
