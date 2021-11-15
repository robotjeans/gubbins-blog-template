import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <SC.Footer>
      <SC.Container>
        <p>Footer</p>
      </SC.Container>
    </SC.Footer>
  );
};

export default Footer;

const SC = {
  Footer: styled("footer")`
    width: 100%;
    height: 243px;
    font-size: 1.3rem;
    font-weight: 400;
    color: #686868;
    margin-top: 4.8rem;
    padding: 0;
    border-top: 1px solid ${({ theme }) => theme.colors.subTitle};
  `,
  Container: styled("div")`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
