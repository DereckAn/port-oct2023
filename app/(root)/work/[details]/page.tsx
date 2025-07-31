import { getMarkdownFiles } from "@/utils/projects";
import SectionMyRole from "./sections/section-my-role";
import SectionTheProject from "./sections/section-the-project";
import SectionHeader from "./sections/seection-header";

interface DetailsWorkPageProps {
  params: { details: string };
}

export default async function DetailsWorkPage({
  params,
}: DetailsWorkPageProps) {
  const markdownFiles = await getMarkdownFiles();
  const postData = markdownFiles.find(
    (file) => encodeURIComponent(file.title) === params.details
  );

  if (!postData) {
    return <div>Post not found</div>;
  }

  return (
    <main>
      <SectionHeader
        description={postData.details}
        details={postData.details}
        imageT={postData.imageC}
        href={postData.href}
        title={postData.title}
      />
      <SectionMyRole
        imageR={postData.imageR}
        responsabiliteies={postData.responsabilities}
        technologies={postData.technologies}
      />
      <SectionTheProject
        challenge={postData.challenge}
        imageBL={postData.imageBL}
        imageBR={postData.imageBR}
        imageP={postData.imageP}
        outcome={postData.outcome}
      />
    </main>
  );
}

export async function generateStaticParams() {
  const markdownFiles = await getMarkdownFiles();
  return markdownFiles.map((file) => ({
    title: encodeURIComponent(file.title),
  }));
}
