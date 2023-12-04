import { Button, TextWarpper } from '../../styles/community/SelectButton';

const TagButton = ({ tag }) => {
  return (
    <Button>
      <TextWarpper>{tag}</TextWarpper>
    </Button>
  );
};
export default TagButton;
