import styled from "styled-components";

const HomeRecent: React.FC = () => {
  return <SC.HomeRecent>Recent</SC.HomeRecent>;
};

export default HomeRecent;

const SC = {
  HomeRecent: styled("section")`
    position: relative;
    margin-top: 60px;
    background-color: #f0efee;
    padding-bottom: 48px;
  `,
};
