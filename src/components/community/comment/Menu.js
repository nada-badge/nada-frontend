import { MenuStyle } from '../../../styles/community/CommentStyle';

export const Menu = ({ openMenu }) => {
  return (
    <MenuStyle onClick={() => openMenu()}>
      <div className="meatball">
        <div className="ellipse" />
        <div className="ellipse" />
        <div className="ellipse" />
      </div>
    </MenuStyle>
  );
};
