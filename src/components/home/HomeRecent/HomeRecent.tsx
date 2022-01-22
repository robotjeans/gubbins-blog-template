import PostTile from "@/components/common/PostTile";
import { Post } from "@/typings";

interface HomeRecentProps {
  posts: [Post];
}

const HomeRecent: React.FC<HomeRecentProps> = ({ posts }) => {
  return (
    <section className="py-8 md:py-10">
      <div className="container flex flex-wrap w-full h-full">
        {posts.map((post) => (
          <PostTile key={post._id} {...post} />
        ))}
      </div>
    </section>
  );
};

export default HomeRecent;
