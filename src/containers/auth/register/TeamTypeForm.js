import React from 'react';
import { Title } from '../../../styles/Register';
import TeamTypeList from '../../../components/auth/TeamType/TeamTypeList';

export const TeamTypeForm = () => {
  return (
    <div>
      <Title>
        <h1>
          단체 종류를
          <br />
          선택해 주세요
        </h1>
      </Title>
      <TeamTypeList />
    </div>
  );
};
