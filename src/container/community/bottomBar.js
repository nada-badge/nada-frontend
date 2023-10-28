import {
  Bar,
  MenuImg,
  BookmarkImg,
} from "../../styles/Community/CommunityBarStyle";

export const BottomBar = () => {
  return (
    <Bar>
      <MenuImg />
      <div className="div">
        <div className="comment">
          <div className="group">
            <div className="ellipse" />
            <div className="ellipse-2" />
            <div className="ellipse-3" />
          </div>
        </div>
        <div className="text">23</div>
      </div>
      <BookmarkImg />
    </Bar>
  );
};
