import MenuItem from "./MenuItem";
import { MenuListProps } from "./RecursiveMenu";

const MenuList = ({ list }: MenuListProps) => {
  return (
    <ul className="flex flex-col gap-4">
      {list && list.length > 0
        ? list.map((item) => <MenuItem key={item.id} menuItem={item} />)
        : null}
    </ul>
  );
};

export default MenuList;
