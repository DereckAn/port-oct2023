// 'use server';

import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

const contentDirectory = path.join(process.cwd(), "content");
export interface MarkdownData {
  id: string;
  title: string;
  category: string;
  imageC: string;
  href: string;
  details: string[];
  imageR: string;
  responsabilities: string[];
  technologies: string[];
  imageP: string;
  imageBR: string;
  imageBL: string;
  challenge: string;
  outcome: string;
  content: string; // This will contain the markdown content after the frontmatter
}

export async function getMarkdownFiles(): Promise<MarkdownData[]> {
  const fileNames = fs.readdirSync(contentDirectory);
  const allPostsData: MarkdownData[] = await Promise.all(
    fileNames.map(async (fileName) => {
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Parsear el frontmatter
      const matterResult = matter(fileContents);

      // Convertir el contenido Markdown a HTML
      const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
      const contentHtml = processedContent.toString();

      return {
        id: matterResult.data.id,
        title: matterResult.data.title,
        category: matterResult.data.category,
        imageC: matterResult.data.imageC,
        href: matterResult.data.href,
        details: matterResult.data.details,
        responsabilities: matterResult.data.responsabilities,
        technologies: matterResult.data.technologies,
        contentHtml,
        imageR: matterResult.data.imageR,
        imageP: matterResult.data.imageP,
        imageBR: matterResult.data.imageBR,
        imageBL: matterResult.data.imageBL,
        challenge: matterResult.data.challenge,
        outcome: matterResult.data.outcome,
        content: matterResult.content,
      };
    })
  );

  return allPostsData;
}
