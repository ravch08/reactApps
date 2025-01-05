import BackHome from "../../features/BackToHome.tsx";
import MenuList from "./MenuList.tsx";

import { recursiveMenuData } from "../../utils/data.ts";

export type MenuProps = {
  id: string;
  label: string;
  to: string;
  children?: MenuProps[];
};

export type MenuListProps = {
  list: MenuProps[];
};

export type MenuItemProps = {
  menuItem: MenuProps;
};

const RecursiveMenu = () => {
  return (
    <>
      <BackHome />
      <section aria-labelledby="Recursive Menu" className="mt-20">
        <div className="container mx-auto">
          <MenuList list={recursiveMenuData} />
        </div>
      </section>
    </>
  );
};

export default RecursiveMenu;
