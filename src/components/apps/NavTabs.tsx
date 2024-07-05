import { useState } from "react";
import { navtabData } from "../utils/data";
import { BackToHome } from "../utils/helper";

const NavTabs = () => {
  const [index, setIndex] = useState<number>(0);
  const [selected, setSelected] = useState<number>(1);

  const handleTabChange = (idx: number) => {
    setIndex(idx - 1);
    setSelected(idx);
  };

  return (
    <>
      <BackToHome />
      <section aria-labelledby="Navtabs">
        <div className="container">
          <div className="flex items-center gap-1">
            {navtabData?.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabChange(item.id)}
                className={
                  selected === item.id
                    ? "active rounded-t-md bg-slate-400 px-8 py-2 text-sm"
                    : "rounded-t-md bg-slate-400 px-8 py-2 text-sm"
                }
              >
                {item.title}
              </button>
            ))}
          </div>
          <div className="h-[300px] rounded-b-md bg-slate-100 p-4">
            {navtabData[index].content}
          </div>
        </div>
      </section>
    </>
  );
};

export default NavTabs;
