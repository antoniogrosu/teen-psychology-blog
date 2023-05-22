import Section from "@/components/section";
import Image from "next/image";
import Head from "next/head";
import { useSession, signIn } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
function Post(props) {
  const { data: session } = useSession();
  function generateId() {
    return Math.random().toString(36).substr(2, 9);
  }
  const { loadedPost, index } = props;
  const arrSections = loadedPost.sections;
  const [commentsArray, setCommentsArray] = useState();
  const [comments, setComments] = useState(true);
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

  //data pentru comment
  const [user, setUser] = useState();
  const [image, setImage] = useState();
  const submittingComment = useRef(null);
  const loadedComments = loadedPost.hasOwnProperty("comments")
    ? loadedPost.comments
    : "";

  useEffect(() => {
    if (session) {
      setUser(session.user.name);
      setImage(session.user.image);
    }
  }, [session]);
  function sendComment() {
    const submitting = {
      ...loadedPost,
      comments: [
        ...loadedComments,
        {
          user: user,
          image: image,
          text: submittingComment.current
            ? submittingComment.current.value
            : "",
        },
      ],
    };
    fetch(
      `https://blog-d9dcf-default-rtdb.europe-west1.firebasedatabase.app/data/blogs/${index}.json`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitting),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {})
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }
  return (
    <article>
      <Head>
        <title>Teen Psychology | {loadedPost.title}</title>
        <meta name="description" content={loadedPost.short} />
        <link rel="apple-touch-icon" href={loadedPost.image} />
      </Head>
      <div className="mt-16 bg-orange-200 px-4 py-20 md:px-24 md:py-20">
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
        <div className="my-16 md:flex md:items-top md:justify-between md:flex-row flex-col w-full">
          {!session && (
            <div>
              <h1 className="urbanist text-xl text-brown font-semibold">
                Pentru a adauga un comentariu trebuie sa fii logat/a
              </h1>
              <button
                onClick={() => signIn()}
                className="bg-gray-50  urbanist px-4 py-2 flex items-center justify-center text-gray-900 font-semibold my-4  rounded-lg"
              >
                Continua cu
                <Image
                  src="/google.svg"
                  className="ml-2"
                  width={15}
                  height={15}
                  alt="google logo"
                ></Image>
              </button>
            </div>
          )}
          {session && session.user && (
            <form className="w-full md:w-1/3" onSubmit={() => sendComment()}>
              <h1 className="text-3xl urbanist font-bold text-brown mb-8">
                Scrie un comenatariu!
              </h1>

              <div className="flex items-center justify-start">
                <div className="md:h-12 md:w-12 w-8 h-8">
                  <img src={session.user.image} className="rounded-full"></img>
                </div>
                <p className="urbanist text-brown text-lg font-semibold ml-4">
                  {session.user.name}
                </p>
              </div>

              <textarea
                required
                placeholder="Comentariul tau . . . "
                ref={submittingComment}
                className="placeholder:text-brown/30 focus:outline-0 text-brown urbanist p-2 mt-4 w-full resize-none  bg-brown/20  rounded-md h-24 indent-4 placeholder:text-brown placeholder:urbanist"
              ></textarea>
              <button className="bg-brown urbanist text-gray-50 px-4 py-2 rounded-md font-semibold">
                Adauga Comentariu
              </button>
            </form>
          )}
          <div className="hidden md:block md:w-1/2">
            <h1 className="text-3xl urbanist font-bold text-brown mb-8">
              Poate ti-ar placea ?
            </h1>
            <div className="hidden  w-full  h-36 p-1 bg-red-200 rounded-lg md:flex items-center justify-center urbanist text-2xl font-semibold">
              Alta postare
            </div>
          </div>
        </div>
        {!loadedPost.comments && (
          <div className="w-full flex items-center justify-between my-8">
            <div className="pt-1 bg-gradient-to-r from-brown/0 to-brown/20 w-1/4 rounded-full"></div>
            <h1 className="text-xl urbanist text-brown font-semibold">
              0 Comentarii
            </h1>
            <div className="pt-1 bg-gradient-to-l from-brown/0 to-brown/20 w-1/4 rounded-full"></div>
          </div>
        )}
        {loadedPost.comments && (
          <section className="w-full my-16">
            <div className="w-full flex items-center justify-between">
              <div className="pt-1 bg-gradient-to-r from-brown/0 to-brown/20 w-1/4 rounded-full"></div>
              <button
                onClick={() => setComments(!comments)}
                className="border-2 border-brown text-sm px-2 py-1 md:px-4 md:py-2 rounded-md  urbanist text-brown font-semibold"
              >
                {comments ? "Ascunde comentariile" : "Vezi comentariile"}
              </button>
              <div className="pt-1 bg-gradient-to-l from-brown/0 to-brown/20 w-1/4 rounded-full"></div>
            </div>
            {comments && (
              <div className="mt-8 flex flex-col w-full justify-center items-center">
                {loadedPost.comments.map((comment) => (
                  <div
                    key={generateId()}
                    className="w-full md:w-10/12 items-center justify-center flex flex-col my-6"
                  >
                    <div className="flex items-center justify-left w-11/12">
                      <div className="md:h-12 md:w-12 w-10 h-10">
                        <img src={comment.image} className="rounded-full"></img>
                      </div>
                      <div className="w-full ml-4">
                        <p className="urbanist text-brown text-lg font-semibold">
                          {comment.user}
                        </p>
                        <p className="urbanist text-sm">{comment.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}
        <section className="md:hidden w-full">
          <h1 className="text-3xl urbanist font-bold text-brown mb-8">
            Poate ti-ar placea ?
          </h1>
          <div className="w-full  h-36 p-1 bg-red-200 rounded-lg flex items-center justify-center urbanist text-2xl font-semibold">
            Alta postare
          </div>
        </section>
      </div>
    </article>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;
  const res = await fetch(
    "https://blog-d9dcf-default-rtdb.europe-west1.firebasedatabase.app/data/blogs.json"
  );
  const data = await res.json();
  const blogs = data;
  const post = blogs.find((item) => item.id === id);
  const index = blogs.findIndex((item) => item.id == id);
  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      loadedPost: post,
      index: index,
    },
  };
}

export default Post;
