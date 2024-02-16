/**ReportsButton 신고된 게시글을 출력할지 선택하는 버튼 */
import { TextWarpper } from '../../Community/styles/SelectButton';

export const ReportsButton = ({ showReports, setShowReports }) => {
  const setReport = () => {
    setShowReports(!showReports);
  };

  return (
    <TextWarpper onClick={setReport} className={showReports ? 'isActive' : ''}>
      신고된 게시글
    </TextWarpper>
  );
};
