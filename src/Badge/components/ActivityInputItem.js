import styled from 'styled-components';
import { Dropdown, TextWarpper } from '../../Community/styles/DropdownStyle';
import { FilterHandler } from '../../icon/FilterHandler';
import { X } from '../../icon/X';
import { InputBox } from '../../styles/Survey';
import { applyFontStyles } from '../../styles/fontStyle';
import { useDispatch } from 'react-redux';
import { deleteActivities } from '../modules/redux/badge';

const InputContainer = styled(InputBox)`
  margin: 40px auto;
  & > .inputWrapper {
    display: flex;
    justify-content: space-between;

    input {
      background: var(--myspec-gray-scalegray-100);
      width: calc(100% - 12px - 16px); // 전체화면 - X.svg - gap
    }
  }

  & > .dateWrapper {
    display: flex;

    & > span {
      ${applyFontStyles({
        font: 'title-01',
        color: 'var(--myspec-gray-scalegray-500)',
      })}
    }
  }
`;

const ActivityInputItem = ({ index }) => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(deleteActivities(index));
  };
  return (
    <InputContainer>
      <div className="inputWrapper">
        <input
          name="activityList"
          placeholder="내용을 입력해주세요."
          required
        />
        <div onClick={() => onClick()}>
          <X size={12} bold={2} />
        </div>
      </div>
      <div className="dateWrapper">
        <Dropdown className={'unselected'}>
          <TextWarpper className={'unselected'}>2023.01</TextWarpper>
          <FilterHandler className={'unselected'} />
        </Dropdown>
        <span> ~ </span>
        <Dropdown className={'unselected'}>
          <TextWarpper className={'unselected'}>2023.02</TextWarpper>
          <FilterHandler className={'unselected'} />
        </Dropdown>
      </div>
    </InputContainer>
  );
};

export default ActivityInputItem;
