/** SelectAllButton  region, field, category 모달 내 전체를 아우르는 버튼 */
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { filterSelector, initializeForm, addField } from '../../modules/filter';
import { Button, TextWarpper } from '../../styles/Community/SelectButton';

export const SelectAllButton = () => {
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState();
  const nowModal = useSelector(filterSelector('buttonSelect', 'filter'));

  const cases = [
    { id: 0, key: 'region', all: '전국' },
    { id: 1, key: 'field', all: '전체' },
    { id: 2, key: 'category', all: '전체' },
  ];

  const num = ['지역', '분야', '종류'].indexOf(nowModal);
  const { key, all } = cases[num !== -1 ? num : cases.length - 1];

  const state = useSelector(filterSelector('subButtonSelect', key));

  const onClickButton = () => {
    if (!state.includes(all)) {
      dispatch(initializeForm({ form: 'subButtonSelect', key: key }));
      dispatch(
        addField({
          form: 'subButtonSelect',
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
    <Button className={classNames({ isActive })} onClick={onClickButton}>
      <TextWarpper className={classNames({ isActive })}>{all}</TextWarpper>
    </Button>
  );
};
