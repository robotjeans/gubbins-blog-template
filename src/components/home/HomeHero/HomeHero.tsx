import CategoryLink from "@/components/common/CategoryLink";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const HomeHero: React.FC = () => {
  return (
    <SC.HomeHero>
      <SC.Container>
        <Link href="/">
          <SC.ImageWrap>
            <Image src="/p077kvlc.jpg" alt="Featured Image" layout="fill" />
          </SC.ImageWrap>
        </Link>
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
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
  `,
  ImageWrap: styled("div")`
    position: relative;
    max-width: 100%;
    display: block;
    flex: 0 0 100%;
    align-self: stretch;

    ${({ theme }) => theme.mediaQueries.md} {
      width: 58.33333333%;
      flex: 0 0 58.33333333%;
    }
  `,
  ContentWrap: styled("div")`
    max-width: 100%;
    display: block;
    flex: 0 0 100%;
    padding: 50px;
    box-sizing: border-box;

    ${({ theme }) => theme.mediaQueries.md} {
      max-width: 41.66666667%;
      flex: 0 0 41.66666667%;
      padding: 120px 100px 180px 90px;
    }
  `,
};
