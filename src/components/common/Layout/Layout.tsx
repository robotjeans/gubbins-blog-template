import styled from "styled-components";
import Header from "@/components/common/Header";

const Layout: React.FC = ({ children }) => {
  return (
    <SC.Layout>
      <div>
        <Header />
      </div>
      <div>{children}</div>
    </SC.Layout>
  );
};

export default Layout;

const SC = {
  Layout: styled("div")`
    padding-top: 128px;
    overflow: hidden;
  `,
};
