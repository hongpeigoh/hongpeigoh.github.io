import { useEffect, useState } from "react";
import { getAllPosts, BlogPost } from "./blogUtils";
import { Container, Typography, List, ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";
import { blogContainerStyle } from "../../styles/Blog";

export const BlogHome = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      const result = await getAllPosts();
      console.log(result);
      setPosts(result);
      setLoading(false);
    };
    loadPosts();
  }, []);

  if (loading) return <Typography>Loading blog posts…</Typography>;

  return (
    <Container maxWidth="md" sx={blogContainerStyle}>
      {loading ? (
        <Typography>Loading blog posts…</Typography>
      ) : (
        <>
          <Typography variant="h4" gutterBottom>
            Blog
          </Typography>
          <List>
            {posts.map((post) => (
              <ListItemButton
                key={post.slug}
                component={Link}
                to={`/blog/${post.slug}`}
              >
                <Typography variant="h6">{post.title}</Typography>
              </ListItemButton>
            ))}
          </List>
        </>
      )}
    </Container>
  );
};
