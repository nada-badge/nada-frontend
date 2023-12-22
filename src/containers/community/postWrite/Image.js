/** Image 글작성 페이지에 Image 출력하는 컴테이너  */
import { Images } from '../../../styles/community/PostWriteStyle';
import { useState } from 'react';
import { X } from '../../../components/common/icon/X';
import useImageQuery from '../../../modules/queries/useImageQuery';

export const Image = () => {
  const [imgFile, setImgFile] = useState('');
  //const imgRef = useRef();

  const saveImgFile = (e) => {
    console.log('image : ', e.target.files[0]);
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  const image = {
    width: '72px',
    height: '72px',
    borderRadius: '10px',
  };

  return (
    <Images>
      <label htmlFor="upload-photo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="72"
          height="72"
          fill="none"
          viewBox="0 0 72 72"
        >
          <rect width="72" height="72" fill="#F8F8F8" rx="10" />
          <path
            fill="#D9D9D9"
            fill-rule="evenodd"
            d="M50 18c2.2 0 4 1.8 4 4v28c0 2.2-1.8 4-4 4H22c-2.2 0-4-1.8-4-4V22c0-2.2 1.8-4 4-4h28ZM34 45.02 29 39l-7 9h28l-9-12-7 9.02ZM29 33a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
            clip-rule="evenodd"
          />
          <circle
            cx="53"
            cy="53"
            r="11"
            fill="#888"
            stroke="#F8F8F8"
            stroke-width="2"
          />
          <path
            stroke="#fff"
            stroke-linecap="round"
            stroke-width="2"
            d="M47 53h12m-6 6V47"
          />
        </svg>
      </label>
      <input
        style={{ display: 'none' }}
        multiple
        type="file"
        accept="image/*"
        id="upload-photo"
        name="profile_img"
        onChange={saveImgFile}
      ></input>

      <img
        src={imgFile ? imgFile : `/images/icon/user.png`}
        alt="미리보기"
        style={image}
      />
    </Images>
  );
};
