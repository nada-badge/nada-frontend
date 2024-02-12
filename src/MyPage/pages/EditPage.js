import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import { useParams } from 'react-router-dom';
import EmailForm from '../../Auth/containers/register/EmailForm';
import { changeField } from '../../Auth/modules/redux/auth';
import { RegisterBox } from '../../styles/Survey';

const EditPage = () => {
  const params = useParams();
  const type = params._type;

  const mapContainer = {
    email: EmailForm,
    // userName: UserNamePage,
    // phoneNumber: PhoneNumberForm,
    // password: PasswordForm,
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
        <Component
          dispatchField={dispatchField}
          onSubmit={() => {}} // 서버 업데이트, 뒤로 가기
          order={0}
          type={'personal'}
        />
      </RegisterBox>
    </div>
  );
};

export default EditPage;
