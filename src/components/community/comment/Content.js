import { applyFontStyles } from '../../../styles/fontStyle';

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          fill="none"
          viewBox="0 0 16 17"
        >
          <circle cx="8" cy="8.5" r="7.3" stroke="#BBB" stroke-width="1.4" />
          <path
            fill="#BBB"
            d="m8.886 4.5-.137 5.533H7.401L7.264 4.5h1.622ZM7.2 11.583a.88.88 0 0 1 .886-.906c.468-.005.874.404.874.906 0 .508-.406.917-.874.917a.89.89 0 0 1-.886-.917Z"
          />
        </svg>
        <div style={DeleteText}>댓글이 삭제되었어요</div>
      </div>
    );
  } else {
    return <div className="content">{comment.content}</div>;
  }
};

export default Content;
