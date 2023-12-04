import { Button, TextWarpper } from '../../styles/mommunity/SelectButton';

const TagButton = ({ tag }) => {
  return (
    <Button>
      <TextWarpper>{tag}</TextWarpper>
    </Button>
  );
};
export default TagButton;
