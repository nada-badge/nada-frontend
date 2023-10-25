import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { communitySelector } from "../../module/Community/CommunityStatus";
import { changeField } from "../../module/Community/PostDetail";
import PostItem from "./PostItem";
import client from "../../lib/api/client";
//import useCommunityList from "../../module/queries/CommunityQuery";

const PostList = () => {
  const [cardsList, setCardsList] = useState([]);
  const dispatch = useDispatch();
  const mainCategory = useSelector(
    communitySelector("buttonSelect", "maincategory")
  );

  console.log("postList : ", cardsList);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const resp = await client.get("/community/post/list", {
          params: { mainCategory: mainCategory },
        });
        console.log("fetchdata resp : ", resp);
        setCardsList(resp.data.posts);
      } catch (e) {
        console.log(e);
      }
    };
    FetchData();
  }, []);

  const setData = (card) => {
    dispatch(changeField({ form: "PostDetail", value: card }));
  };

  return (
    <div>
      {cardsList.map((card) => (
        <Link
          onClick={() => setData(card)} //3) 리덕스 activities에 클릭된 활동 데이터를 삽입
          to={`/community/PostDetail/${card._id}`}
        >
          <PostItem key={card.id} card={card} />
        </Link>
      ))}
    </div>
  );
};

export default PostList;
