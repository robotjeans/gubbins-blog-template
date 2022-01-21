import { NextPage } from "next";
import Layout from "@/components/common/Layout";

const Home: React.FC<NextPage> = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen py-2">
      <Layout>
        <h3>This is Gubbins.</h3>
      </Layout>
    </div>
  );
};

export default Home;
