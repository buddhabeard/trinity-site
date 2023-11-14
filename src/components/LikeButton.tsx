import { useState } from "react";
import type { Post } from "../interfaces/Posts";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/24/solid";
import axios from "axios";

const baseURL = "https://trinity-cms.onrender.com/api/posts";

const LikeButton = ({ post }: { post: Post }) => {
  const [likeClicked, setLikeClicked] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(
    post.attributes?.likes || 0
  );

  const likesText = () => {
    if (likeCount === 0) {
      return "Like";
    }

    return `${likeCount} Likes`;
  };

  const handleLikeClicked = async () => {
    if (likeClicked) return;

    setLikeClicked(true);
    setLikeCount(likeCount + 1);

    await axios.put(
      `${baseURL}/${post.id}`,
      {
        data: {
          likes: likeCount + 1,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            import.meta.env.PUBLIC_STRAPI_LIKES_API_KEY
          }`,
        },
      }
    );
  };
  return !likeClicked ? (
    <div className="flex items-center">
      <div className="mr-2">{likesText()}</div>
      <button onClick={handleLikeClicked}>
        <HeartIcon height={25} width={25} color="red" />
      </button>
    </div>
  ) : (
    <div className="flex items-center">
      <div className="mr-2">{likesText()}</div>
      <button onClick={handleLikeClicked}>
        <HeartIconFilled height={25} width={25} color="red" />
      </button>
    </div>
  );
};

export default LikeButton;
