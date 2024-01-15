/**TagButton 태그된 요소를 출력하는 컴포넌트 */
import { TextWarpper } from '../../styles/community/SelectButton';

const TagButton = ({ tag }) => {
  return (
    <div>
      <TextWarpper>{tag}</TextWarpper>
    </div>
  );
};
export default TagButton;
