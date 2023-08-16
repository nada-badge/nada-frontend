import React, { useCallback, useState } from 'react';
import TeamTypeList from '../../../components/auth/TeamType/TeamTypeList';
import Title from '../../../components/auth/Title';
import { Form } from '../../../styles/Register';
import Button from '../../../components/auth/Button';

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

  const onClick = useCallback(
    (id) => {
      setTeamType(
        teamType.map((team) =>
          id === team.id
            ? { ...team, checked: !team.checked }
            : { ...team, checked: false },
        ),
      );
    },
    [teamType],
  );

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
