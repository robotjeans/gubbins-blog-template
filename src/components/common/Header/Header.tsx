import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const Header: React.FC = () => {
  return (
    <SC.Header>
      <SC.Container>
        <SC.Flex>
          <SC.Logo>
            <Image
              src="/svgs/IRRATIONAL.svg"
              alt="irrational green dot"
              width="168px"
              height="45px"
            />
          </SC.Logo>
          <SC.Nav>
            <SC.NavLinks>
              <SC.NavLink>
                <Link href="/">Link A</Link>
              </SC.NavLink>
              <SC.NavLink>
                <Link href="/">Link B</Link>
              </SC.NavLink>
              <SC.NavLink>
                <Link href="/">Link C</Link>
              </SC.NavLink>
              <SC.NavLink>
                <Link href="/">Link D</Link>
              </SC.NavLink>
              <SC.NavLink>
                <Link href="/">Link E</Link>
              </SC.NavLink>
            </SC.NavLinks>
          </SC.Nav>
        </SC.Flex>
      </SC.Container>
    </SC.Header>
  );
};

export default Header;

const SC = {
  Header: styled("header")`
    top: 0;
    right: 0;
    left: 0;
    background-color: hsla(0, 0%, 100%, 1);
    position: fixed;
    height: 128px;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    will-change: transform;
    z-index: 9999;
  `,
  Container: styled("div")`
    width: 1300px;
    margin: auto;
  `,
  Flex: styled("div")`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
  `,
  Logo: styled("div")`
    width: 168px;
    height: 45px;
    transform-origin: left center;
  `,
  Nav: styled("nav")`
    display: block;
  `,
  NavLinks: styled("ul")`
    padding: 0;
  `,
  NavLink: styled("li")`
    font-size: 0.9375rem;
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: none;
    color: #181e22;
    letter-spacing: 0.075em;
    line-height: 1;
    font-family: "Lato", sans-serif;
    position: relative;
    display: inline-block;

    &:not(:last-of-type) {
      margin-right: 52px;
    }

    a {
      color: inherit;
      text-decoration: none;
      position: relative;
      -webkit-transition: color 0.3s ease;
      transition: color 0.3s ease;
      font-family: inherit;
      font-size: inherit;
    }
  `,
};
