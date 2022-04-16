import Link from "next/link";

import { motion } from "framer-motion";

import Time from "components/Time";

import styles from "./index.module.scss";

const Post = ({ post }) => {
  const date = {
    time: post.frontmatter.date,
    currentFormat: "YYYY-MM-DD",
    formatTo: "LL",
  };

  return (
    <motion.li whileHover={{}} className={styles.post}>
      <Link passHref href={`/blog/${post.slug}`}>
        <a>
          <small>
            <Time date={date} />
          </small>
          <h3>{post.frontmatter.title}</h3>
          <p>{post.frontmatter.excerpt}</p>
        </a>
      </Link>
    </motion.li>
  );
};

export default Post;
