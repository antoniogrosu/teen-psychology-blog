import PostForm from "src/components/postForm";
import InterviewForm from "src/components/interviewPost";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
function Admin() {
  const { data: session } = useSession();
  const [post, setPost] = useState(false);
  const [dashboard, setDashboard] = useState(false);
  const [ai, setAi] = useState(false);
  if (session && session.user.email == "aantoniogabriel23@gmail.com") {
    return (
      <div className=" mt-16 bg-orange-200 px-4 py-20 md:px-24 md:py-20">
        <h1 className=" text-4xl urbanist font-bold text-brown">
          Bine ai venit ,{" "}
          <span className="underline underline-offset-4">Alexia</span> !
        </h1>
        <div className="my-8">
          <p className=" urbanist font-normal text-brown text-md">
            Pe aceasta pagina poti sa postezi blog-uri si interviuri , sa iti
            monitorizezi performanta platformei tale si sa comunici cu unealta
            cu inteligenta artificiala. Pentru fiecare unealta exista
            insutrctiuni in josul paginii.
            <br />{" "}
            <span className="font-bold">
              Pentru probleme tehnice ma poti contact pe numarul de telefon.
            </span>
          </p>
        </div>

        <button
          onClick={() => {
            setPost(!post);
            setAi(false);
            setDashboard(false);
          }}
          className="text-md px-4 py-2 bg-brown/60 border-2 urbanist border-brown hover:bg-brown text-gray-50 font-semibold rounded-lg mr-4 mb-8"
        >
          Posteaza
        </button>
        <button className="text-md px-4 py-2 bg-brown/60 border-2 urbanist border-brown hover:bg-brown text-gray-50 font-semibold rounded-lg mr-4 mb-8">
          <Link
            href={"https://ai-teen-psychology-made-by-antonio.vercel.app/"}
            target="blank"
          >
            Unealta AI
          </Link>
        </button>
        <button className="text-md px-4 py-2 bg-brown/60 border-2 urbanist border-brown hover:bg-brown text-gray-50 font-semibold rounded-lg mr-4 mb-8">
          <Link
            href={"https://vercel.com/antoniogrosu/blog-41q6/analytics"}
            target="blank"
          >
            Analiza Website
          </Link>
        </button>

        {post && (
          <div className="flex flex-col w-full gap-8">
            <PostForm />
            <InterviewForm />
          </div>
        )}
        {ai && (
          <div>
            <ChatBot />
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="h-screen mt-16 bg-orange-200 px-4 py-20 md:px-24 md:py-20">
        <p className="urbanist text-4xl font-semibold text-center mt-24">
          Continut neautorizat{" "}
        </p>
        <div className="w-6/12 mx-auto mt-12">
          <Link href="/blog">
            <button className=" w-full urbanist font-semibold urbanist text-gray-50 bg-red-500 px-4 py-2 rounded-lg text-xl">
              Inapoi la blog
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Admin;
