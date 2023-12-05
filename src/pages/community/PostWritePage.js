/** PostWritePage 글 작성을 진행하는 페이지 */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useSubmit from '../../modules/queries/PostWriteQuery';
import useUpdate from '../../modules/queries/PostUpdateQuery';
import {
  initializeAll,
  postWriteSelector,
} from '../../modules/community/postWrite';
import { setBarStatus } from '../../modules/bar';
import { PostContainer, Border } from '../../styles/community/PostWriteStyle';
import { Title } from '../../containers/community/postWrite/Title';
import { FilterBar } from '../../containers/community/postWrite/FilterBar';
import { Content } from '../../containers/community/postWrite/Content';
import { Image } from '../../containers/community/postWrite/Image';

const PostWrite = () => {
  const { mutate } = useSubmit();
  const update = useUpdate().mutate;
  const dispatch = useDispatch();

  const isSubmit = useSelector(postWriteSelector('method', 'isSubmit'));
  const PostDetail = useSelector(({ postdetail }) => postdetail.PostDetail);
  const postwrite = useSelector(({ postwrite }) => postwrite.postWriteSubmit);
  const [inputValue, setInputValue] = useState({
    title: PostDetail.title,
    content: PostDetail.content,
  });

  useEffect(() => {
    dispatch(
      setBarStatus({
        headerState: 'backPost',
        text: '글쓰기',
        isShowBottom: false,
      }),
    );
  }, []);

  const onChange = (event) => {
    const { value, name } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const OnSubmit = (e) => {
    e.preventDefault();
    const userEmail = '20230904@nate.com';
    const userName = '오늘닉네임';
    const _id = postwrite._id;
    const mainCategorys = postwrite.mainCategory;
    const categorys = postwrite.category;
    const fields = postwrite.field;
    const regions = postwrite.region;
    const title = e.target.title.value;
    const content = e.target.content.value;

    dispatch(initializeAll());
    if (isSubmit) {
      mutate({
        userEmail,
        userName,
        mainCategorys,
        categorys,
        fields,
        regions,
        title,
        content,
      });
    } else {
      update({
        _id,
        userEmail,
        userName,
        mainCategorys,
        categorys,
        fields,
        regions,
        title,
        content,
      });
    }
  };

  return (
    <PostContainer>
      <form onSubmit={OnSubmit}>
        <Title onChange={onChange} inputValue={inputValue} />
        <Border />
        <FilterBar />
        <Content onChange={onChange} inputValue={inputValue} />
        <Border />
        <Image />
        <button>테스트 제출 버튼</button>
      </form>
    </PostContainer>
  );
};

export default PostWrite;
