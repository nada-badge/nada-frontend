/**getReportUrl 신고 시 모달이 열린 위치에 따라 쿼리에 사용할 api, idData를 전처리해주는 컴포넌트*/
const getReportUrl = (position, PostDetail) => {
  const positionsConfig = {
    post: {
      url: '/community/post/report',
      idData: PostDetail.PostData.data._id,
    },
    comment: {
      url: `/community/comment/report/${PostDetail.Comment.post_id}`,
      idData: PostDetail.Comment.comment_id,
    },
    reply: {
      url: `/community/reply/report/${PostDetail.Comment.post_id}/${PostDetail.Comment.comment_id}`,
      idData: PostDetail.Comment.reply_id,
    },
  };

  return positionsConfig[position] || {};
};

export default getReportUrl;
