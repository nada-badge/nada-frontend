import { Button, TextWarpper } from '../../styles/Community/SelectButton';

const TagButton = ({ tag }) => {
  return (
    <Button>
      <TextWarpper>{tag}</TextWarpper>
    </Button>
  );
};
export default TagButton;
