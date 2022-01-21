import { NextPage } from "next";
import Image from "next/image";
import Layout from "@/components/common/Layout";

const Home: React.FC<NextPage> = () => {
  return (
    <Layout>
      <div className="flex justify-between items-center border-y border-black bg-teal-400 py-10">
        <div className="px-10 space-y-5">
          <h1 className="text-6xl max-w-xl font-serif">
            <span className="underline decoration-black decoration-4">
              IIRKD.
            </span>
            is a template to write, read and connect.
          </h1>
          <h2>
            It&apos;s easy and free to post what your thinking on any topic and
            connect with millions of readers.
          </h2>
        </div>
        <div className="hidden md:inline-flex h-32 lg:h-full">
          <Image
            src="/svgs/iirkd_ii_black.svg"
            alt="iirkd logo double i"
            height={128}
            width={100}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
