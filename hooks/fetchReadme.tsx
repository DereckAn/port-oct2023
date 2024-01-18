'use client';
import { useEffect, useState } from "react";

const ReadmeFile = () => {
  const [readme, setReadme] = useState<string | null>(null);

  useEffect(() => {
    fetch(
      "https://api.github.com/repos/DereckAn/port-oct2023/contents/README.md"
    )
      .then((response) => response.json())
      .then((data) => {
        const decodedReadme = atob(data.content);
        setReadme(decodedReadme);
      })
      .catch((error) => console.error(error));
  }, []);

  return <div>{readme ? <p>{readme}</p> : <p>Loading...</p>}</div>;
};

export default ReadmeFile;
