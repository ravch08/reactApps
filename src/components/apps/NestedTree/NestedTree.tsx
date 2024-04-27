import { BackToHome, MenuList } from "../../utils/helper";

export type MenuProps = {
  id: string;
  label: string;
  to: string;
  children?: MenuProps[];
};

const menus: MenuProps[] = [
  {
    id: "1",
    label: "Home",
    to: "/",
  },
  {
    id: "2",
    label: "Profile",
    to: "/profile",
    children: [
      {
        id: "2a",
        label: "Details",
        to: "details",
        children: [
          {
            id: "2a1",
            label: "Location",
            to: "location",
            children: [{ id: "2a1a", label: "City", to: "city" }],
          },
        ],
      },
    ],
  },
  {
    id: "3",
    label: "Settings",
    to: "/settings",
    children: [
      { id: "3a", label: "Account", to: "account" },
      {
        id: "3b",
        label: "Security",
        to: "security",
        children: [
          { id: "3b1", label: "Login", to: "login" },
          {
            id: "3b2",
            label: "Register",
            to: "register",
            children: [{ id: "3b21", label: "Random data", to: "" }],
          },
        ],
      },
    ],
  },
];

const NestedTree = () => {
  return (
    <>
      <BackToHome />
      <section aria-labelledby="Nested Tree View">
        <div className="container">
          <MenuList menus={menus} />
        </div>
      </section>
    </>
  );
};

export default NestedTree;
