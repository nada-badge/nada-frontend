/** Dropdown community 메인 페이지의 filter 컴포넌트 */
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { communitySelector, setField } from '../../modules/Community/community';
import {
  Dropdown,
  TextWarpper,
  Img,
} from '../../styles/Community/DropdownStyle';

export const DropDown = ({ text, id }) => {
  const dispatch = useDispatch();

  const [state, setState] = useState('unselected');
  const cases = [
    { text: 'area', all: '전국' },
    { text: 'field', all: '전체' },
    { text: 'category', all: '전체' },
  ];
  //해당 dropDown이 표현하는 area/field/category 의 선택값 불러오기
  const select = useSelector(
    communitySelector('subButtonSelect', cases[id].text),
  );
  const closeState = cases[id].all === select[0] ? 'unselected' : 'selected';
  //현재 community 메인페이지에서 클린된 filter의 이름 불러오기
  const isOpen = useSelector(communitySelector('buttonSelect', 'filter'));

  // 활성화된 filter 버튼을 클릭했다면 비활성화, 비활성화된 filter를 눌렀다면 활성화
  const onClicks = () => {
    const nextState = isOpen === text ? closeState : 'opened';
    dispatch(
      setField({
        form: 'buttonSelect',
        key: 'filter',
        value: nextState === 'opened' ? text : '',
      }),
    );
    setState(nextState);
  };

  // filter_A버튼이 열려있는 상태로 filter_B버튼이 클릭되면 filter_A버튼은 닫기
  useEffect(() => {
    if (state === 'opened' && text !== isOpen) {
      setState(closeState);
    }
    //state === "selected" && isOpen === undefined && setState(closeState); 보류코드
  }, [isOpen]);

  return (
    <Dropdown
      className={state}
      onClick={() => {
        onClicks();
      }}
    >
      <TextWarpper className={state}>{text}</TextWarpper>
      <Img className={state} />
    </Dropdown>
  );
};

DropDown.propTypes = {
  type: PropTypes.oneOf(['unselected', 'selected', 'opened']),
  text: PropTypes.string,
};
