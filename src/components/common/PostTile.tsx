import Link from "next/link";
import Image from "next/image";
import { Post } from "@/typings";
import { urlFor } from "@/lib/sanity";

const PostTile: React.FC<Post> = (post) => {
  return (
    <div className="relative w-full md:w-[calc(25% - 15px)] float-left flex-shrink-0 mr-5 last-of-type:mr-0">
      <Link href={`/article/${post.slug.current}`}>
        <a className="h-[25rem] flex flex-col relative justify-end p-5 bg-black">
          <figure className="figure">
            <div className="relative h-[inherit] overflow-hidden">
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                className="absolute inset-0 h-full w-full object-cover"
                layout="fill"
              />
            </div>
          </figure>
          <div className="absolute bottom-0 left-0 w-full h-1/2 gradient opacity-50"></div>
          <h3 className="text-32 text-white relative z-10 mb-2">
            {post.title}
          </h3>
          <span className="link relative text-10 text-white z-10">
            <span className="relative inline-flex">Read More</span>
          </span>
        </a>
      </Link>
    </div>
  );
};

export default PostTile;
