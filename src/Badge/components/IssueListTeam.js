import { useSelector } from 'react-redux';
import { RightArrowSvg } from '../../icon/Login/RightArrowSvg';
import { FixedLoginBtn } from '../containers/register/ShapeForm';
import { TextWithSvg } from '../../styles/Survey';

const IssueListTeam = () => {
  const teams = useSelector(({ badge }) => badge.teams);

  return (
    <>
      {teams.map((team) => (
        <TextWithSvg>
          <div>{team}</div>
          <RightArrowSvg width={8} height={16} />
        </TextWithSvg>
      ))}
      <FixedLoginBtn disabled={false}>
        <div>다음</div>
      </FixedLoginBtn>
    </>
  );
};

export default IssueListTeam;
