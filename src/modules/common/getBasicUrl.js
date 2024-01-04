/**getBasicUrl 신고 외 모달이 열린 위치에 따라 쿼리에 사용할 api, idData를 전처리해주는 컴포넌트*/

const getBasicUrl = (position, PostDetail, activity = '') => {
  const positionsConfig = {
    activity: { url: '/activity', idData: activity._id },
    post: {
      url: '/community/post',
      idData: PostDetail.PostDetail._id,
    },
    comment: {
      url: `/community/comment/${PostDetail.PostDetail._id}`,
      idData: PostDetail.Comment._id,
    },
    reply: {
      url: `/community/reply/${PostDetail.PostDetail._id}/${PostDetail.Comment._id}`,
      idData: PostDetail.Comment.reply_id,
    },
  };

  return positionsConfig[position] || {};
};

export default getBasicUrl;
