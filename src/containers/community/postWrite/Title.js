import { TitleStyle } from '../../../styles/community/PostWriteStyle';

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
