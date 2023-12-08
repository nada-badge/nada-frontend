/** Image 글작성 페이지에 Image 출력하는 컴테이너  */
import { Images } from '../../../styles/community/PostWriteStyle';

export const Image = () => {
  return (
    <Images>
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
    </Images>
  );
};
