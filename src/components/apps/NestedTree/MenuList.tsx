import { MenuItem } from "../../utils/helper";
import { MenuProps } from "./NestedTree";

const MenuList = ({ menus }: { menus: MenuProps[] }) => {
  return (
    <ul>
      {menus && menus.length
        ? menus?.map((menu) => <MenuItem key={menu.id} menuItem={menu} />)
        : null}
    </ul>
  );
};

export default MenuList;
