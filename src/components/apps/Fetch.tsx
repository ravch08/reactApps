import { useEffect, useState } from "react";
import { number, string, z } from "zod";
import BackToHome from "../features/BackToHome";

const postSchema = z.object({
  id: number().optional(),
  title: string().max(4, { message: "Name should be 4 characters or long!" }),
  body: string().max(4, { message: "Name should be 4 characters or long!" }),
});

export type UserProps = z.infer<typeof postSchema>;

const Fetch = () => {
  const [posts, setPosts] = useState([]);
  const [noOfPosts, setNoOfPosts] = useState(10);
  const [overload, setOverload] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => setNoOfPosts((prev) => prev + 10);

  useEffect(() => {
    async function getPosts() {
      setIsLoading(true);

      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts`,
      );
      const data = await response.json();

      if (noOfPosts > 100) {
        setOverload(true);
      }

      const requiredPosts = data.slice(0, noOfPosts);

      setPosts(requiredPosts);
      setIsLoading(false);
    }

    try {
      getPosts();
    } catch (error) {
      console.log(error);
    }
  }, [noOfPosts]);

  return (
    <>
      <BackToHome />
      <section aria-labelledby="Fetch">
        <div className="container flex flex-col items-center">
          <h2 className="mb-12 text-2xl font-bold">All Posts</h2>
          {isLoading ? (
            <h2 className="py-6 text-center text-xl">Loading...</h2>
          ) : null}
          <div className="flex flex-wrap items-center justify-between gap-6">
            {posts.length
              ? posts.map((post: UserProps) => (
                  <div
                    key={post.id}
                    className="h-60 w-[18%] border border-slate-400 p-4 text-center"
                  >
                    <span>{post.id}</span>
                    <h2 className="my-3 line-clamp-1 text-xl font-semibold">
                      {post.title}
                    </h2>
                    <p className="line-clamp-5">{post.body}</p>
                  </div>
                ))
              : null}
          </div>
          <button
            disabled={overload}
            onClick={handleLoadMore}
            className="btn-link mt-12"
          >
            {isLoading ? "Loading..." : "Load More"}
          </button>
        </div>
      </section>
    </>
  );
};

export default Fetch;
