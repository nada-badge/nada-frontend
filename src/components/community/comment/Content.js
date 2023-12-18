import { applyFontStyles } from '../../../styles/fontStyle';
import { CautionSvg } from '../../../icon/CautionSvg';

const Content = ({ comment }) => {
  const Layout = {
    display: 'flex',
    flexDirection: 'row,',
    alignItems: 'center',
    gap: '4px',
  };

  const DeleteText = applyFontStyles({
    font: 'body-01',
    color: 'var(--myspec-gray-scalegray-600)',
  });

  if (comment.isDeleted) {
    return (
      <div style={Layout}>
        <CautionSvg />
        <div style={DeleteText}>댓글이 삭제되었어요</div>
      </div>
    );
  } else {
    return <div className="content">{comment.content}</div>;
  }
};

export default Content;
