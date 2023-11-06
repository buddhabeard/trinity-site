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
  data: [],
  meta: {
    pagination: {
      page: 0,
      pageSize: 0,
      pageCount: 0,
      total: 0,
    },
  },
};

const hasImage = (post: Post) => post?.attributes?.image?.data;

const BlogPostsGrid = () => {
  // @ts-ignore
  const [posts, setPosts] = useState<Posts>(initPosts);
  const [filteredPosts, setFilteredPosts] = useState<Posts>(initPosts);
  const [pagination, setPagination] = useState<Pagination>();
  const [showFeaturePost, setShowFeaturePost] = useState<boolean>(false);

  const fetchPosts = async () =>
    await axios.get(
      "https://trinity-cms.onrender.com/api/posts?populate=*&sort=publishedAt:desc"
    );

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
                {post.attributes?.likes && (
                  <span>
                    &middot;
                    <svg
                      className="inline"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.00065 1.80791C9.87981 -0.0171648 12.7838 0.0434248 14.5938 2.00598C16.4039 3.96853 16.4661 7.0952 14.7826 9.13447L7.99977 16.4849L1.21708 9.13447C-0.466353 7.0952 -0.403426 3.96358 1.40586 2.00598C3.21719 0.0461513 6.11604 -0.019874 8.00065 1.80791ZM13.4613 3.2288C12.2621 1.92858 10.3259 1.87584 9.06943 3.09617L8.00137 4.13344L6.93275 3.09698C5.67268 1.87494 3.73998 1.9287 2.53721 3.23007C1.34544 4.51954 1.28561 6.58477 2.3839 7.94882L7.99977 14.0347L13.6158 7.94882C14.7145 6.58425 14.6549 4.52295 13.4613 3.2288Z"
                        fill="#073E6D"
                      />
                    </svg>
                  </span>
                )}
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
