import { useDispatch } from 'react-redux';
import { LinkButton } from '../components/LinkButton';
import { applyFontStyles } from '../../styles/fontStyle';
import { changeField } from '../../modules/redux/postWrite';

const Header = ({ text, url }) => {
  const dispatch = useDispatch();

  const header = {
    padding: '20px',
    ...applyFontStyles({
      font: 'title-02',
      color: 'var(--myspec-gray-scalegray-900)',
    }),
  };

  const MoveToWrite = () => {
    dispatch(changeField({ form: 'method', key: 'isSubmit', value: true }));
  };

  return (
    <>
      <div style={header}>{text}</div>
      <LinkButton url={'/manage'} text={'뒤로 가기 '} Direction="left" />
      {url && (
        <LinkButton onClick={MoveToWrite} url={url} text={'게시글 작성하기'} />
      )}
    </>
  );
};

export default Header;
