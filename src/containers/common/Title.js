/** Title 글작성 페이지에 Title을 출력하는 컴테이너  */
import { TitleStyle } from '../../styles/community/PostWriteStyle';

export const Title = ({ onChange, inputValue }) => {
  return (
    <TitleStyle>
      <input
        className="div"
        name="title"
        onChange={onChange}
        value={inputValue.title}
        placeholder="제목을 입력하세요"
        required
      />
    </TitleStyle>
  );
};
