import { useState, useEffect } from 'react';
import { produce } from 'immer';
import { useSelector } from 'react-redux';
import { passwordSelector } from '../../../modules/auth';
import {
  Title,
  InputWrapper,
  Form,
  CheckListBox,
  CheckList,
  ErrorMessage,
  ButtonBox,
} from '../../../styles/Register';

const PasswordForm = ({ dispatchField, onSubmit, order }) => {
  // error 메세지 관리하기
  const [check, setCheck] = useState({
    password: {
      length: false,
      text: false,
      special: false,
    },
    passwordConfirm: false,
  });
  // 버튼 투명도, 비활성화 상태 관리
  const [opacity, setOpacity] = useState(0.3);

  // password 상태 가져오기
  const { password, passwordConfirm } = useSelector(passwordSelector);

  // 비밀번호 유효성 검사
  const checkPassword = (value) => {
    setCheck(
      produce((draft) => {
        draft.password.length = value.length >= 8 && value.length <= 16;
        const textRegex = new RegExp(/(?=.*[a-zA-Z])(?=.*[0-9])/);
        const specialRegex = new RegExp(/[!@#$%^&*]/);
        draft.password.text = textRegex.test(value);
        draft.password.special = specialRegex.test(value);
      }),
    );
    // '비밀번호 확인'에 값이 있으면 '일치'까지 검사하기
    if (passwordConfirm) {
      checkPasswordConfirm({ value, password });
    }
  };

  // 비밀번호 일치 검사
  const checkPasswordConfirm = ({ password, value }) => {
    setCheck(
      produce((draft) => {
        draft.passwordConfirm = password === '' ? false : password === value;
      }),
    );
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    // redux에 상태 반영하기
    dispatchField(e);

    if (name === 'password') {
      checkPassword(value); // 비밀번호 유효성 검사
    }
    if (name === 'passwordConfirm') {
      checkPasswordConfirm({ password, value }); // 비밀번호 일치 검사
    }
  };

  useEffect(() => {
    // check 상태 변경시, 버튼 투명도, 활성화 상태 업데이트
    const { length, text, special } = check.password;
    const isValid = length && text && special && check.passwordConfirm;
    setOpacity(isValid ? 1 : 0.3);
  }, [check]);

  return (
    <div>
      <Title>
        <h1>
          사용할 비밀번호를
          <br />
          입력해 주세요
        </h1>
      </Title>
      <Form onSubmit={onSubmit} id={order}>
        <div>
          <InputWrapper $position>
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              onChange={onChange}
              value={password}
              required
            />
          </InputWrapper>
          <CheckListBox>
            <CheckList $position>
              {check.password.length ? (
                <img
                  className="check"
                  alt="Check"
                  src="https://generation-sessions.s3.amazonaws.com/38b27749be3d915368d8e6ccd4ebc802/img/check-2.svg"
                />
              ) : (
                <img
                  className="check"
                  alt="Check"
                  src="https://generation-sessions.s3.amazonaws.com/a978d180a1bb500ecf9724a4add382cf/img/check-3.svg"
                />
              )}
              <ErrorMessage>8-16자</ErrorMessage>
            </CheckList>
            <CheckList $position={{ left: 80 }}>
              {check.password.text ? (
                <img
                  className="check"
                  alt="Check"
                  src="https://generation-sessions.s3.amazonaws.com/38b27749be3d915368d8e6ccd4ebc802/img/check-2.svg"
                />
              ) : (
                <img
                  className="check"
                  alt="Check"
                  src="https://generation-sessions.s3.amazonaws.com/a978d180a1bb500ecf9724a4add382cf/img/check-3.svg"
                />
              )}
              <ErrorMessage>영문 대, 소문자 포함</ErrorMessage>
            </CheckList>
            <CheckList $position={{ left: 240 }}>
              {check.password.special ? (
                <img
                  className="check"
                  alt="Check"
                  src="https://generation-sessions.s3.amazonaws.com/38b27749be3d915368d8e6ccd4ebc802/img/check-2.svg"
                />
              ) : (
                <img
                  className="check"
                  alt="Check"
                  src="https://generation-sessions.s3.amazonaws.com/a978d180a1bb500ecf9724a4add382cf/img/check-3.svg"
                />
              )}
              <ErrorMessage>특수문자 포함</ErrorMessage>
            </CheckList>
          </CheckListBox>

          <div>
            <InputWrapper $position={{ top: 109 }}>
              <input
                type="password"
                name="passwordConfirm"
                placeholder="한 번 더 입력해주세요."
                onChange={onChange}
                value={passwordConfirm}
                required
              />
            </InputWrapper>
            <div>
              <CheckList $position={{ top: 165 }}>
                {check.passwordConfirm ? (
                  <img
                    className="check"
                    alt="Check"
                    src="https://generation-sessions.s3.amazonaws.com/38b27749be3d915368d8e6ccd4ebc802/img/check-2.svg"
                  />
                ) : (
                  <img
                    className="check"
                    alt="Check"
                    src="https://generation-sessions.s3.amazonaws.com/a978d180a1bb500ecf9724a4add382cf/img/check-3.svg"
                  />
                )}
                <ErrorMessage>비밀번호 일치</ErrorMessage>
              </CheckList>
            </div>
          </div>
        </div>
      </Form>
      <div>
        <ButtonBox form={order} style={{ opacity }} disabled={opacity !== 1}>
          <div>다음</div>
        </ButtonBox>
      </div>
    </div>
  );
};
export default PasswordForm;
