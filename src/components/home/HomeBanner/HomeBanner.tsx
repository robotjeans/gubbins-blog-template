type HomeBannerProps = {};

const HomeBanner: React.FC<HomeBannerProps> = () => {
  return (
    <section className="py-8 md:py-10">
      <div className="container border-b border-black bg-teal-400">
        <div className="h-[665px]"></div>
      </div>
    </section>
  );
};

export default HomeBanner;
