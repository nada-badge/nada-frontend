import React from 'react';
import TeamTypeList from '../../../components/auth/TeamType/TeamTypeList';
import Title from '../../../components/auth/Title';
import { Form } from '../../../styles/Register';
import Button from '../../../components/auth/Button';

export const TeamTypeForm = ({ order, onSubmit }) => {
  return (
    <div>
      <Title text={'단체 종류를'} />
      <Form id={order} onSubmit={onSubmit}>
        <TeamTypeList />
      </Form>
      <Button
        form={order}
        text={'다음'}
        style={{ position: 'relative', top: '30px' }}
      />
    </div>
  );
};
