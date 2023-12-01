import { TitleStyle } from '../../../styles/Community/PostWriteStyle';

export const Title = ({ onChange, inputValue }) => {
  return (
    <TitleStyle>
      <input
        className="div"
        name="TitleStyle"
        onChange={onChange}
        value={inputValue.title}
        placeholder="제목을 입력하세요"
        required
      />
    </TitleStyle>
  );
};
