import { useEffect, useState } from "react";
import BlogCard from "src/components/blogPostCard";
import Image from "next/image";
function Blog(props) {
  function generateId() {
    return Math.random().toString(36).substr(2, 9);
  }
  const arr = [
    {
      text: "Pupila ochiului uman se mareste cu pana la 45% atunci cand privim in ochi persoana iubita.",
      image:
        "https://images.pexels.com/photos/3594720/pexels-photo-3594720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "imagine cu pupila ochiului marita",
      width: 1260,
      height: 750,
    },
    {
      text: "Un copil poate simti suferinta emotionala cand parintii sunt prezenti fizic, dar sunt indisponibili din punct de vedere emotional.",
      image:
        "https://images.pexels.com/photos/236215/pexels-photo-236215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "imagine cu un copil trist",
      width: 1260,
      height: 750,
    },
    {
      text: "Iubirea, conectarea, alinarea suferintei, placerea si motivatia depind de calitatea relatiei de atasament.",
      image:
        "https://images.pexels.com/photos/1667849/pexels-photo-1667849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "imagine cu mainile a doua persoane iubite",
      width: 1260,
      height: 750,
    },
    {
      text: "O persoana cu o capacitate scazuta de autoreglare va cauta mangaiere emotionala din factori externi.",
      image:
        "https://images.pexels.com/photos/7230192/pexels-photo-7230192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "imagine cu pastile",
      width: 1260,
      height: 750,
    },
  ];
  // Generate a random number between 0 and 3 (inclusive)
  const [post, setPost] = useState();
  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 4);

    setPost(arr[randomNum]);
  }, []);
  const data = props.data;
  const content = data.map((item) => {
    if (item != null) {
      return (
        <BlogCard
          key={generateId()}
          image={item.image}
          title={item.title}
          short={item.short}
          id={item.id}
          comments={item.comments}
        />
      );
    }
  });
  return (
    <div className="mt-16 bg-orange-200 px-4 py-20 md:px-24 md:py-20">
      <h1 className="text-3xl urbanist font-bold text-brown mb-8">
        Blog-ul Teen Psychology
      </h1>
      {post && (
        <div className="flex justify-between md:flex-row flex-col items-center gap-4 my-16 ">
          <h1 className="md:hidden text-center text-brown urbanist text-xl ">
            Afla mai multe in doar 5 minute de lectura
          </h1>
          <div className="w-full md:w-5/12 bg-brown/60  rounded-2xl ">
            <div className="flex w-full flex-col justify-left items-top">
              <div className="w-full  ">
                <Image
                  priority
                  src={post.image}
                  alt={post.alt}
                  width={post.width}
                  height={post.height}
                  className="rounded-t-2xl"
                ></Image>
                <p className="md:text-center urbanist text-sm p-4 text-gray-50">
                  {post.text}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full text-center md:w-5/12 md:my-4 ">
            <h1 className="md:block hidden text-center text-brown text-md urbanist text-lg ">
              Afla mai mult in doar 5 minute de lectura !
            </h1>
            <button className="bg-gray-50 px-4 text-sm  py-2 urbanist rounded-md font-semibold text-brown mt-4">
              Citeste postarea{" "}
            </button>
          </div>
        </div>
      )}
      <h1 className="text-3xl urbanist font-bold text-brown mb-8">
        Postari Recente{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-6">
        {content}
      </div>
    </div>
  );
}
export default Blog;

export async function getStaticProps() {
  const res = await fetch(
    "https://blog-d9dcf-default-rtdb.europe-west1.firebasedatabase.app/data/blogs.json"
  );
  const data = await res.json();
  console.log(data);

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
}
