import React, { useEffect, useState } from "react";
import postList from "../../posts.json";
import BlogPost from "../../components/BlogPost";
import { Link } from "react-router-dom";
import Categories from "./Categories/Categories";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import HomeHeader from "../../components/HomeHeader";
import PostHeader from "../../components/PostHeader";
import { useOutletContext } from "react-router-dom";

export default function Home() {
  console.log(postList);

  const [postPage, setPostPage] = useOutletContext();

  setPostPage(false);
  console.log("post page:", postPage);

  postList.sort((a, b) => {
    let aPost = a.timestamp;
    let bPost = b.timestamp;

    return bPost - aPost;
  });

  return (
    <main className="container px-12 py-24 font-sans mx-auto max-w-5xl w-full flex flex-col">
      <Categories />
      <section className="mr-16">
        <h2 className="uppercase text-lg font-medium tracking-widest text-pink-500 mb-7">
          Latest and Greatest
        </h2>
        <div className="grid grid-cols-1 gap-1 grid-flow-row ">
          {postList.map((post) => (
            <Link to={`/posts/${post.id}`}>
              <BlogPost post={post} />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}