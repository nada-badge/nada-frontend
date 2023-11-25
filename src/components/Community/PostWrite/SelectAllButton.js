/** SelectAllButton  region, field, category 모달 내 전체를 아우르는 버튼 */
import { useEffect } from 'react';
import classNames from 'classnames';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  postWriteSelector,
  initializeForm,
  addField,
  setField,
} from '../../../modules/Community/postWrite';
import { Button, TextWarpper } from '../../../styles/Community/SelectButton';

export const SelectAllButton = () => {
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState();
  const nowModal = useSelector(postWriteSelector('postWriteSelect', 'modal'));

  const cases = [
    { id: 1, key: 'region', all: '전국' },
    { id: 2, key: 'field', all: '전체' },
    { id: 3, key: 'category', all: '전체' },
  ];
  const key = cases[nowModal].key;
  const all = cases[nowModal].all;
  //region, field와 category의 타입차이로 인한 삼항 연산자
  const setStatus = key === 'category' ? setField : addField;

  const state = useSelector(postWriteSelector('postWriteSelect', key));

  const OnClickButton = () => {
    if (!state.includes(all)) {
      //전국,전체 버튼이 비활성화였다면 개별 버튼을 다 비활성화 후 해당 버튼 활성화
      dispatch(initializeForm({ form: 'postWriteSelect', key: key }));
      dispatch(
        setStatus({
          form: 'postWriteSelect',
          key: key,
          value: all,
        }),
      );
    }
  };

  useEffect(() => {
    setIsActive(state.includes(all));
  }, [state]);

  return (
    <Button className={classNames({ isActive })} onClick={OnClickButton}>
      <TextWarpper className={classNames({ isActive })}>{all}</TextWarpper>
    </Button>
  );
};
