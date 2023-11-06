import { useEffect, useState } from "react";
import parse from "html-react-parser";
import axios from "axios";

import type { Image } from "../interfaces/Images";
import { postsByPostDate } from "../utils";

export type FeaturePostProps = {
  title: string;
  image: Image;
  content: string;
  slug: string;
  updatedAt: string;
};

const FeaturePost = () => {
  const [featurePost, setFeaturePost] = useState<FeaturePostProps>();

  const fetchPosts = async () =>
    await axios.get(
      "https://trinity-cms.onrender.com/api/posts?populate=*&sort[0]=publishedAt"
    );

  useEffect(() => {
    fetchPosts().then((posts) => {
      const recent = postsByPostDate(posts.data.data).filter(
        (p) => p.attributes.feature
      );

      if (recent.length) {
        setFeaturePost(recent[0].attributes);
      }
    });
  }, []);

  return featurePost ? (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 px-6 mb-8 lg:mb-24">
      <div className="overflow-hidden max-h-[348px]">
        <img className="w-full" src={featurePost?.image.data.attributes.url} />
      </div>

      <div className="flex flex-col">
        <a href={`/blog/${featurePost.slug}`}>
          <h3 className="text-darkBlue text-xl font-semibold leading-9 mb-4 lg:mb-5">
            {featurePost.title}
          </h3>
        </a>
        {featurePost?.content && (
          <div className="overflow-hidden max-h-[300px] lg:max-h-[150px] mb-4">
            <p className="text-gray-500 text-base font-normal font-inter leading-normal">
              {parse(featurePost.content)}
            </p>
          </div>
        )}

        {featurePost?.slug && (
          <a
            className="w-28 h-10 px-4 py-2 mx-auto self-center lg:ml-0 bg-teal text-white rounded-md shadow justify-center items-center inline-flex"
            href={`/blog/${featurePost.slug}`}
          >
            Read more
          </a>
        )}
        <div className="w-full my-4 lg:mx-0 lg:my-8 h-px border border-black border-opacity-20"></div>
        {featurePost?.updatedAt && (
          <div className="text-gray-500 mx-auto lg:mx-0 text-base font-normal font-inter leading-tight">
            {new Date(featurePost.updatedAt).toLocaleDateString("en-US", {
              dateStyle: "long",
            })}{" "}
            · 2 Likes
          </div>
        )}
      </div>
    </div>
  ) : null;
};

export default FeaturePost;
