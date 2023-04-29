import { useEffect, useState } from "react";
import BlogCard from "@/components/blogPostCard";
function Blog(props) {
  function generateId() {
    return Math.random().toString(36).substr(2, 9);
  }
  const data = props.data.blogs;
  const content = data.map((item) => {
    return (
      <BlogCard
        key={generateId()}
        image={item.image}
        short={item.short}
        title={item.title}
        id={item.id}
      />
    );
  });
  return (
    <div className="bg-orange-200 px-4 py-20 md:px-24 md:py-20">
      <h1 className="text-3xl urbanist font-bold text-brown mb-8">Blog Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-6">
        {content}
      </div>
    </div>
  );
}

export default Blog;

export async function getStaticProps() {
  const res = await fetch(
    "https://blog-d9dcf-default-rtdb.europe-west1.firebasedatabase.app/data.json"
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
}
