/** PostWritePage 글 작성을 진행하는 페이지 */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import usePostCommunity from '../../modules/queries/community/usePostCommunity';
import usePatchCommunity from '../../modules/queries/community/usePatchCommunity';
import {
  initializeAll,
  postWriteSelector,
} from '../../modules/redux/community/postWrite';
import { changeBarStatus } from '../../modules/redux/bar';
import { Title } from '../../containers/common/Title';
import { FilterBar } from '../../containers/common/FilterBar';
import { Content } from '../../containers/common/Content';
import { Image } from '../../containers/common/Image';
import '../../styles/PageCommon.scss';

const PostWrite = () => {
  const { mutate } = usePostCommunity();
  const updateMutate = usePatchCommunity().mutate;

  const dispatch = useDispatch();

  const isSubmit = useSelector(postWriteSelector('method', 'isSubmit'));
  const PostDetail = useSelector(({ postdetail }) => postdetail.PostDetail);
  const postwrite = useSelector(({ postwrite }) => postwrite.postWriteSubmit);
  const [inputValue, setInputValue] = useState({
    title: PostDetail.title,
    content: PostDetail.content,
  });
  const [imgFiles, setImgFiles] = useState([]);

  useEffect(() => {
    dispatch(
      changeBarStatus({
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

  const onSubmit = (e) => {
    e.preventDefault();
    const userEmail = localStorage.getItem('email');
    const userName = 'maintest01';
    const _id = postwrite._id;
    const mainCategorys = postwrite.mainCategory;
    const categorys = postwrite.category;
    const fields = postwrite.field;
    const regions = postwrite.region;
    const title = e.target.title.value;
    const content = e.target.content.value;

    const imageUrl = imgFiles;

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
        imageUrl,
      });
    } else {
      updateMutate({
        _id,
        userEmail,
        userName,
        mainCategorys,
        categorys,
        fields,
        regions,
        title,
        content,
        imageUrl,
      });
    }
  };

  return (
    <form
      className="pageContainer"
      onSubmit={onSubmit}
      encType="multipart/form-data"
    >
      <Title onChange={onChange} inputValue={inputValue} />
      <div>
        <FilterBar type={'community'} />
        <Content onChange={onChange} inputValue={inputValue} />
      </div>
      <Image imgFiles={imgFiles} setImgFiles={setImgFiles} />

      <button>테스트 제출 버튼</button>
    </form>
  );
};

export default PostWrite;
