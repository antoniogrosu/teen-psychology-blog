import PostForm from "@/components/postForm";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Chatbot from "@/components/chatbot";
function Admin() {
  const { data: session } = useSession();
  const [post, setPost] = useState(true);

  const [dashboard, setDashboard] = useState(false);
  const [ai, setAi] = useState(false);
  if (session && session.user.email == "aantoniogabriel23@gmail.com") {
    return (
      <div className=" mt-16 bg-orange-200 px-4 py-20 md:px-24 md:py-20">
        {post && <PostForm />}
        {ai && <Chatbot />}
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
