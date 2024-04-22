import { useEffect, useState } from "react";
import { number, string, z } from "zod";
import BackToHome from "../features/BackToHome";

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
        <div className="container flex flex-col items-center">
          <div className="mb-12 flex items-center justify-center">
            <h2 className="mr-8 text-2xl font-bold">All Posts</h2>

            <span>Posts per Page: </span>
            <select
              id="postsPerPage"
              className="ml-2 border border-slate-300 p-1"
              onChange={(e) => setPostsPerPage(parseInt(e.target.value))}
            >
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
              <option value={25}>25</option>
            </select>
          </div>
          {isLoading ? (
            <h2 className="py-6 text-center text-xl">Loading...</h2>
          ) : null}
          <div className="flex flex-wrap items-center justify-between gap-6">
            {requiredPosts.length
              ? requiredPosts.map((post: UserProps) => (
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

          <div className="mt-12 flex items-center gap-4">
            <button className="btn-page" onClick={handlePrevButton}>
              Prev
            </button>
            {pagesArr?.map((page) => (
              <button
                key={page}
                className={
                  page === currentPage ? "btn-page active" : "btn-page"
                }
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
            <button className="btn-page" onClick={handleNextButton}>
              Next
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pagination;
