import React, { useEffect, useCallback, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import { useParams } from 'react-router-dom';
import { changeField } from '../../Auth/modules/redux/auth';
import { RegisterBox } from '../../styles/Survey';

const EmailForm = React.lazy(
  () => import('../../Auth/containers/register/EmailForm'),
);
const PasswordForm = React.lazy(
  () => import('../../Auth/containers/register/PasswordForm'),
);
const UserNameForm = React.lazy(
  () => import('../../Auth/containers/register/UserNameForm'),
);
const PhoneNumberForm = React.lazy(
  () => import('../../Auth/containers/register/PhoneNumberForm'),
);

const EditPage = () => {
  const params = useParams();
  const type = params._type;

  const mapContainer = {
    email: EmailForm,
    userName: UserNameForm,
    phoneNumber: PhoneNumberForm,
    password: PasswordForm,
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

  // 입력 값을 상태에 반영하기
  const dispatchField = useCallback((e) => {
    const { value, name } = e.target;
    const fieldType = `${'personal'}_register`;
    dispatch(changeField({ form: fieldType, key: name, value }));
  }, []);

  return (
    <div>
      <RegisterBox>
        <Suspense fallback={<div></div>}>
          <Component
            dispatchField={dispatchField}
            onSubmit={() => {}} // 서버 업데이트, 뒤로 가기
            order={0}
            type={'personal'}
          />
        </Suspense>
      </RegisterBox>
    </div>
  );
};

export default EditPage;
