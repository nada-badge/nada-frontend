import { SearchInput } from '../../components/search/SearchInput';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBarStatus } from '../../modules/bar';
import { SearchCategory } from '../../components/search/SearchCategory';
import PostList from '../../containers/community/PostList';
import { AlignBox } from '../../components/badge/AlignBox';
import { useSearch } from '../../modules/queries/useSearch';
import { searchSelector } from '../../modules/search/search';

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

  const { text, focus } = useSelector(searchSelector);
  const [input, setInput] = useState(text);

  // 서버에서 검색 결과 불러오기
  const result = useSearch({
    focus: focus,
    value: input,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    setInput(text);
  };

  return (
    <div style={ContainerStyle}>
      <SearchInput onSubmit={onSubmit} />
      <SearchCategory list={['제목', '본문', '작성자']} focus={focus} />
      <div style={ResultStyle}>
        <AlignBox text={'최신 순'} />
        <PostList type={'activity'} result={result} />
      </div>
    </div>
  );
};

export default SearchActivityPage;
