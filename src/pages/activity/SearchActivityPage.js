import { SearchInput } from '../../components/search/SearchInput';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBarStatus } from '../../modules/bar';
import { SearchCategory } from '../../components/search/SearchCategory';
import PostList from '../../containers/community/PostList';
import { AlignBox } from '../../components/badge/AlignBox';
import { useSearchQuery } from '../../modules/queries/useSearchQuery';
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

  const search = useSelector(searchSelector);
  const [focus, setFocus] = useState('제목');
  const [value, setValue] = useState(search);

  const { data, isLoading, isError } = useSearchQuery({
    focus: focus,
    value: value.value,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    setValue(search);
  };

  return (
    <div style={ContainerStyle}>
      <SearchInput onSubmit={onSubmit} />
      <SearchCategory
        list={['제목', '본문', '작성자']}
        focus={focus}
        setFocus={setFocus}
      />
      <div style={ResultStyle}>
        <AlignBox text={'최신 순'} />
        <PostList
          type={'activity'}
          dataSet={data}
          isLoading={isLoading}
          isError={isError}
        />
      </div>
    </div>
  );
};

export default SearchActivityPage;
