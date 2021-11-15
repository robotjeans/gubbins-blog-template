import Seo from "@/components/common/Seo";
import HomeHero from "@/components/home/HomeHero";
import HomeRecent from "@/components/home/HomeRecent";
import { getPosts } from "@/services";

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

const Home = ({ posts }): JSX.Element => {
  console.log(posts);
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
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
