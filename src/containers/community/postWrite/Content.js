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
