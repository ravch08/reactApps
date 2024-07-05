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

    console.log(1);
    debouncedTerm ? setUsers(filteredUsers) : setUsers([]);
  }, [data, debouncedTerm]);

  return (
    <>
      <BackToHome />
      <section aria-labelledby="Pagination">
        <div className="container flex flex-col items-center">
          <div className="mb-12 flex flex-col items-center justify-center">
            <h2 className="mb-8 text-2xl font-bold">Debouncing</h2>

            <form>
              <input
                type="text"
                id="search-field"
                value={searchTerm}
                placeholder="Enter Search term..."
                className="bg-slate-200 px-3 py-2 text-sm"
                onChange={(e) => setSearchterm(e.target.value)}
              />
            </form>

            <div className="mt-12 flex items-center gap-4">
              <p className="w-60">
                <span className="font-bold">SearchTerm:</span> {searchTerm}
              </p>
              <p className="w-60">
                <span className="font-bold">DebouncedTerm:</span>{" "}
                {debouncedTerm}
              </p>
            </div>

            <div className="mt-16 flex h-60 w-full flex-col gap-2 bg-slate-200 p-12">
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
