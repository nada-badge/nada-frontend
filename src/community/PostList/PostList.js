import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { communitySelector } from "../../module/CommunityStatus";
import PostItem from "./PostItem";
import client from "../../lib/api/client";
//import useCommunityList from "../../module/queries/CommunityQuery";

const PostList = () => {
  const [cardsList, setCardsList] = useState([]);
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

  return (
    <div>
      {cardsList.map((card) => (
        <PostItem key={card.id} card={card} />
      ))}
    </div>
  );
};

export default PostList;
