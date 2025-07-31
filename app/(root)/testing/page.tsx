// app/(root)/testing/page.tsx

import { getMarkdownFiles, MarkdownData } from "@/utils/projects";
import Link from "next/link";

export default async function Home() {
  // Obtener los archivos Markdown usando la función asincrónica
  const markdownFiles = await getMarkdownFiles();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {markdownFiles.map((file, index) => (
        <Link key={index} href={`/testing/post/${encodeURIComponent(file.title)}`}>
          <div className="border p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-100 transition">
            <img src={file.imageC} alt={file.title} className="w-full h-48 object-cover mb-4" />
            <h2 className="text-xl font-bold">{file.title}</h2>
            <p className="text-gray-600">{file.category}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}