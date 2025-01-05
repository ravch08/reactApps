import { useEffect, useState } from "react";
import { number, string, z } from "zod";
import useDebounce from "../../hooks/useDebounce";
import useFetch from "../../hooks/useFetch";
import BackToHome from "../features/BackToHome";

const userSchema = z.object({
  id: number(),
  username: string(),
});

export type UserProps = z.infer<typeof userSchema>;

const Debouncing = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchterm] = useState("");

  const debouncedTerm = useDebounce(searchTerm, 1000);

  const { data, isLoading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/users`,
  );

  useEffect(() => {
    const filteredUsers = data.filter((item: UserProps) =>
      item?.username.toLowerCase().includes(debouncedTerm),
    );

    debouncedTerm ? setUsers(filteredUsers) : setUsers([]);
  }, [data, debouncedTerm]);

  return (
    <>
      <BackToHome />
      <section aria-labelledby="Pagination">
        <div className="container mx-auto">
          <div className="mb-12 flex flex-col items-center justify-center">
            <h1 className="main-heading">Debouncing</h1>

            <input
              type="text"
              id="search-field"
              value={searchTerm}
              placeholder="Enter Search term..."
              onChange={(e) => setSearchterm(e.target.value)}
              className="w-72 rounded-md bg-slate-200 px-3 py-2 text-sm"
            />

            <div className="mt-12 flex items-center gap-4">
              <p className="w-60">
                <span className="font-bold">SearchTerm:</span> {searchTerm}
              </p>
              <p className="w-60">
                <span className="font-bold">DebouncedTerm:</span>{" "}
                {debouncedTerm}
              </p>
            </div>

            <div className="mt-16 flex h-60 w-2/3 flex-col gap-2 rounded-md bg-blue-200 p-12">
              {isLoading ? <p>Loading...</p> : null}
              {error ? <p>{error}</p> : null}

              {users?.map((user: UserProps) => (
                <span key={user.id}>{user.username}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Debouncing;
