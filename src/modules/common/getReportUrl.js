/**getReportUrl 신고 시 모달이 열린 위치에 따라 쿼리에 사용할 api, idData를 전처리해주는 컴포넌트*/
const getReportUrl = ({ position, postData, comment }) => {
  const positionsConfig = {
    post: {
      url: '/community/post/report',
      idData: postData.data._id,
    },
    comment: {
      url: `/community/comment/report/${comment.post_id}`,
      idData: comment.comment_id,
    },
    reply: {
      url: `/community/reply/report/${comment.post_id}/${comment.comment_id}`,
      idData: comment.reply_id,
    },
  };

  return positionsConfig[position] || {};
};

export default getReportUrl;
