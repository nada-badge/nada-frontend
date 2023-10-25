import { useQuery } from "@tanstack/react-query";
import client from "../../lib/api/client";
import { useSelector } from "react-redux";
import { communitySelector } from "../CommunityStatus";

const useCommunityList = () => {
  const mainCategory = useSelector(
    communitySelector("buttonSelect", "maincategory")
  );

  return useQuery({
    //queryKey: ["getEmail"],
    queryFn: async () => {
      const { data } = await client.get("/community/post/list", {
        params: { category: mainCategory },
      });
      return data;
    },
    enable: false,
  });
};

export default useCommunityList;
