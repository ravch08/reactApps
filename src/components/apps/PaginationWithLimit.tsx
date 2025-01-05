import { useEffect, useState } from "react";
import BackToHome from "../features/BackToHome";

type ProductProps = {
  id: number;
  title: string;
  thumbnail: string;
};

const PaginationWithLimit = () => {
  const [page, setPage] = useState(0);
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState<number | null>(null);

  const getProducts = async (page: number) => {
    try {
      setIsLoading(true);

      const res = await fetch(
        `https://dummyjson.com/products?limit=12&skip=${page * 12}`,
      );

      if (!res.ok) {
        throw new Error(`Failed to fetch data! ${res.statusText}`);
      }

      const data = await res.json();

      setTotalPages(Math.ceil(data?.total / 12));
      setProducts(data?.products);
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const pageArr = [];

  for (let i = 0; i < totalPages!; i++) {
    pageArr[i] = i;
  }

  useEffect(() => {
    getProducts(page);
  }, [page]);

  const handlePrev = () => {
    if (page <= 0) {
      return setPage(totalPages! - 1);
    }

    setPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (page === totalPages! - 1) {
      return setPage(0);
    }

    setPage((prev) => prev + 1);
  };

  return (
    <>
      <BackToHome />
      <section aria-labelledby="Pagination with Limit">
        <div className="container mx-auto flex flex-col items-center">
          <div className="mb-12 flex flex-col items-center justify-center">
            <h1 className="main-heading">All Products</h1>

            {error ? <h2>{error}</h2> : null}
            {isLoading ? (
              <h2 className="mb-6 text-center">Loading...</h2>
            ) : null}

            <div className="flex flex-wrap justify-center gap-6">
              {products.length > 0 &&
                products?.map((product: ProductProps) => (
                  <div
                    key={product.id}
                    className="flex w-[20%] flex-col items-center rounded-md bg-slate-100 p-2 shadow-md"
                  >
                    <figure>
                      <img src={product.thumbnail} alt={product.title} />
                    </figure>
                    <h2 className="text-center text-sm font-medium">
                      {product.id}: {product.title}{" "}
                    </h2>
                  </div>
                ))}
            </div>

            <div className="mt-12 flex w-full items-center justify-center gap-2 text-center">
              <button onClick={handlePrev} className="btn-nav">
                Prev
              </button>
              {pageArr?.map((item) => (
                <button
                  key={item}
                  onClick={() => setPage(item)}
                  className={`btn-page ${page === item ? "active" : ""}`}
                >
                  {item + 1}
                </button>
              ))}
              <button onClick={handleNext} className="btn-nav">
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaginationWithLimit;
