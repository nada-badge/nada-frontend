import { Link } from 'react-router-dom';
import { AngleBracket } from '../../icon/AngleBracket';
import { applyFontStyles } from '../../styles/fontStyle';

export const Content = ({ url, text, version, children }) => {
  const link = {
    width: '375px',
    height: 'fit-content',
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

  const versionStyle = {
    ...applyFontStyles({
      font: 'body-02',
      color: 'var(--myspec-gray-scalegray-600)',
    }),
  };

  const rightOutput = () => {
    return version ? (
      <div style={versionStyle}>{version}</div>
    ) : (
      <AngleBracket Direction={'right'} />
    );
  };

  return (
    <Link to={url} style={link}>
      {children}
      {text}
      {rightOutput()}
    </Link>
  );
};
