/** PostWriteButton 메인페이지에서 작성 페이지로 넘어가는 버튼 컨테이너 */
import { PostButton } from '../../Community/styles/PostWriteButtonStyle';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeField } from '../../Community/modules/redux/postWrite';
import { initializeForm } from '../../Community/modules/redux/postDetail';

export const PostWriteButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toPostWrite = () => {
    dispatch(initializeForm({ form: 'PostDetail' }));
    dispatch(changeField({ form: 'method', key: 'isSubmit', value: true }));
    navigate('/community/PostWrite');
  };

  return (
    <PostButton onClick={toPostWrite}>
      <img
        className="group"
        alt="Group"
        src="https://c.animaapp.com/bZTbag8r/img/group-1@2x.png"
      />
    </PostButton>
  );
};
