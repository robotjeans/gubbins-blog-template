import { articleQuery } from "@/services";
import { client } from "@/utils";

const Article: React.FC = (props) => {
  console.log(props);

  return (
    <section>
      <h3>Article</h3>
    </section>
  );
};

export default Article;

export async function getStaticProps(context: { query: { slug?: "" } }) {
  const { slug = "" } = context.query;

  return await client.fetch(articleQuery, { slug });
}
