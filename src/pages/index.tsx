import HomeHero from "@/components/home/HomeHero";
import HomeRecent from "@/components/home/HomeRecent";
import { getPosts } from "@/services";

const Home = ({ posts }): JSX.Element => {
  console.log(posts);
  return (
    <main>
      <HomeHero />
      <HomeRecent />
    </main>
  );
};

export default Home;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
