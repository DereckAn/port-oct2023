import { useEffect, useState } from "react";

const ReadmeFile = () => {
  const [portfolioText, setPortfolioText] = useState<string | null>(null);
  const [myRoleText, setMyRoleText] = useState<string | null>(null);
  const [projectText, setProjectText] = useState<string | null>(null);
  const [paragraphs, setParagraphs] = useState<string[] | null>(null);

  useEffect(() => {
    const fetchReadme = async () => {
      try {
        const response = await fetch("https://api.github.com/repos/DereckAn/port-oct2023/contents/README.md");
        const data = await response.json();
        const decodedReadme = atob(data.content);

        const portfolioEndIndex = decodedReadme.indexOf('!First') + '!First'.length;
        const myRoleEndIndex = decodedReadme.indexOf('!Role') + '!Role'.length;

        const portfolioText = decodedReadme.substring(0, portfolioEndIndex);
        setPortfolioText(portfolioText);
        setMyRoleText(decodedReadme.substring(portfolioEndIndex, myRoleEndIndex));
        setProjectText(decodedReadme.substring(myRoleEndIndex));

        if (portfolioText) {
          let paragraphs = portfolioText.split(" - ").slice(1);
          let endOfList = paragraphs.findIndex((paragraph) =>
            paragraph.includes("![First]")
          );
          if (endOfList !== -1) {
            paragraphs = paragraphs.slice(0, endOfList);
          }
          setParagraphs(paragraphs);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchReadme();
  }, []);

  return { portfolioText, myRoleText, projectText, paragraphs };
};

export default ReadmeFile;
