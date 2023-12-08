/**TagButton 태그된 요소를 출력하는 컴포넌트 */
import { Button, TextWarpper } from '../../styles/community/SelectButton';

const TagButton = ({ tag }) => {
  return (
    <Button>
      <TextWarpper>{tag}</TextWarpper>
    </Button>
  );
};
export default TagButton;
