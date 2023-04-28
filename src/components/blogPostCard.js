import Image from "next/image";
import Link from "next/link";

function BlogCard(props) {
  return (
    <Link href={`/blog/${props.id}`}>
      <div className="bg-brown rounded-md">
        <div>
          <Image
            className="rounded-t-md"
            src={props.image}
            alt="Descriptive Image"
            width={800}
            height={800}
            priority
          ></Image>
        </div>
        <div className="px-4 py-4">
          <h1 className="text-lg text-gray-50 urbanist font-semibold">
            {props.title}
          </h1>
          <p className="urbanist text-xs mt-2 text-gray-50">{props.short}</p>
          <div className="border-t-2 border-gray-50/20  mt-4">
            <p className="text-xs text-gray-50/20 mt-2 urbanist">
              0 comentarii
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default BlogCard;
