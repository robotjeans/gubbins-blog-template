import styled from "styled-components";
import Header from "@/components/common/Header";

const Layout: React.FC = ({ children }) => {
  return (
    <SC.Layout>
      <div>
        <Header />
      </div>
      <div>
        <SC.Container>{children}</SC.Container>
      </div>
    </SC.Layout>
  );
};

export default Layout;

const SC = {
  Layout: styled("div")`
    padding-top: 128px;
    overflow: hidden;
  `,
  Container: styled("div")`
    margin-left: auto;
    margin-right: auto;

    ${({ theme }) => theme.mediaQueries.md} {
      max-width: 95%;
    }

    ${({ theme }) => theme.mediaQueries.lg} {
      max-width: 1280px;
    }
  `,
};
