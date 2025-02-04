import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');
export interface MarkdownData {
  title: string;
  category: string;
  imageC: string;
  href: string;
  details: string[];
  responsabilities: string[];
  technologies: string[];
  contentHtml: string;
}

export async function getMarkdownFiles(): Promise<MarkdownData[]> {
  const fileNames = fs.readdirSync(contentDirectory);
  const allPostsData: MarkdownData[] = await Promise.all(
    fileNames.map(async (fileName) => {
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Parsear el frontmatter
      const matterResult = matter(fileContents);

      // Convertir el contenido Markdown a HTML
      const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
      const contentHtml = processedContent.toString();

      return {
        title: matterResult.data.title,
        category: matterResult.data.category,
        imageC: matterResult.data.imageC,
        href: matterResult.data.href,
        details: matterResult.data.details,
        responsabilities: matterResult.data.responsabilities,
        technologies: matterResult.data.technologies,
        contentHtml,
      };
    })
  );

  return allPostsData;
}