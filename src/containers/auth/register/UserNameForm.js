import { useQuery } from '@tanstack/react-query';
import { useState, useEffect, useCallback } from 'react';
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

const inputGuide = {
  team: '단체 이름을',
  personal: '사용할 닉네임을',
};

const errorMessages = {
  userName_duplicate: '중복된 닉네임 입니다.',
};

const UserNamePage = ({ dispatchField, onSubmit, order, type }) => {
  const [error, setError] = useState(null); // error 메세지 관리
  const [check, setCheck] = useState({ length: false, text: false }); // error 메세지 관리

  const userName = useSelector(userNameSelector); // userName 상태 가져오기

  // userName 중복 검사하기
  const { refetch } = useQuery({
    queryKey: ['getUserName'],
    queryFn: async () => {
      const { data } = await client.get('user/checkUserName', {
        params: { userName: userName },
      });
      return data.result;
    },
  });

  const checkUserName = useCallback(() => {
    setCheck(
      produce((draft) => {
        draft.length = userName.length >= 1 && userName.length <= 8;
        const textRegex = new RegExp(/^[가-힣a-zA-Z]+$/);
        draft.text = textRegex.test(userName);
      }),
    );
  }, [userName]);

  // userName 입력이 변경될때마다 check 함수 실행하기
  useEffect(() => {
    checkUserName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userName, check]);

  const handleFormSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const { length, text } = check;
      console.log('length && text', length, text);
      if (length && text) {
        // 닉네임이 유효할때, 중복 검사 진행
        const { data } = await refetch();
        setError(data ? null : errorMessages.userName_duplicate);
        if (data) {
          onSubmit(e);
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [check, userName],
  );

  // 폰번호에서 뒤로가기시, 이전 닉네임과 check값이 동일하게 표시
  useEffect(() => {
    if (userName) {
      checkUserName();
      const { length, text } = check;
      console.log(length, text);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Title>
        <h1>
          {inputGuide[type]}
          <br />
          입력해 주세요
        </h1>
      </Title>
      <Form onSubmit={handleFormSubmit} id={order}>
        <div>
          <InputWrapper $position>
            <input
              name="userName"
              placeholder="닉네임"
              onChange={dispatchField}
              value={userName}
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
        <ButtonBox form={order}>
          <div>다음</div>
        </ButtonBox>
      </div>
    </div>
  );
};

export default UserNamePage;
