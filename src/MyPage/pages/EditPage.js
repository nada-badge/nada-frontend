import React, { useEffect, useCallback, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import { useParams } from 'react-router-dom';
import { RegisterBox } from '../../styles/Survey';
import usePatchInfo from '../modules/queries/usePatchInfo';
import { useState } from 'react';
import { changeField } from '../../Auth/modules/redux/auth';

const PasswordForm = React.lazy(
  () => import('../../Auth/containers/register/PasswordForm'),
);
const UserNameForm = React.lazy(
  () => import('../../Auth/containers/register/UserNameForm'),
);
const PhoneNumberForm = React.lazy(
  () => import('../../Auth/containers/register/PhoneNumberForm'),
);
const TeamNameForm = React.lazy(
  () => import('../../Auth/containers/register/TeamNameForm'),
);
const TeamTypeForm = React.lazy(
  () => import('../../Auth/containers/register/TeamTypeForm'),
);
const RepresentForm = React.lazy(
  () => import('../../Auth/containers/register/RepresentForm'),
);

const EditPage = () => {
  const params = useParams();
  const type = params._type;

  const mapContainer = {
    userName: UserNameForm,
    phoneNumber: PhoneNumberForm,
    password: PasswordForm,
    groupName: TeamNameForm,
    teamType: TeamTypeForm,
    represent: RepresentForm,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: 'back',
        text: '',
        isShowBottom: false,
      }),
    );
  }, []);

  const Component = mapContainer[type];

  const [value, setValue] = useState('');

  // 입력 값을 상태에 반영하기
  const dispatchField = useCallback((e) => {
    const { value: inputValue, name } = e.target;
    const fieldType = `${'personal'}_register`;
    dispatch(changeField({ form: fieldType, key: name, value: inputValue }));
    setValue(inputValue);
  }, []);

  const { mutate: update } = usePatchInfo();

  const patchInfo = () => {
    alert('submit');
    update({ type, value });
  };

  return (
    <div>
      <RegisterBox>
        <Suspense fallback={<div></div>}>
          <Component
            dispatchField={dispatchField}
            onSubmit={() => {
              patchInfo();
            }} // 서버 업데이트, 뒤로 가기
            order={0}
            type={'personal'}
          />
        </Suspense>
      </RegisterBox>
    </div>
  );
};

export default EditPage;
