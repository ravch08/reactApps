import { useState } from "react";
import { MenuItemProps } from "../../../types/types";
import MenuList from "./MenuList";

const MenuItem = ({ menuItem }: MenuItemProps) => {
  const [showChildren, setShowChildren] = useState<{ [key: string]: boolean }>(
    {},
  );

  function toggleChildren(id: string) {
    setShowChildren({
      ...showChildren,
      [id]: !showChildren[id],
    });
  }

  !menuItem ? false : null;

  return (
    <>
      <li className="ml-6 flex flex-col gap-4">
        <div
          className="flex items-center gap-4"
          onClick={() => toggleChildren(menuItem.id)}
        >
          <h2
            className={
              menuItem.children
                ? "cursor-pointer font-medium text-black transition-colors duration-300 hover:text-amber-600"
                : "font-medium"
            }
          >
            {menuItem.label}
          </h2>
          {menuItem.children ? (
            <span className="font-bold">
              {showChildren[menuItem.id] ? "-" : "+"}
            </span>
          ) : null}
        </div>
        {menuItem &&
        menuItem.children &&
        menuItem.children.length > 0 &&
        showChildren[menuItem.id] ? (
          <MenuList list={menuItem.children} />
        ) : null}
      </li>
    </>
  );
};

export default MenuItem;
