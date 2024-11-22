import BackToHome from "../../features/BackToHome";
import LazyImage from "./LazyImage";

const imageArr = [
  "https://images.unsplash.com/photo-1714165861000-ee5b656c54e3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1714357779320-235515316e22?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1675621475704-0df9d884f637?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1504892612018-159ffa1d147f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1514897575457-c4db467cf78e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1714234374195-f2fbbcef7259?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const LazyLoading = () => {
  return (
    <>
      <BackToHome />
      <section aria-labelledby="Lazy Loading Images">
        <div className="container">
          <h2 className="main-heading pb-12">Lazy Loading Images</h2>
          {imageArr?.map((img, idx) => (
            <div key={idx} className="mb-20 flex items-start gap-8">
              <LazyImage key={idx} imgSrc={img} />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
                illo debitis maiores nesciunt voluptas nam eligendi, quo
                expedita alias fugiat minima recusandae deleniti facere sed nemo
                perferendis eveniet numquam, animi laborum nobis odio
                temporibus. Vitae dolores deleniti, laboriosam enim at quasi?
                Soluta repellat est eveniet repudiandae, inventore amet
                reiciendis, aperiam doloribus atque ipsum corporis laudantium
                similique quod deleniti tempora neque!
                <br />
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
                illo debitis maiores nesciunt voluptas nam eligendi, quo
                expedita alias fugiat minima recusandae deleniti facere sed nemo
                perferendis eveniet numquam, animi laborum nobis odio
                temporibus. Vitae dolores deleniti, laboriosam enim at quasi?
                Soluta repellat est eveniet repudiandae, inventore amet
                reiciendis, aperiam doloribus atque ipsum corporis laudantium
                similique quod deleniti tempora neque!
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default LazyLoading;
