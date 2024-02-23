export const ReportedCommentList = ({ data }) => {
  console.log('data :', data.data);
  return (
    <div>
      {data && data.data.map((comment) => <div>{comment.content}</div>)}
    </div>
  );
};
