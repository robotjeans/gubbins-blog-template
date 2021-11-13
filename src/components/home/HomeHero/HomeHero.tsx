import CategoryLink from "@/components/common/CategoryLink";
import Image from "next/image";
import styled from "styled-components";

const HomeHero: React.FC = () => {
  return (
    <SC.HomeHero>
      <SC.Container>
        <SC.ImageWrap>
          <Image src="/p077kvlc.jpg" alt="Featured Image" layout="fill" />
        </SC.ImageWrap>
        <SC.ContentWrap>
          <h3>
            <CategoryLink href="/" title="Community" />
          </h3>
        </SC.ContentWrap>
      </SC.Container>
    </SC.HomeHero>
  );
};

export default HomeHero;

const SC = {
  HomeHero: styled("section")`
    position: relative;
    margin-bottom: 5rem;

    ${({ theme }) => theme.mediaQueries.lg} {
      margin-bottom: 8rem;
    }
  `,
  Container: styled("div")`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  ImageWrap: styled("div")`
    position: relative;
    max-width: 100%;
    display: block;
    flex: 0 0 100%;
    align-self: stretch;

    ${({ theme }) => theme.mediaQueries.md} {
      max-width: 66.6667%;
      flex: 0 0 66.6667%;
    }
  `,
  ContentWrap: styled("div")`
    max-width: 100%;
    display: block;
    flex: 0 0 100%;
    padding: 50px;
    box-sizing: border-box;

    ${({ theme }) => theme.mediaQueries.md} {
      max-width: 33.3333%;
      flex: 0 0 33.3333%;
      padding: 120px 100px 180px 90px;
    }
  `,
};
