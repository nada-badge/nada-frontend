import styled from 'styled-components';
import CheckListItem from './CheckListItem';

const CheckListBox = styled.div`
  height: 21px;
  position: relative;
  display: inline-flex;
  gap: 12px;
`;

const CheckList = ({ list }) => {
  return (
    <CheckListBox>
      {list.map((item) => (
        <CheckListItem text={item.text} key={item.id} checked={item.checked} />
      ))}
    </CheckListBox>
  );
};

export default CheckList;
