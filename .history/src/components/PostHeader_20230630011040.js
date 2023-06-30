import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PostHeader({ postList }) {
  const { id } = useParams();

  const post = postList.find((post) => post.id === +id);
  return (
    <div className="h-72 flex flex-col justify-end">
      <div className="mt-20 mb-10">Breadcrumbs &gt; Breadcrumbs</div>
      <div className="text-4xl font-medium text-gray-800">{post?.title} c:</div>
      <div className="mt-4 text-lg font-medium text-slate-500 mb-14">
        {post?.subtitle !== "No subtitle given" ? post?.subtitle : ""}
      </div>
    </div>
  );
}