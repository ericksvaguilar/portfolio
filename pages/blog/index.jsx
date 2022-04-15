import Head from "next/head";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Post from "components/Post";

import styles from "styles/pages/blog.module.scss";

const Blog = ({ posts }) => (
  <>
    <Head>
      <title>erick aguilar | blog</title>
    </Head>

    <section className={styles.blog}>
      <h1>dicas. tutoriais. artigos.</h1>

      <ul>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </ul>
    </section>
  </>
);

export default Blog;

export const getStaticProps = async () => {
  // get files from the posts directory
  const files = fs.readdirSync(path.join("posts"));

  // get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // create slug
    const slug = filename.replace(".md", "");

    // get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
};
