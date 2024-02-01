import { SearchInput } from '../components/SearchInput';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchCategory } from '../components/SearchCategory';
import PostList from '../../components/common/postList/PostList';
import { AlignBox } from '../../Badge/components/AlignBox';
import {
  useSearchActivity,
  useSearchCommunity,
} from '../../modules/queries/useSearch';
import { searchSelector } from '../modules/redux/search';

const SearchPage = () => {
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

  // 상단바
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: 'back',
        text: '검색',
        isShowBottom: false,
      }),
    );
  }, []);

  // redux에서 조회한 값 (redux > search > focus, text)
  const { position, text, focus } = useSelector(searchSelector);
  const [input, setInput] = useState(text);

  // 서버에서 검색 결과 불러오기
  const result = useSearchActivity({
    focus: focus,
    value: input,
  });

  // 검색 버튼 누르면, input 상태 변경하기
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

export default SearchPage;