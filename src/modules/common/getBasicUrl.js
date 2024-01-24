/**getBasicUrl 신고 외 모달이 열린 위치에 따라 쿼리에 사용할 api, idData를 전처리해주는 컴포넌트*/

const getBasicUrl = (
  position,
  PostDetail = '',
  comment = '',
  activity = '',
) => {
  const positionsConfig = {
    activity: { url: '/activity', idData: activity._id },
    post: {
      url: '/community/post',
      idData: PostDetail.PostData.data._id,
    },
    comment: {
      url: `/community/comment/${comment.post_id}`,
      idData: comment.comment_id,
    },
    reply: {
      url: `/community/reply/${comment.post_id}/${comment.comment_id}`,
      idData: comment.reply_id,
    },
  };

  return positionsConfig[position] || {};
};

export default getBasicUrl;
