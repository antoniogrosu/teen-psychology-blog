import PostForm from "@/components/postForm";
import { useState } from "react";
function Admin() {
  const [post, setPost] = useState(true);
  const [dashboard, setDashboard] = useState(false);
  const [ai, setAi] = useState(false);
  return (
    <div className="bg-orange-200 px-4 py-20 md:px-24 md:py-20">
      {post && <PostForm />}
    </div>
  );
}
export default Admin;
