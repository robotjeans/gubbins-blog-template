import Image from "next/image";
import styled from "styled-components";

const HomeHero: React.FC = () => {
  return (
    <SC.HomeHero>
      <SC.ImageWrap>
        <SC.Image src="/p077kvlc.jpg" alt="Featured Image" layout="fill" />
      </SC.ImageWrap>
    </SC.HomeHero>
  );
};

export default HomeHero;

const SC = {
  HomeHero: styled("section")`
    position: relative;
    padding-bottom: 18vw;
  `,
  ImageWrap: styled("div")`
    position: relative;
    margin-left: 70px;
    max-width: 1160px;
    width: 62vw;
    overflow: hidden;
  `,
  Image: styled(Image)`
    position: absolute;
    width: 100%;
    height: 100%:
  `,
};
