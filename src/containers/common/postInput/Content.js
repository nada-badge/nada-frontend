/** Content 글작성 페이지에 내용 input을 받는 컨테이너  */
import { ContentStyle } from '../../../styles/community/PostWriteStyle';

export const Content = ({ onChange, inputValue }) => {
  return (
    <ContentStyle>
      <input
        className="text"
        name="content"
        onChange={onChange}
        value={inputValue.content}
        placeholder="내용을 입력하세요"
        required
      />
    </ContentStyle>
  );
};
