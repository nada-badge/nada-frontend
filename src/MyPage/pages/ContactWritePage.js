import { useState, useEffect } from 'react';
import { Title } from '../../containers/common/postInput/Title';
import { Content } from '../../containers/common/postInput/Content';
import { Image } from '../../containers/common/postInput/Image';
import { useDispatch } from 'react-redux';
import { changeBarStatus } from '../../Bar/modules/redux/bar';

const ContactWritePage = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({
    title: '',
    content: '',
  });
  const [imgFiles, setImgFiles] = useState([]);

  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: 'backPost',
        text: '문의 글쓰기',
        position: 'contact',
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

    const formData = {
      title: inputValue.title,
      content: inputValue.content,
      imageUrl: imgFiles,
    };
    console.log('제출되었습니다.');
  };

  return (
    <form
      className="pageContainer"
      id="contact"
      onSubmit={onSubmit}
      encType="multipart/form-data"
    >
      <Title name="title" onChange={onChange} inputValue={inputValue.title} />
      <Content onChange={onChange} inputValue={inputValue} />

      <Image
        imgFiles={imgFiles}
        section="community"
        setImgFiles={setImgFiles}
      />
    </form>
  );
};

export default ContactWritePage;
