/**toReport 신고 시 모달이 열린 위치에 따라 쿼리에 사용할 api, idData를 전처리해주는 컴포넌트*/
const toReport = (position, PostDetail) => {
  const positionsConfig = {
    post: {
      url: '/community/post/report',
      idData: PostDetail.PostDetail._id,
    },
    comment: {
      url: `/community/comment/report/${PostDetail.PostDetail._id}`,
      idData: PostDetail.Comment._id,
    },
    reply: {
      url: `/community/reply/report/${PostDetail.PostDetail._id}/${PostDetail.Comment._id}`,
      idData: PostDetail.Comment.reply_id,
    },
  };

  return positionsConfig[position] || {};
};

export default toReport;
