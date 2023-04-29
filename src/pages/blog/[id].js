import Section from "@/components/section";
import Image from "next/image";
function Post(props) {
  function generateId() {
    return Math.random().toString(36).substr(2, 9);
  }
  const { loadedPost } = props;
  const arrSections = loadedPost.sections;
  const sections = arrSections.map((section) => {
    return (
      <Section
        key={generateId()}
        subtitle={section.subtitle}
        image={section.image}
        list={section.list}
        paragraphs={section.paragraphs}
      />
    );
  });
  return (
    <div className="bg-orange-200 px-4 py-20 md:px-24 md:py-20">
      <h1 className="text-3xl urbanist font-semibold text-brown text-center">
        {loadedPost.title}
      </h1>
      <Image
        src={loadedPost.image}
        alt={"main image"}
        width={2000}
        height={0}
        className="md:w-8/12 rounded-full mt-12 mx-auto"
      ></Image>
      <div className="mt-16">{sections}</div>
      <div className="w-full flex items-center justify-between">
        <div className="pt-1 bg-gradient-to-r from-brown/0 to-brown/20 w-1/4 rounded-full"></div>
        <h1 className="text-xl urbanist text-brown font-semibold">
          0 Comentarii
        </h1>
        <div className="pt-1 bg-gradient-to-l from-brown/0 to-brown/20 w-1/4 rounded-full"></div>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const res = await fetch(
    "https://blog-d9dcf-default-rtdb.europe-west1.firebasedatabase.app/data.json"
  );
  const data = await res.json();
  const blogs = data.blogs;
  const post = blogs.find((item) => item.id === id);
  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      loadedPost: post,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(
    "https://blog-d9dcf-default-rtdb.europe-west1.firebasedatabase.app/data.json"
  );
  const data = await res.json();
  const blogs = data.blogs;
  const paths = blogs.map((blog) => ({ params: { id: blog.id } }));
  return {
    paths: paths,
    fallback: "blocking",
  };
}
export default Post;
