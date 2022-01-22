import { NextPage } from "next";
import HomeBanner from "@/components/home/HomeBanner";
import HomeCTA from "@/components/home/HomeCTA";
import { sanityClient } from "@/lib/sanity";
import { Post } from "@/typings";

interface HomeProps {
  posts: [Post];
}

const Home: React.FC<NextPage & HomeProps> = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <HomeBanner />
      <HomeCTA />
      {/* FEATURED ARTICLES */}
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    author-> {
      name,
      image
    },
    description,
    mainImage,
    slug
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};
