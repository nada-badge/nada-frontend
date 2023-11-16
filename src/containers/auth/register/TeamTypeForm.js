import React, { useCallback, useState, useEffect } from 'react';
import TeamTypeList from '../../../components/auth/TeamType/TeamTypeList';
import Title from '../../../components/auth/Title';
import { Form } from '../../../styles/Register';
import Button from '../../../components/auth/Button';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector, changeField } from '../../../modules/auth';

export const TeamTypeForm = ({ order, onSubmit }) => {
  const [teamType, setTeamType] = useState([
    { id: 11, text: '교내 동아리', checked: false },
    { id: 12, text: '연합 동아리', checked: false },
    { id: 13, text: '학회', checked: false },
    { id: 14, text: '학과', checked: false },
    { id: 15, text: '학생회', checked: false },
    { id: 21, text: '공공기관', checked: false },
    { id: 22, text: '사기업', checked: false },
  ]);

  const category = useSelector(authSelector('team', 'category')); // userName 상태 가져오기
  const dispatch = useDispatch();
  const onClick = useCallback(
    (id) => {
      setTeamType(
        teamType.map((team) =>
          id === team.id
            ? { ...team, checked: !team.checked }
            : { ...team, checked: false },
        ),
      );
      dispatch(
        changeField({
          form: 'team_register',
          key: 'category',
          value: id,
        }),
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [teamType],
  );

  // 뒤로가기시, 이전 category값이 동일하게 표시
  useEffect(() => {
    if (category) {
      setTeamType(
        teamType.map((team) =>
          category === team.id
            ? { ...team, checked: !team.checked }
            : { ...team, checked: false },
        ),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Title text={'단체 종류를'} />
      <Form id={order} onSubmit={onSubmit}>
        <TeamTypeList teamType={teamType} onClick={onClick} />
      </Form>
      <Button
        form={order}
        text={'다음'}
        style={{ position: 'relative', top: '30px' }}
      />
    </div>
  );
};
