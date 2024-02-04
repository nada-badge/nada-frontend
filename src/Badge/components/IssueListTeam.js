// Redux를 사용해 팀 목록 및 개인 목록을 관리하고,
// 팀을 입력시, 해당 팀의 개인 목록을 표시하고 추가하는 기능을 제공합니다.
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RightArrowSvg } from '../../icon/Login/RightArrowSvg';
import { FixedLoginBtn } from '../containers/register/ShapeForm';
import { TextWithSvg } from '../../styles/Survey';
import IssueListInputItem from './IssueListInputItem';
import { addList } from '../modules/redux/badge';

const IssueListTeam = ({ onSubmit, list, setList }) => {
  const issueList = useSelector(({ badge }) => badge.issueList);
  const teams = useSelector(({ badge }) => badge.teams);

  const dispatch = useDispatch();

  const dispatchAddList = () => {
    dispatch(
      addList({
        type: 'issueList',
        value: {
          name: '',
          role: '',
          birth: '',
          email: '',
          number: '',
          team: '',
        },
      }),
    );
  };

  const TeamList = () => {
    return (
      <>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {teams.map((team) => (
            <TextWithSvg key={team} onClick={() => setList(team)}>
              <div>{team}</div>
              <RightArrowSvg width={8} height={16} />
            </TextWithSvg>
          ))}
        </div>
        <FixedLoginBtn onClick={onSubmit} disabled={false}>
          <div>다음</div>
        </FixedLoginBtn>
      </>
    );
  };

  const PeopleList = () => {
    return (
      <>
        <div
          style={{
            overflowY: 'scroll',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          {issueList.map((el, index) => (
            <IssueListInputItem key={index} content={el} index={index} />
          ))}
        </div>
        <FixedLoginBtn
          onClick={() => {
            dispatchAddList();
          }}
        >
          <div
            style={{
              backgroundColor: 'var(--myspec-gray-scalegray-100)',
              color: 'var(--myspec-gray-scalegray-900)',
            }}
          >
            정보 추가하기
          </div>
        </FixedLoginBtn>
      </>
    );
  };

  return (
    <>
      {list === 'index' && <TeamList />}
      {list !== 'index' && <PeopleList />}
    </>
  );
};

export default IssueListTeam;
