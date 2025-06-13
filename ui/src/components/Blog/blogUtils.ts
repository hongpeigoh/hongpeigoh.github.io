import fm from "front-matter";

export type BlogPost = {
  title: string;
  date: string;
  slug: string;
  content: string;
};

const postSlugs = ["250613_1"];

export const getAllPosts = async (): Promise<BlogPost[]> => {
  const posts = await Promise.all(
    postSlugs.map(async (slug) => {
      const res = await fetch(`${process.env.PUBLIC_URL}/posts/${slug}.md`);
      const raw = await res.text();
      const parsed = fm<{ title: string; date: string; slug: string }>(raw);

      return {
        title: parsed.attributes.title,
        date: parsed.attributes.date,
        slug,
        content: parsed.body,
      };
    })
  );

  return posts;
};

export const getPostBySlug = async (
  slug: string
): Promise<BlogPost | undefined> => {
  try {
    const res = await fetch(`${process.env.PUBLIC_URL}/posts/${slug}.md`);
    const raw = await res.text();
    const parsed = fm<{ title: string; date: string; slug: string }>(raw);
    if (parsed.attributes.title === undefined) return undefined;
    return {
      title: parsed.attributes.title,
      date: parsed.attributes.date,
      slug,
      content: parsed.body,
    };
  } catch (err) {
    return undefined;
  }
};
