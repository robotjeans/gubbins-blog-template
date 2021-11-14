import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { Post } from "@/types";

interface Props {
  post: Post;
  key?: string;
}

const PostCard: React.FC<Props> = ({ post, key }) => {
  return (
    <SC.PostCard key={key}>
      <SC.Container>
        <Link href={post.href} passHref>
          <SC.Image
            src={post.source}
            alt={post.alt}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="cover"
          />
        </Link>
        <SC.Meta>
          <span className="meta-cats">{post.category}</span>
          <span className="meta-date">{post.date}</span>
        </SC.Meta>
        <SC.Title>
          <Link href={post.href} passHref>
            {post.title}
          </Link>
        </SC.Title>
        <SC.Excerpt>
          <p>{post.excerpt}</p>
          <div className="more-link">
            <Link href={post.href} passHref>
              Read More
            </Link>
          </div>
        </SC.Excerpt>
      </SC.Container>
    </SC.PostCard>
  );
};

export default PostCard;

const SC = {
  PostCard: styled("div")`
    width: 100%;
    float: left;
    padding: 0 16px;

    ${({ theme }) => theme.mediaQueries.md} {
      width: 33.33333333%;
    }
  `,
  Container: styled("div")`
    padding-bottom: 5.9rem;
  `,
  Image: styled(Image)`
    max-width: 100%;
    height: auto;
    background-color: #f4f4f4;
    vertical-align: middle;
    border: 2px solid #e2e2e2;
    background-repeat: no-repeat;
  `,
  Meta: styled("div")`
    padding-top: 2.5rem;
    padding-left: 0;
    padding-right: 0;
    text-align: center;
    color: #9a9a9a;
    position: relative;
    left: 0.1rem;
    word-break: break-word;
    hyphens: none;
    font-size: 0.59rem;
    letter-spacing: 0.26em;
    line-height: 2;
    text-transform: uppercase;

    .meta-cats {
    }

    .meta-date {
      padding-left: 1.3rem;
    }
  `,
  Title: styled("h1")`
    text-align: center;
    padding: 0 1.4rem;
    font-size: 2.2rem;
    margin: 1.3rem 0 0.9rem;
    color: #000000;
  `,
  Excerpt: styled("div")`
    text-align: center;
    padding: 0 1.4rem;
    font-size: 1.08rem;
    line-height: 1.6;
    letter-spacing: 0.01em;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.subTitle};

    p {
      margin: 0 0 3.5rem;
      overflow: hidden;
    }

    .more-link {
      padding-top: 1.1rem;
      color: ${({ theme }) => theme.colors.primary};
    }
  `,
};
