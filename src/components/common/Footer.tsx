import Link from "next/link";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="footer pb-5 2xl:pt-20 lg:pb-16 bg-white text-black border border-t border-black">
      <div className="container">
        <p>Footer</p>
      </div>
    </footer>
  );
};

export default Footer;
