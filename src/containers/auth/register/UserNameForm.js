import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import client from '../../../lib/api/client';
import { userNameSelector } from '../../../modules/auth';
import { produce } from 'immer';
import {
  Title,
  InputWrapper,
  Form,
  CheckListBox,
  CheckList,
  ErrorMessage,
  Caution,
  ButtonBox,
} from '../../../styles/Register';

const UserNamePage = ({ dispatchField, onSubmit, order }) => {
  const [isBlur, setBlur] = useState(false); // 키보드 포커스 감지
  const [error, setError] = useState(null); // error 메세지 관리
  const [check, setCheck] = useState({ length: false, text: false }); // error 메세지 관리
  const [opacity, setOpacity] = useState(0.3);

  const errorMessages = {
    userName_duplicate: '중복된 닉네임 입니다.',
  };
  const userName = useSelector(userNameSelector); // userName 상태 가져오기

  // userName 중복 검사하기
  const { refetch } = useQuery({
    queryKey: ['getUserName'],
    queryFn: async () => {
      const { data } = await client.get('user/checkUserName', {
        params: { userName: userName },
      });
      setError(data.result ? false : errorMessages.userName_duplicate);
      return data;
    },
    enabled: isBlur,
  });

  const onBlur = () => {
    setBlur(true);
    refetch();
    setOpacity(check.length && check.text ? (error ? 0.3 : 1) : 0.3);
  };

  const textRegex = new RegExp(/^[가-힣a-zA-Z]+$/);

  const onChange = (e) => {
    dispatchField(e);
    const { value } = e.target;

    setCheck(
      produce((draft) => {
        draft.length = value.length >= 1 && value.length <= 8;
        draft.text = textRegex.test(value);
      }),
    );
  };

  useEffect(() => {
    const { length, text } = check;
    const isValid = length && text;
    console.log(isValid);
    setOpacity(isValid ? (error ? 0.3 : 1) : 0.3);
  }, [check, error]);

  return (
    <div>
      <Title>
        <h1>
          사용할 닉네임을
          <br />
          입력해 주세요
        </h1>
      </Title>
      <Form onSubmit={onSubmit} id={order}>
        <div>
          <InputWrapper $position>
            <input
              name="userName"
              placeholder="닉네임"
              onChange={onChange}
              value={userName}
              onBlur={onBlur}
              required
            />
          </InputWrapper>
          <CheckListBox>
            <CheckList $position>
              {check.length ? (
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
              <ErrorMessage>1-8자</ErrorMessage>
            </CheckList>
            <CheckList $position={{ left: 80 }}>
              {check.text ? (
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
              <ErrorMessage>한글 또는 영문</ErrorMessage>
            </CheckList>
          </CheckListBox>
        </div>
      </Form>
      {error && (
        <Caution $position={{ top: 215 }}>
          <div className="ImagWrapper">
            <img
              alt="Img"
              src="https://generation-sessions.s3.amazonaws.com/2332251fd8ff291f5e2010e035672d11/img/-.svg"
            />
          </div>
          <ErrorMessage>{error}</ErrorMessage>
        </Caution>
      )}
      <div>
        <ButtonBox form={order} style={{ opacity }} disabled={opacity !== 1}>
          <div>다음</div>
        </ButtonBox>
      </div>
    </div>
  );
};

export default UserNamePage;
