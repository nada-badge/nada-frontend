import { SearchInput } from '../../components/search/SearchInput';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setBarStatus } from '../../modules/bar';
import { SearchCategory } from '../../components/search/SearchCategory';
import PostList from '../../containers/community/PostList';
import { AlignBox } from '../../components/badge/AlignBox';

const SearchActivityPage = () => {
  const ContainerStyle = {
    display: ' flex',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: ' 0 auto',
    width: ' 375px',
  };

  const ResultStyle = {
    padding: '7px 15px',
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setBarStatus({ headerState: 'bell', text: '활동', isShowBottom: true }),
    );
  }, []);

  return (
    <div style={ContainerStyle}>
      <SearchInput />
      <SearchCategory list={['제목', '본문', '작성자']} />
      <div style={ResultStyle}>
        <AlignBox text={'최신 순'} />
        <PostList />
      </div>
    </div>
  );
};

export default SearchActivityPage;
