import { useState, useEffect } from 'react';
import { Title } from '../../containers/common/postInput/Title';
import { Content } from '../../containers/common/postInput/Content';
import { Image } from '../../containers/common/postInput/Image';

export const ContactWritePage = () => {
  const [inputValue, setInputValue] = useState({
    title: '',
    content: '',
  });
  const [imgFiles, setImgFiles] = useState();

  const onChange = (event) => {
    const { value, name } = event.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const onSubmit = (e) => {};
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
