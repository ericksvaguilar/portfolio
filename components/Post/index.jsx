import Link from "next/link";

import { motion } from "framer-motion";

import styles from "./index.module.scss";

const Post = ({ post }) => (
  <motion.li
    whileHover={{ backgroundColor: "#ffffff0a" }}
    className={styles.post}
  >
    <Link passHref href={`/blog/${post.slug}`}>
      <a>
        <small>
          <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
        </small>
        <h3>{post.frontmatter.title}</h3>
        <p>{post.frontmatter.excerpt}</p>
      </a>
    </Link>
  </motion.li>
);

export default Post;
