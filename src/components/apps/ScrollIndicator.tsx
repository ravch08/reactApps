import { useEffect, useState } from "react";
import { number, string, z } from "zod";

import BackHome from "../features/BackToHome.tsx";

const postSchema = z.object({
  id: number(),
  title: string().min(5, { message: "Atleast 5 characters are required!" }),
});

export type PostProps = z.infer<typeof postSchema>;

const ScrollIndicator = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [scrolledPercent, setScrolledPercent] = useState(0);

  async function getPosts() {
    setIsLoading(true);

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();

    setPosts(data);
    setIsLoading(false);
  }

  const showScrollBar = () => {
    const scrolledHeight =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrolledPercent((scrolledHeight / height) * 100);
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", showScrollBar);
    return () => window.removeEventListener("scroll", () => {});
  }, []);

  return (
    <>
      <BackHome />
      <div
        aria-labelledby="scroll Indicator"
        className={`sticky left-0 top-0 z-20 h-[10px] bg-amber-600`}
        style={{ width: `${scrolledPercent}%` }}
      ></div>
      <div
        aria-labelledby="scroll Indicator bg"
        className={`fixed left-0 top-0 z-0 h-[10px] w-full bg-gray-500`}
      ></div>
      <section aria-labelledby="Scroll Indicator" className="mt-24">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {isLoading ? <h2>Loading...</h2> : null}
            {posts?.map((post: PostProps) => (
              <div
                key={post.id}
                className="flex h-[200px] w-[20%] flex-col items-center justify-center  gap-4 rounded-md bg-slate-200 p-6 text-center"
              >
                <span>{post.id}</span>
                <h2>{post.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ScrollIndicator;
