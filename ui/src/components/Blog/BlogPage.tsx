import { useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import { BlogPost, getPostBySlug } from "./blogUtils";
import { marked } from "marked";
import { useEffect, useState } from "react";
import { blogContainerStyle } from "../../styles/Blog";

export const BlogPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [html, setHtml] = useState<string>("");
  useEffect(() => {
    const fetchPost = async () => {
      if (slug) {
        const result = await getPostBySlug(slug);
        console.log(result);
        if (result) {
          setPost(result);
          const htmlContent = await marked.parse(result.content);
          setHtml(htmlContent);
        }
      }
    };
    fetchPost();
  }, [slug]);

  if (!post) {
    return (
      <Container maxWidth="md" sx={blogContainerStyle}>
        <Typography variant="h5">Post not found</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={blogContainerStyle}>
      {post ? (
        <>
          <Typography variant="h3" gutterBottom>
            {post.title}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {post.date}
          </Typography>
          <div dangerouslySetInnerHTML={{ __html: html }} />{" "}
        </>
      ) : (
        <Typography variant="h5">Post not found</Typography>
      )}
    </Container>
  );
};
