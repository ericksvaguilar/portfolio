import Link from "next/link";

const Post = ({ post }) => (
  <li>
    <h3>{post.frontmatter.title}</h3>
    <p>{post.frontmatter.date}</p>
    <p>{post.frontmatter.excerpt}</p>
    <Link href={`/blog/${post.slug}`}>
      <a>ler</a>
    </Link>
  </li>
);

export default Post;
