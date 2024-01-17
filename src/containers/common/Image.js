/** Image 글작성 페이지에 Image 출력하는 컴테이너  */
import { Images, PreViewImg } from '../../styles/community/PostWriteStyle';
import { X } from '../../icon/X';
import { SkeletonImageSvg } from '../../icon/SkeletonImageSvg';
import usePostImage from '../../modules/queries/usePostImage';
import useDeleteImage from '../../modules/queries/useDeleteImage';

export const Image = ({ section, imgFiles, setImgFiles }) => {
  const { mutateAsync } = usePostImage();
  const { mutate } = useDeleteImage();

  const deleteImgFile = (img) => {
    mutate({ imageUrl: img });
    setImgFiles((prevFiles) => prevFiles.filter((file) => file !== img));
  };

  const saveImgFile = async (e) => {
    const files = Array.from(e.target.files);
    const result = await mutateAsync({ section: section, files: files });

    result.path.forEach((item) => {
      setImgFiles((prevFiles) => [...prevFiles, item]);
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
        name="img"
        onChange={saveImgFile}
      ></input>
      {imgFiles.map((imgFile, index) => (
        <PreViewImg key={index} imgurl={imgFile}>
          <div className="img" />
          <div className="xImg" onClick={() => deleteImgFile(imgFile)}>
            <X color="#888888" size={12} bold={1.01} />
          </div>
        </PreViewImg>
      ))}
    </Images>
  );
};
