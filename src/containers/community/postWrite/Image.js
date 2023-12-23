/** Image 글작성 페이지에 Image 출력하는 컴테이너  */
import { Images, PreViewImg } from '../../../styles/community/PostWriteStyle';
import { useState } from 'react';
import { X } from '../../../components/common/icon/X';
import useImageQuery from '../../../modules/queries/useImageQuery';
import { SkeletonImageSvg } from '../../../icon/SkeletonImageSvg';

export const Image = () => {
  const [imgFiles, setImgFiles] = useState([]);

  const deleteImgFile = (img) => {
    setImgFiles((prevFiles) => prevFiles.filter((file) => file !== img));
  };

  const saveImgFile = (e) => {
    const files = e.target.files;

    [...files].forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImgFiles((prevFiles) => [...prevFiles, reader.result]);
      };
    });
  };

  return (
    <Images>
      <label htmlFor="upload-photo">
        <SkeletonImageSvg />
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
      {imgFiles.map((imgFile) => {
        return (
          <PreViewImg>
            <img src={imgFile} alt="미리보기" className="img" />
            <div className="xImg" onClick={() => deleteImgFile(imgFile)}>
              <X color="#888888" />
            </div>
          </PreViewImg>
        );
      })}
    </Images>
  );
};
