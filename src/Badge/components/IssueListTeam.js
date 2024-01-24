import { useSelector } from 'react-redux';
import { SpaceBetween } from '../../Search/components/SearchCategory';
import { RightArrowSvg } from '../../icon/Login/RightArrowSvg';

const IssueListTeam = () => {
  const teams = useSelector(({ badge }) => badge.teams);

  return (
    <SpaceBetween>
      <div>{team}</div>
      <RightArrowSvg width={8} height={16} />
    </SpaceBetween>
  );
};

export default IssueListTeam;
