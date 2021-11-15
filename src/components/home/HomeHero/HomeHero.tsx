import CategoryLink from "@/components/common/CategoryLink";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const HomeHero: React.FC = () => {
  return (
    <SC.HomeHero>
      <SC.Container>
        <SC.Flex>
          <Link href="/">
            <SC.ImageWrap>
              <Image
                src="/p077kvlc.jpg"
                alt="Featured Image"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="cover"
              />
            </SC.ImageWrap>
          </Link>
          <SC.ContentWrap>
            <h3>
              <CategoryLink href="/" title="Community" />
            </h3>
          </SC.ContentWrap>
        </SC.Flex>
      </SC.Container>
    </SC.HomeHero>
  );
};

export default HomeHero;

const SC = {
  HomeHero: styled("section")`
    width: 100%;
    padding: 0 16px;
  `,
  Container: styled("div")`
    padding-bottom: 6.2rem;
    background-color: #fbfbfb;
  `,
  Flex: styled("div")`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  `,
  ImageWrap: styled("div")`
    width: 100%;
    flex: 0 0 100%;
    align-self: stretch;

    ${({ theme }) => theme.mediaQueries.md} {
      width: 58.33333333%;
      flex: 0 0 58.33333333%;
    }
  `,
  ContentWrap: styled("div")`
    width: 100%;
    flex: 0 0 100%;
    align-self: stretch;

    ${({ theme }) => theme.mediaQueries.md} {
      width: 41.66666667%;
      flex: 0 0 41.66666667%;
      padding: 6rem;
    }
  `,
};
