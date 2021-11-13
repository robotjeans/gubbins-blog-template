import HomeHero from "@/components/home/HomeHero";
import HomeRecent from "@/components/home/HomeRecent";

const Home = (): JSX.Element => {
  return (
    <main>
      <HomeHero />
      <HomeRecent />
    </main>
  );
};

export default Home;
