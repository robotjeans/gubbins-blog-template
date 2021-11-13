import Link from "next/link";
import styled from "styled-components";

interface ILinkProps {
  href: string;
  title: string;
}

const CategoryLink: React.FC<ILinkProps> = ({ href, title }) => {
  return (
    <Link href={href}>
      <SC.Link>{title}</SC.Link>
    </Link>
  );
};

export default CategoryLink;

const SC = {
  Link: styled("a")`
    border: 1px solid #8a8b91;
    color: #8a8b91;
    border-radius: 2px;
    padding: 8px 14px;
    transition: all 200ms ease;
    margin-right: 15px;
  `,
};
