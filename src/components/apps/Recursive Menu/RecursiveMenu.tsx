import BackHome from "../../features/BackToHome.tsx";
import MenuList from "./MenuList.tsx";

import { recursiveMenuData } from "../../utils/data.ts";

const RecursiveMenu = () => {
  return (
    <>
      <BackHome />
      <section aria-labelledby="Recursive Menu" className="mt-20">
        <div className="container">
          <MenuList list={recursiveMenuData} />
        </div>
      </section>
    </>
  );
};

export default RecursiveMenu;
