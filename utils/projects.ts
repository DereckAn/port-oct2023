import fs from "fs";
import matter from "gray-matter";
import path from "path";
import * as Icons from "react-icons";
import { IconType } from "react-icons";

interface ProjectFrontmatter {
  title: string;
  category: string;
  imageC: string;
  href: string;
  details: string[];
  imageR: string;
  responsabilities: string[];
  technologies: (string | IconType)[];
  imageP: string;
  imageBR: string;
  imageBL: string;
}

export interface Project extends ProjectFrontmatter {
  slug: string;
  content: string;
  technologies: IconType[];
}

export function getProjects(): Project[] {
  const projectsDirectory = path.join(process.cwd(), "content/projects");
  const filenames = fs.readdirSync(projectsDirectory);

  const projects = filenames.map((filename) => {
    const slug = filename.replace(".md", "");
    const filePath = path.join(projectsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    // Convert technology strings to actual icon components
    const techIcons = data.technologies.map((tech: string) => (Icons as any)[tech] as IconType);

    return {
      slug,
      content,
      ...(data as ProjectFrontmatter),
      technologies: techIcons,
    };
  });

  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  const projects = getProjects();
  return projects.find((project) => project.slug === slug);
}
