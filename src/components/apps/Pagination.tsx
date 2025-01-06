import { useEffect, useState } from "react";
import { number, string, z } from "zod";

import BackToHome from "../features/BackToHome";
import Loading from "../features/Loading";

const postSchema = z.object({
  id: number().optional(),
  title: string().max(4, { message: "Name should be 4 characters or long!" }),
  body: string().max(4, { message: "Name should be 4 characters or long!" }),
});

export type UserProps = z.infer<typeof postSchema>;

const Pagination = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [postsPerPage, setPostsPerPage] = useState<number>(10);

  async function getPosts() {
    setIsLoading(true);

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();

    setPosts(data);
    setIsLoading(false);
  }

  const pagesArr = [];
  const noOfPages = Math.floor(posts.length / postsPerPage);

  const startingPos = (currentPage - 1) * postsPerPage;
  const endingPos = startingPos + postsPerPage;

  const requiredPosts = posts.slice(startingPos, endingPos);

  for (let i = 1; i <= noOfPages; i++) {
    pagesArr.push(i);
  }

  const handlePrevButton = () => {
    if (currentPage <= 1) {
      setCurrentPage(noOfPages);
    } else {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextButton = () => {
    if (currentPage >= noOfPages) {
      setCurrentPage(1);
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    try {
      getPosts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <BackToHome />
      <section aria-labelledby="Pagination">
        <div className="container mx-auto flex flex-col items-center">
          <div className="mb-12 flex w-full items-center justify-between px-6">
            <h1 className="main-heading">All Posts</h1>

            <div className="flex items-center gap-2 rounded-md bg-blue-800 p-2 text-sm">
              <span className=" text-white">Posts per Page: </span>
              <select
                id="postsPerPage"
                className="ml-2 rounded-sm border border-slate-300 p-1"
                onChange={(e) => setPostsPerPage(parseInt(e.target.value))}
              >
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
                <option value={25}>25</option>
              </select>
            </div>
          </div>

          <div className="w-full rounded-md bg-transparent">
            {isLoading ? <Loading /> : null}

            <div className="flex flex-wrap items-center justify-between gap-6">
              {requiredPosts.length
                ? requiredPosts.map((post: UserProps) => (
                    <div
                      key={post.id}
                      className="w-[18%] rounded-md bg-blue-500 px-4 py-6 text-center text-white"
                    >
                      <span>{post.id}</span>
                      <h2 className="my-3 line-clamp-1 text-xl font-semibold text-black">
                        {post.title}
                      </h2>
                      <p className="line-clamp-3">{post.body}</p>
                    </div>
                  ))
                : null}
            </div>
          </div>

          <div className="mt-16 flex items-center gap-4">
            <button className="btn-nav" onClick={handlePrevButton}>
              Prev
            </button>
            {pagesArr?.map((page) => (
              <button
                key={page}
                className={`btn-page ${page === currentPage ? "active" : ""}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
            <button className="btn-nav" onClick={handleNextButton}>
              Next
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pagination;
