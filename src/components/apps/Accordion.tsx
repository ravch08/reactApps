import { useState } from "react";
import { accordionData } from "../utils/data";
import { BackToHome } from "../utils/helper";

const Accordion = () => {
  const [checked, setChecked] = useState(false);
  const [selectedIDs, setSelectedIDs] = useState<number[]>([]);
  const [selectedID, setSelectedID] = useState<number | null>(null);

  const handleClick = (idx: number) => {
    if (!checked) {
      if (selectedID === idx) {
        return setSelectedID(null);
      }

      setSelectedID(idx);
    } else {
      if (selectedIDs.includes(idx)) {
        const newSelectedIDs = selectedIDs.filter((item) => item !== idx);
        return setSelectedIDs(newSelectedIDs);
      }

      setSelectedIDs((prev) => [...prev, idx]);
    }
  };

  return (
    <>
      <BackToHome />
      <section aria-labelledby="Accordion with Multiselect">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <h1 className="main-heading">Accordion</h1>

          <label
            htmlFor="multiselect"
            className="mb-8 flex items-center gap-2 text-sm"
          >
            <input
              type="checkbox"
              name="multiselect"
              checked={checked}
              className="h-4 w-4"
              onChange={() => setChecked((prev) => !prev)}
            />
            <span>Enable MultiSelect</span>
          </label>

          <div className="flex w-[1000px] flex-col items-start gap-6 px-8">
            {accordionData?.map((item) => (
              <div className="flex w-full flex-col" key={item.id}>
                <div className="flex items-center justify-between gap-4 rounded-t-md bg-blue-600 p-2 text-white">
                  <h2>{item.title}</h2>
                  <button
                    onClick={() => handleClick(item.id)}
                    className="flex h-6 w-6 items-center justify-center bg-blue-800"
                  >
                    <svg
                      fill="white"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`size-3 transition-transform duration-200 ease-in-out  ${selectedIDs.includes(item.id) || selectedID === item.id ? "rotate-180" : "rotate-0"}`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                {!checked && selectedID === item.id ? (
                  <p className="bg-slate-100 p-4">{item.content}</p>
                ) : null}

                {checked && selectedIDs.includes(item.id) ? (
                  <p className="bg-slate-100 p-4">{item.content}</p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Accordion;
