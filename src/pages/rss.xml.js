import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("posts");
  const projects = await getCollection("projects");
  const experience = await getCollection("experience");

  return rss({
    title: "Portfolio + Blog site for Tushya Gupta",
    description: "A portfoilio cum blog site for Tushya Gupta",
    site: context.site,
    items: [
      ...posts.map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/posts/${post.slug}/`,
      })),
      ...projects.map((project) => ({
        title: project.data.title,
        pubDate: project.data.pubDate,
        description: project.data.description,
        link: `/projects/${project.slug}/`,
      })),
      ...experience.map((experience_) => ({
        title: experience_.data.title,
        pubDate: experience_.data.pubDate,
        description: experience_.data.description,
        link: `/experience/${experience_.slug}/`,
      })),
    ],
    customData: `<language>en-us</language>`,
  });
}

