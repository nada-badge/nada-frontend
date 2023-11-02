import {
  Bar,
  MenuImg,
  BookmarkImg,
} from "../../styles/Community/CommunityBarStyle";
import useModal from "../../components/Modal/Community/useModal";

export const BottomBar = () => {
  const { openModal } = useModal();
  const onClick = () => {
    openModal({ type: "MenuModal" });
    console.log("메뉴가 클릭되었습니다.");
  };

  return (
    <Bar>
      <MenuImg onClick={onClick} />
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
