import Link from "next/link";

import fs from "fs";
import path from "path";
import { marked } from "marked";
import matter from "gray-matter";

const PostPage = ({ frontmatter: { title, date }, slug, content }) => (
  <>
    <Link href="/blog">
      <a>voltar</a>
    </Link>
    <h1>{title}</h1>
    <p>{date}</p>
    <div dangerouslySetInnerHTML={{ __html: marked.parse(content) }}></div>
  </>
);

export default PostPage;

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
};
