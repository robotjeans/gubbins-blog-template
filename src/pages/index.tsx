import { NextPage } from "next";
import Header from "@/components/common/Header";

const Home: React.FC<NextPage> = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen py-2">
      <Header />
      <h3>This is Gubbins.</h3>
    </div>
  );
};

export default Home;
