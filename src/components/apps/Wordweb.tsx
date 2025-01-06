import { useEffect, useState } from "react";

import BackButton from "../features/BackToHome.tsx";

export type MeaningProps = {
  definition: string;
  example: string;
};

const Wordweb = () => {
  const [meaning, setMeaning] = useState<MeaningProps | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const options = {
      method: "GET",
      "content-type": "application/json",
      headers: {
        "X-RapidAPI-Key": "c793fdcd03mshfdd8cf6c2eefd10p126f7bjsnbec3d4c1e0a7",
        "X-RapidAPI-Host": "mashape-community-urban-dictionary.p.rapidapi.com",
      },
    };

    async function getMeaning() {
      try {
        const response = await fetch(
          `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${searchTerm}`,
          options,
        );

        const result = await response.json();
        const data = result.list[0];

        setTimeout(() => {
          setMeaning(data);
        }, 1000);
      } catch (error) {
        console.error(error);
      }
    }

    getMeaning();
  }, [searchTerm]);

  return (
    <section className="section">
      <div className="container mx-auto h-[60vh]">
        <BackButton />
        <div className="flex flex-col items-center">
          <h2 className="main-heading">WORDWEB</h2>

          <form className="w-2/4 text-center">
            <div className="flex items-center justify-center gap-4">
              <label htmlFor="searchWord">
                <strong>Search a Word:</strong>
              </label>
              <input
                type="text"
                autoFocus
                id="searchWord"
                value={searchTerm}
                placeholder="Enter here..."
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-primary w-2/3"
              />
            </div>
          </form>

          <div className="mt-12 flex w-2/4 flex-col items-start gap-4 rounded-lg bg-blue-200 p-8">
            {meaning ? (
              <>
                <p>
                  <strong>Defintion:</strong> {meaning?.definition}
                </p>
                <p>
                  <strong>Example:</strong> {meaning?.example}
                </p>
              </>
            ) : (
              <p>Searching...</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wordweb;
