import Head from "next/head";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Post from "components/Post";

const Blog = ({ posts }) => {
  console.log(posts);

  return (
    <>
      <Head>
        <title>erick aguilar | blog</title>
      </Head>

      <ul>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </ul>
    </>
  );
};

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
