import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { communitySelector } from "../../module/Community/community";
import { changeField } from "../../module/Community/postDetail";
import PostItem from "../../components/community/PostList/PostItem";
import client from "../../lib/api/client";

const PostList = () => {
  const [cardsList, setCardsList] = useState([]);
  const dispatch = useDispatch();
  const mainCategory = useSelector(
    communitySelector("buttonSelect", "maincategory")
  );
  const area = useSelector(communitySelector("subButtonSelect", "area"));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await client.get("/community/post/list", {
          params: { mainCategory: mainCategory },
        });
        setCardsList(resp.data.posts.reverse()); // 상태 업데이트를 비동기 작업 이후로 옮겼습니다
      } catch (e) {
        console.log(e);
      }
    };
    fetchData(); // 비동기 작업을 호출하여 데이터 가져오기
  }, [mainCategory]);

  const setData = (card) => {
    dispatch(changeField({ form: "PostDetail", value: card }));
  };

  return (
    <div>
      {cardsList.map((card) => (
        <Link
          to={`/community/PostDetail/${card._id}`}
          key={card._id}
          onClick={() => setData(card)}
        >
          <PostItem key={card._id} card={card} />
        </Link>
      ))}
    </div>
  );
};

export default PostList;