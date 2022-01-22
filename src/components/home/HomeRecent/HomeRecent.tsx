import PostCard from "@/components/common/PostCard";
import { Post } from "@/types";

interface HomeRecentProps {
  initialPosts: Post[];
}

const HomeRecent: React.FC<HomeRecentProps> = ({ initialPosts }) => {
  return (
    <section className="py-8 md:py-10">
      <div className="container flex flex-wrap">
        {initialPosts.length &&
          initialPosts.map((post) => <PostCard key={post.title} post={post} />)}
      </div>
    </section>
  );
};

export default HomeRecent;
