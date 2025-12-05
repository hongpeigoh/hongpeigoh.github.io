import { Container, Typography } from "@mui/material";
import { useParams } from "@tanstack/react-router";
import { marked } from "marked";
import { useEffect, useState } from "react";
import { blogContainerStyle } from "../../-styles/Blog";
import { type BlogPost, getPostBySlug } from "./blogUtils";

export const BlogPage = () => {
  const { slug } = useParams({ from: "/" });
  const [post, setPost] = useState<BlogPost | null>(null);
  const [html, setHtml] = useState<string>("");
  useEffect(() => {
    const fetchPost = async () => {
      if (slug) {
        const result = await getPostBySlug(slug);
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
