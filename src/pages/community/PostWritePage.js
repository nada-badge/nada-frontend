/** PostWritePage 글 작성을 진행하는 페이지 */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useSubmit from '../../modules/queries/PostWriteQuery';
import useUpdate from '../../modules/queries/PostUpdateQuery';
import {
  initializeAll,
  postWriteSelector,
} from '../../modules/Community/postWrite';
import { RegionButton } from '../../containers/community/postWrite/RegionButton';
import { FieldButton } from '../../containers/community/postWrite/FieldButton';
import { MainCategoryButton } from '../../containers/community/postWrite/MainCategoryButton';
import { CategoryButton } from '../../containers/community/postWrite/CategoryButton';
import { setBarStatus } from '../../modules/bar';
import {
  PostContainer,
  Title,
  Frame,
  Content,
  Border,
  RegionImages,
} from '../../styles/Community/PostWriteStyle';

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
        <Title>
          <input
            className="div"
            name="title"
            onChange={onChange}
            value={inputValue.title}
            placeholder="제목을 입력하세요"
            required
          />
        </Title>
        <Border />
        <Frame>
          <MainCategoryButton />
          <RegionButton text="지역" Modalname="RegionModal" state="Region" />
          <FieldButton text="분야" Modalname="FieldModal" state="Field" />
          <CategoryButton
            text="종류"
            Modalname="CategoryModal"
            state="Category"
          />
        </Frame>
        <Content>
          <input
            className="text"
            name="content"
            onChange={onChange}
            value={inputValue.content}
            placeholder="내용을 입력하세요"
            required
          />
        </Content>

        <Border />
        <RegionImages>
          <div className="images">
            <div className="image">
              <div className="overlap-group">
                <div className="rectangle" />
                <img
                  className="img"
                  alt="Vector"
                  src="https://c.animaapp.com/prsgtMdH/img/vector-12.svg"
                />
                <div className="ellipse" />
                <div className="group">
                  <img
                    className="vector-2"
                    alt="Vector"
                    src="https://c.animaapp.com/prsgtMdH/img/vector.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </RegionImages>
        <button>테스트 제출 버튼</button>
      </form>
    </PostContainer>
  );
};

export default PostWrite;
