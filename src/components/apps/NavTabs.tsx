import { useState } from "react";
import { navtabData } from "../utils/data";
import { BackToHome } from "../utils/helper";

const NavTabs = () => {
  const [tabID, setTabID] = useState(1);

  return (
    <>
      <BackToHome />
      <section aria-labelledby="Navtabs">
        <div className="container mx-auto">
          <h1 className="main-heading">Navtabs</h1>

          <div className="flex items-center gap-1">
            {navtabData?.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setTabID(tab.id)}
                className={`rounded-t-md px-8 py-2 text-sm text-white ${tabID === tab.id ? "bg-blue-700" : "bg-blue-400"}`}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <p className="h-[300px] rounded-b-md bg-slate-100 p-6 leading-8">
            {navtabData[tabID - 1].content}
          </p>
        </div>
      </section>
    </>
  );
};

export default NavTabs;
