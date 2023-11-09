import { useState } from "react";
import {
  Bar,
  MenuImg,
  BookmarkImg,
} from "../../../styles/Community/CommunityBarStyle";
import useModal from "../../../components/Modal/Community/useModal";
import classNames from "classnames";

export const BottomBar = () => {
  const { openModal } = useModal();
  const [isActive, setIsActive] = useState();

  const openMenu = () => {
    openModal({ type: "YourMenuModal" });
  };

  const bookMark = () => {
    setIsActive(!isActive);
    //북마크 여부 정보를 넘기는 코드 작성 예정
  };

  return (
    <Bar>
      <MenuImg onClick={openMenu} />
      <BookmarkImg onClick={bookMark} className={classNames({ isActive })} />
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
    </Bar>
  );
};
