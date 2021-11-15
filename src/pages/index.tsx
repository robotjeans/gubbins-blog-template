import Seo from "@/components/common/Seo";
import HomeHero from "@/components/home/HomeHero";
import HomeRecent from "@/components/home/HomeRecent";
import { articlesQuery } from "@/services";
import { client } from "@/utils";

const mockData = [
  {
    source: "https://guild.mauer.co/wp-content/uploads/2021/06/GC32SL-515x687.jpg",
    alt: "blank",
    href: "http://google.com",
    category: "politics",
    date: "November 14, 2021",
    title: "American Caesar A",
    excerpt: "blah blah blah blash dhfhfh",
  },
  {
    source: "https://guild.mauer.co/wp-content/uploads/2021/06/GC32SL-515x687.jpg",
    alt: "blank",
    href: "http://google.com",
    category: "politics",
    date: "November 14, 2021",
    title: "American Caesar B",
    excerpt: "blah blah blah blash dhfhfh",
  },
  {
    source: "https://guild.mauer.co/wp-content/uploads/2021/06/GC32SL-515x687.jpg",
    alt: "blank",
    href: "http://google.com",
    category: "politics",
    date: "November 14, 2021",
    title: "American Caesar C",
    excerpt: "blah blah blah blash dhfhfh",
  },
  {
    source: "https://guild.mauer.co/wp-content/uploads/2021/06/GC32SL-515x687.jpg",
    alt: "blank",
    href: "http://google.com",
    category: "politics",
    date: "November 14, 2021",
    title: "American Caesar D",
    excerpt: "blah blah blah blash dhfhfh",
  },
  {
    source: "https://guild.mauer.co/wp-content/uploads/2021/06/GC32SL-515x687.jpg",
    alt: "blank",
    href: "http://google.com",
    category: "politics",
    date: "November 14, 2021",
    title: "American Caesar E",
    excerpt: "blah blah blah blash dhfhfh",
  },
  {
    source: "https://guild.mauer.co/wp-content/uploads/2021/06/GC32SL-515x687.jpg",
    alt: "blank",
    href: "http://google.com",
    category: "politics",
    date: "November 14, 2021",
    title: "American Caesar F",
    excerpt: "blah blah blah blash dhfhfh",
  },
];

const Home = ({ articles }): JSX.Element => {
  console.log(articles);
  return (
    <>
      <Seo />
      <main>
        <HomeHero />
        <HomeRecent initialPosts={mockData} />
      </main>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const articles = (await client.fetch(articlesQuery)) || [];

  return {
    props: { articles },
  };
}
