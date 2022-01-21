import HomeBanner from "@/components/home/HomeBanner";
import HomeCTA from "@/components/home/HomeCTA";
import { NextPage } from "next";

const Home: React.FC<NextPage> = () => {
  return (
    <div>
      <HomeBanner />
      <HomeCTA />
    </div>
  );
};

export default Home;
