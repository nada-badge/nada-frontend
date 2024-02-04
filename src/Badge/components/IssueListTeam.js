import { useDispatch, useSelector } from 'react-redux';
import { RightArrowSvg } from '../../icon/Login/RightArrowSvg';
import { FixedLoginBtn } from '../containers/register/ShapeForm';
import { TextWithSvg } from '../../styles/Survey';
import IssueListInputItem from './IssueListInputItem';
import { addList } from '../modules/redux/badge';

const IssueListTeam = ({ onSubmit, teamName, setTeamName }) => {
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

  return (
    <>
      {teamName === '' && (
        <>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
          >
            {teams.map((team) => (
              <TextWithSvg
                onClick={() => {
                  setTeamName(team);
                }}
              >
                <div>{team}</div>
                <RightArrowSvg width={8} height={16} />
              </TextWithSvg>
            ))}
          </div>
          <FixedLoginBtn onClick={onSubmit} disabled={false}>
            <div>다음</div>
          </FixedLoginBtn>
        </>
      )}
      {teamName && (
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
      )}
    </>
  );
};

export default IssueListTeam;
