import { useState } from "react";

import { MenuList } from "../../utils/helper";
import { MenuProps } from "./NestedTree";

const MenuItem = ({ menuItem }: { menuItem: MenuProps }) => {
  const [showChildren, setShowChildren] = useState(false);

  return (
    <li className="ml-8 py-2">
      <h2
        onClick={() => setShowChildren((prev) => !prev)}
        className="flex items-center gap-1 text-xl font-medium"
      >
        {menuItem.label}
        {menuItem.children ? (
          !showChildren ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm3 10.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z"
                clipRule="evenodd"
              />
            </svg>
          )
        ) : null}
      </h2>
      {showChildren && menuItem.children && menuItem.children.length ? (
        <MenuList key={menuItem.id} menus={menuItem.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
