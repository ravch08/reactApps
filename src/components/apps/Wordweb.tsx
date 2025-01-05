import { useEffect, useState } from "react";

import BackButton from "../features/BackToHome.tsx";

const Wordweb = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [meaning, setMeaning] = useState("");

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

  const meaningClass = meaning
    ? "mt-12 w-2/4 rounded-lg bg-amber-200 p-8"
    : "d-none";

  return (
    <section className="section">
      <div className="container mx-auto mx-auto h-[60vh]">
        <BackButton />
        <div className="flex flex-col items-center">
          <h2 className="mb-12 text-center font-serif text-5xl">WORDWEB</h2>
          <form className="w-2/4 text-center">
            <div className="form-control flex items-center justify-between">
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
                className="ml-6 w-[75%] rounded-md bg-slate-200 px-4 py-2"
              />
            </div>
          </form>

          <div className={meaningClass}>
            <p>
              <strong>Defintion:</strong> {meaning?.definition || "Searching"}
            </p>
            <p>
              <strong>Example:</strong> {meaning?.example || "Searching"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wordweb;
