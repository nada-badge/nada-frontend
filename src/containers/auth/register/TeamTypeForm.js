import React from 'react';
import TeamTypeList from '../../../components/auth/TeamType/TeamTypeList';
import Title from '../../../components/auth/Title';

export const TeamTypeForm = () => {
  return (
    <div>
      <Title text={'단체 종류를'} />
      <TeamTypeList />
    </div>
  );
};
