import { useQuery } from '@tanstack/react-query';
import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import client from '../../../lib/api/client';
import { userNameSelector } from '../../../modules/auth';
import { produce } from 'immer';
import CheckList from '../../../components/auth/CheckList/CheckList';
import {
  Title,
  InputWrapper,
  Form,
  ErrorMessage,
  Caution,
} from '../../../styles/Register';
import Button from '../../../components/auth/Button';

const inputGuide = {
  team: '단체 이름을',
  personal: '사용할 닉네임을',
};

const errorMessages = {
  userName_duplicate: '중복된 닉네임 입니다.',
};

const UserNamePage = ({ dispatchField, onSubmit, order, type }) => {
  const [error, setError] = useState(null); // error 메세지 관리
  const [check, setCheck] = useState([
    { id: 'userName_length', text: '1-8자', checked: false },
    { id: 'userName_words', text: '한글 또는 영문', checked: false },
  ]); // error 메세지 관리

  const userName = useSelector(userNameSelector); // userName 상태 가져오기

  // userName 중복 검사하기
  const { refetch } = useQuery({
    queryKey: ['getUserName'],
    queryFn: async () => {
      const { data } = await client.get('user/userName', {
        params: { userName: userName },
      });
      return data.result;
    },
  });

  const checkUserName = useCallback(() => {
    setCheck(
      produce((draft) => {
        draft[0].checked = userName.length >= 1 && userName.length <= 8;
        const textRegex = new RegExp(/^[가-힣a-zA-Z]+$/);
        draft[1].checked = textRegex.test(userName);
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
      const isAllUserNameChecked = check.reduce(
        (acc, current) => acc && current.checked,
        true,
      );
      if (isAllUserNameChecked) {
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
          <CheckList list={check} />
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
      <Button form={order} text={'다음'} />
    </div>
  );
};

export default UserNamePage;
