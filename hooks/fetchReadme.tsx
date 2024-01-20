import { useEffect, useState } from "react";

const ReadmeFile = () => {
  const [portfolioText, setPortfolioText] = useState<string | null>(null);
  const [myRoleText, setMyRoleText] = useState<string | null>(null);
  const [projectText, setProjectText] = useState<string | null>(null);

  useEffect(() => {
    const fetchReadme = async () => {
      try {
        const response = await fetch("https://api.github.com/repos/DereckAn/port-oct2023/contents/README.md");
        const data = await response.json();
        const decodedReadme = atob(data.content);

        const portfolioEndIndex = decodedReadme.indexOf('![First](assets/images/port2.webp)') + '![First](assets/images/port2.webp)'.length;
        const myRoleEndIndex = decodedReadme.indexOf('![Role](assets/images/aa.webp)') + '![Role](assets/images/aa.webp)'.length;

        setPortfolioText(decodedReadme.substring(0, portfolioEndIndex));
        setMyRoleText(decodedReadme.substring(portfolioEndIndex, myRoleEndIndex));
        setProjectText(decodedReadme.substring(myRoleEndIndex));
      } catch (error) {
        // setError('An error occurred while fetching the README file.');
        console.error(error);
      }
    };

    fetchReadme();
  }, []);

  return { portfolioText, myRoleText, projectText, };
};

export default ReadmeFile;
