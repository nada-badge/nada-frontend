/** BottomBar 세부 게시글 화면에서 보여지는 하단바 */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Bar, MenuImg } from '../../../styles/Community/CommunityBarStyle';
import useModal from '../../../components/Modal/Community/useModal';
import classNames from 'classnames';
import { PostDetailSelector } from '../../../modules/Community/postDetail';

export const BottomBar = () => {
  const { openModal } = useModal();
  const navigate = useNavigate();
  const id = useSelector(PostDetailSelector('PostDetail', '_id'));
  const [isActive, setIsActive] = useState();

  const openMenu = () => {
    openModal({
      type: 'MenuModal',
      contentType: '글',
      content: ['Share', 'Delete'],
      position: 'post',
    });
  };

  const openComment = () => {
    navigate(`/community/Comment/${id}`);
  };

  return (
    <Bar>
      <MenuImg onClick={openMenu} />
      <div className="div">
        <div className="comment">
          <div className="group" onClick={openComment}>
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
