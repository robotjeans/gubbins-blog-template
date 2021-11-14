import Head from "next/head";

interface ISeoProps {
  title?: string;
  description?: string;
  image?: string;
}

const Seo: React.FC<ISeoProps> = ({
  title = "A Flash Blog",
  description = "RobotJeans | A flash blog about everything.",
  image = "https://robotjeans.vercel.app/featured.png",
}) => {
  const siteTitle = `RobotJeans | ${title}`;

  return (
    <Head>
      <title>{siteTitle}</title>

      <meta name="twitter:card" content={description} />
      <meta name="twitter:site" content="@robot_jeans" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
  );
};

export default Seo;
