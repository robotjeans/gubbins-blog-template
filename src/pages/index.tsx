import Seo from "@/components/common/Seo";
import HomeHero from "@/components/home/HomeHero";
import HomeRecent from "@/components/home/HomeRecent";
import { getPosts } from "@/services";

const Home = ({ posts }): JSX.Element => {
  console.log(posts);
  return (
    <>
      <Seo />
      <main>
        <HomeHero />
        <HomeRecent />
      </main>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
