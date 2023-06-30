import React, { useEffect } from "react";
import "../fonts/Wotfard-Regular-webfont/stylesheet.css";
import postList from "../posts.json";
import "./Home.css";

export default function Home() {
  console.log(postList);

  postList.sort((a, b) => {
    let aPost = a.timestamp;
    let bPost = b.timestamp;

    return bPost - aPost;
  });

  return (
    <div className="container max-w-lg border font-sans">
      <h2 className="uppercase text-sm font-semibold tracking-widest text-pink-500">
        Recently Published
      </h2>
      <div className="grid grid-cols-1 gap-1 grid-flow-row">
        {postList.map((post) => (
          <div key={post.id} className="container h-96 px-24 py-2">
            {post.title} {post.date}
          </div>
        ))}
      </div>
    </div>
  );
}