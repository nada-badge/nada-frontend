/*ManageHome 관리자용 메인 페이지 */
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { applyFontStyles } from '../../styles/fontStyle';
import { AngleBracket } from '../../icon/AngleBracket';

const ManageHome = () => {
  const dispatch = useDispatch();

  //해당 페이지의 상단, 하단 설정
  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: 'logo',
        text: '관리자용',
        isShowBottom: false,
      }),
    );
  }, []);

  return (
    <>
      <div className="pageContainer">
        <List>
          <div className="title">관리자님 안녕하세요!</div>
          <Link to="/manage/Activity" className="link">
            활동 게시글 관리하기
            <AngleBracket Direction={'right'} />
          </Link>
          <Link to="/manage/Activity" className="link">
            활동 신고글 확인하기
            <AngleBracket Direction={'right'} />
          </Link>
          <Link to="/manage/Activity" className="link">
            커뮤니티 신고글 확인하기
            <AngleBracket Direction={'right'} />
          </Link>
        </List>
      </div>
    </>
  );
};

export default ManageHome;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  height: 500px;

  & > .title {
    padding: 12px 15px;
    ${applyFontStyles({
      font: 'title-01',
      color: 'var(--myspec-gray-scalegray-900)',
    })};
  }

  & > .link {
    padding: 12px 15px;
    display: flex;
    align-items: center;
    text-decoration-line: none;
    gap: 11px;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: var(--myspec-gray-scalegray-200);

    ${applyFontStyles({
      font: 'title-02',
      color: 'var(--myspec-gray-scalegray-900)',
    })};
  }
`;
