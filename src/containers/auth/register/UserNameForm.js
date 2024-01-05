import { useQuery } from '@tanstack/react-query';
import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import client from '../../../lib/api/client';
import { authSelector } from '../../../modules/auth';
import { produce } from 'immer';
import CheckList from '../../../components/auth/CheckList/CheckList';
import { LoginBtn, InputBox } from '../../../styles/Login';
import Title from '../../../components/auth/Title';
import Caution from '../../../components/auth/Caution';

const UserNamePage = ({ dispatchField, onSubmit, order, type }) => {
  const [error, setError] = useState(null); // error 메세지 관리
  const [check, setCheck] = useState([
    { id: 'userName_length', text: '1-8자', checked: false },
    { id: 'userName_words', text: '한글 또는 영문', checked: false },
  ]); // error 메세지 관리

  const userName = useSelector(authSelector(type, 'userName')); // userName 상태 가져오기

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
        setError(data ? null : '중복된 닉네임 입니다.');
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
    <>
      <Title text={'사용할 닉네임을'} />
      <form onSubmit={handleFormSubmit} id={order}>
        <InputBox>
          <input
            name="userName"
            placeholder="닉네임"
            onChange={dispatchField}
            value={userName}
            required
          />
          <CheckList list={check} />
          {error && <Caution error={error} />}
        </InputBox>
      </form>
      <LoginBtn form={order}>
        <div>다음</div>
      </LoginBtn>
    </>
  );
};

export default UserNamePage;
