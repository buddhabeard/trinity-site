import { useEffect, useState } from "react";
import axios from "axios";
import parse from "html-react-parser";

import type Posts from "../interfaces/Posts";
import type { Post } from "../interfaces/Posts";
import CategorySelect from "./CategorySelect";
import {
  getCategoryParam,
  getPostCategory,
  postDate,
  postsByPostDate,
} from "../utils";
import FeaturePost from "./FeaturePost";
import Pill from "./Pill";
import Logo from "./Logo";

export type BlogPostsGridProps = {
  posts: Posts;
};

type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

const initPosts = {
  data: [] as Posts["data"],
  meta: {
    pagination: {
      page: 0,
      pageSize: 0,
      pageCount: 0,
      total: 0,
    } as Pagination,
  },
};

const baseURL = "https://trinity-cms.onrender.com/api/posts";

const hasImage = (post: Post) => post?.attributes?.image?.data;

const BlogPostsGrid = () => {
  // @ts-ignore
  const [posts, setPosts] = useState<Posts>(initPosts);
  const [filteredPosts, setFilteredPosts] = useState<Posts>(initPosts);
  const [showFeaturePost, setShowFeaturePost] = useState<boolean>(false);

  const fetchPosts = async () =>
    await axios.get(`${baseURL}?populate=*&sort=publishedAt:desc`);

  useEffect(() => {
    fetchPosts().then((posts) => {
      setPosts(posts.data);
    });
  }, []);

  useEffect(() => {
    const catP = getCategoryParam();
    if (catP) onCategorySelect(catP);
  }, [posts]);

  const onCategorySelect = (cat: string) => {
    let filtered = {
      data: postsByPostDate(posts.data).filter((p) =>
        p.attributes.categories?.data.find((d) => d.attributes.name === cat)
      ),
      meta: posts.meta,
    };

    const featureOK =
      cat === "General" || cat === "Blog Article" || cat === typeof undefined;

    if (featureOK) {
      setShowFeaturePost(true);
    } else {
      setShowFeaturePost(false);
    }

    if (filtered.data.length === 0) {
      setFilteredPosts(posts);
    } else {
      // @ts-ignore
      setFilteredPosts(filtered);
    }
  };

  const handleCategoryClick = (post: Post): void => {
    const cat = getPostCategory(post);
    window.location.href = `${window.location.origin}/blog?category=${cat}`;
  };

  const handleLikeClicked = (post: Post) => async () => {
    // let likeCount = 0;
    // if (post.attributes?.likes) {
    //   likeCount = likeCount + 1;
    // } else {
    //   likeCount = 1;
    // }
    // const data = { ...post.attributes, likes: likeCount };
    // console.log(data);
    // const response = await axios.put(
    //   `${baseURL}/${post.id}`,
    //   { data },
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${
    //         import.meta.env.PUBLIC_STRAPI_LIKES_API_KEY
    //       }`,
    //     },
    //   }
    // );
    // console.log(response.data);
  };

  return (
    <div>
      <CategorySelect
        clearFilter={filteredPosts.data.length === 0}
        onClick={onCategorySelect}
      />

      {showFeaturePost ? <FeaturePost /> : null}

      <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-auto gap-12 posts-section">
        {filteredPosts.data.map((post) => (
          <div key={post.id} className="post-preview grid grid-cols-3">
            <div className="flex items-start justify-center col-span-1">
              {hasImage(post) ? (
                <a href={`/blog/${post.attributes.slug}`}>
                  <img
                    className="max-h-[128px] pl-4 lg:px-4 xl:px-4 object-cover"
                    src={post.attributes.image.data.attributes.url}
                    alt={post.attributes.title}
                  />
                </a>
              ) : (
                <div className="flex items-center justify-center w-3/4 bg-white shadow">
                  <Logo />
                </div>
              )}
            </div>

            <div className="flex flex-col gap-1 col-span-2 pl-4 lg:pl-0 xl:pl-0">
              <div className="post-date text-gray-500 text-sm font-normal font-inter leading-tight">
                <div className="flex items-center mb-4">
                  <Pill
                    color="teal"
                    bg="white"
                    onClick={() => handleCategoryClick(post)}
                    classes="text-xs border-2 shadow-darkBlue"
                  >
                    {getPostCategory(post)}
                  </Pill>
                  <div className="date-text ml-4">
                    {new Date(postDate(post)).toLocaleDateString("en-US", {
                      dateStyle: "long",
                    })}
                  </div>
                </div>

                {/* @TODO: move to like component to init with heart-empy.svg and when clicked heart-filled */}
                <button onClick={handleLikeClicked(post)}>
                  <svg
                    className="text-red-400 w-6 h-auto fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
                  </svg>
                </button>
              </div>
              <div className="text-darkBlue text-xl font-semibold font-inter leading-7">
                <a href={`/blog/${post.attributes.slug}`}>
                  {post.attributes.title}
                </a>
              </div>

              <div className="overflow-hidden max-h-[96px] lg:mb-2">
                {parse(post.attributes.content)}
              </div>

              <a
                href={`/blog/${post.attributes.slug}`}
                className="text-teal text-base font-semibold font-inter leading-normal"
              >
                Read full story
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* put that pagination right hurrr */}
    </div>
  );
};

export default BlogPostsGrid;
