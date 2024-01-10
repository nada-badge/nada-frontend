/** BottomBar 세부 게시글 화면에서 보여지는 하단바 */
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Bar, MenuImg } from '../../../styles/community/CommunityBarStyle';
import useModal from '../../../components/common/usedInModal/useModal';
import { PostDetailSelector } from '../../../modules/redux/community/postDetail';
import CountComment from '../../../components/community/postDetail/CountComment';

export const BottomBar = () => {
  const { openModal } = useModal();
  const navigate = useNavigate();
  const id = useSelector(PostDetailSelector('PostDetail', '_id'));
  const commentcount = CountComment();

  const openMenu = () => {
    openModal({
      type: 'MenuModal',
      contentType: '글',
      content: ['Share', 'Delete', 'Report', 'Update'],
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
        <div className="text">{commentcount}</div>
      </div>
    </Bar>
  );
};
