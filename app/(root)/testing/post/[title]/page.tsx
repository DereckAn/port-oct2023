// app/(root)/post/[title]/page.tsx

import { getMarkdownFiles } from "@/utils/projects";

interface PostProps {
  params: { title: string };
}

export default async function Post({ params }: PostProps) {
  // Obtener todos los archivos Markdown
  const markdownFiles = await getMarkdownFiles();
  // Encontrar el archivo correspondiente al título
  const postData = markdownFiles.find(
    (file) => encodeURIComponent(file.title) === params.title
  );

  if (!postData) {
    return <div>Post not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{postData.title}</h1>
      <img src={postData.imageC} alt={postData.title} className="w-full h-64 object-cover mb-4" />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  );
}

// app/(root)/post/[title]/page.tsx
export async function generateStaticParams() {
  const markdownFiles = await getMarkdownFiles();
  return markdownFiles.map((file) => ({
    title: encodeURIComponent(file.title),
  }));
}