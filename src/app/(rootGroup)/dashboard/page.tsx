import React, { Suspense } from "react";

const page = async () => {
  const posts = await fetch(
    "https://staffasiabpo.wpengine.com/wp-json/wp/v2/posts"
  ).then((res) => res.json());

  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <section className="flex flex-col items-center justify-between min-h-screen p-24">
      <Suspense fallback={<div>Loading...</div>}>
        {posts.map((post: any) => {
          return (
            <div key={post.id}>
              <h1>{post.title.rendered}</h1>
              <div
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              ></div>
            </div>
          );
        })}
      </Suspense>
    </section>
  );
};

export default page;
