/**toDelete 모달이 열린 위치에 따라 쿼리에 사용할 api, idData를 매칭해주는
 */
const preSetForQuery = (position, PostDetail, activity = '') => {
  const positionsConfig = {
    activity: { url: '/activity', idData: activity._id },
    post: {
      url: '/community/post',
      idType: '_id',
      idData: PostDetail.PostDetail._id,
    },
    comment: {
      url: `/community/comment/${PostDetail.PostDetail._id}`,
      idType: 'comment_id',
      idData: PostDetail.Comment._id,
    },
    reply: {
      url: `/community/reply/${PostDetail.PostDetail._id}/${PostDetail.Comment._id}`,
      idType: 'reply_id',
      idData: PostDetail.Comment.reply_id,
    },
  };

  return positionsConfig[position] || {};
};

export default preSetForQuery;
