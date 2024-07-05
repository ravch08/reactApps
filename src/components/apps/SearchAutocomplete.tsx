import { useEffect, useState } from "react";
import { number, string, z } from "zod";

import BackToHome from "../features/BackToHome";

const userSchema = z.object({
  id: number(),
  name: string().min(4, { message: "Name must be atleast 4 characters long!" }),
});

export type UserProps = z.infer<typeof userSchema>;

const SearchAutocomplete = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchList, setSearchList] = useState<UserProps[]>([]);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  async function getUsers(input: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await res.json();

    const results = data.filter((item: UserProps) => {
      return input && item.name
        ? item.name.toLowerCase().includes(input)
        : null;
    });
    setSearchList(results);
  }

  useEffect(() => {
    getUsers(searchTerm);
  }, [searchTerm]);

  const handleSelection = (value: string) => {
    setSelectedItem(value);
    setSearchTerm("");
    setSearchList([]);
  };

  console.log(selectedItem);

  return (
    <>
      <BackToHome />
      <section aria-labelledby="Search Autocomplete">
        <div className="container">
          <h2 className="main-heading">Search AutoComplete</h2>
          {selectedItem ? (
            <p>
              You selected: <strong>{selectedItem}</strong>
            </p>
          ) : null}

          <div className="mt-12 w-1/2">
            <input
              autoFocus
              type="text"
              value={searchTerm}
              className="input-primary w-full"
              placeholder="Enter text here..."
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul className="w-full bg-slate-50">
              {searchList.length > 0
                ? searchList.map((item) => (
                    <li
                      key={item.id}
                      className="search-res"
                      onClick={(e) =>
                        handleSelection(e.currentTarget.textContent!)
                      }
                    >
                      {item.name}
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchAutocomplete;
