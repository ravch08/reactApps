import { useEffect, useState } from "react";
import { z } from "zod";

import { BackToHome, Loading } from "../utils/helper";

const todoSchema = z.object({
  id: z.number(),
  title: z.string(),
  body: z.string(),
});

export type TodoProps = z.infer<typeof todoSchema>;

const LoadMoreData = () => {
  const [todos, setTodos] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentBatch, setCurrentBatch] = useState(1);

  async function getTodos() {
    try {
      setIsLoading(true);

      const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      const data = await res.json();

      setTodos(data);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  const itemsPerBatch = 12;
  const totalBatches = Math.ceil(todos?.length / itemsPerBatch);
  const todosBatch = todos?.slice(0, currentBatch * itemsPerBatch);

  const handleMore = () => {
    if (currentBatch < totalBatches) {
      setCurrentBatch((prev) => prev + 1);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <BackToHome />
      <section aria-labelledby="Products Load More">
        <div className="container mx-auto">
          <div className="mb-12 flex flex-col items-center justify-center gap-8 text-center">
            <h2 className="text-4xl font-semibold">Load More Data</h2>
          </div>
          {isError ? (
            <h2 className="mt-5 font-bold">Something went wrong!</h2>
          ) : null}
          {isLoading ? <Loading /> : null}
          <div className="grid grid-cols-4 gap-4">
            {todosBatch?.map((todo: TodoProps) => (
              <div
                key={todo.id}
                className="flex flex-col gap-3 border border-black px-4 py-6 text-center"
              >
                <span>{todo.id}</span>
                <h3 className="line-clamp-1 text-lg font-medium">
                  {todo.title}
                </h3>
                <p className="line-clamp-3 text-sm">{todo.body}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-3">
            <button className="btn-link mt-20" onClick={handleMore}>
              {currentBatch === totalBatches ? "No More Data" : "Load More"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoadMoreData;
