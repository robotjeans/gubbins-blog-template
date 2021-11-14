import PostCard from "@/components/common/PostCard";
import { Post } from "@/types";
import styled from "styled-components";

interface Props {
  initialPosts: Post[];
}

const HomeRecent: React.FC<Props> = ({ initialPosts }) => {
  return (
    <SC.HomeRecent>
      <SC.Container>
        {initialPosts.length &&
          initialPosts.map((post) => <PostCard key={post.title} post={post} />)}
      </SC.Container>
    </SC.HomeRecent>
  );
};

export default HomeRecent;

const SC = {
  HomeRecent: styled("section")`
    position: relative;
    margin-top: 60px;
    background-color: #ffffff;
    padding-bottom: 48px;
  `,
  Container: styled("div")`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  `,
};
