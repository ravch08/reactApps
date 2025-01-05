import { useState } from "react";
import BackToHome from "../../features/BackToHome";

import { states } from "../../utils/data";

const MultiSelectDropdown = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [selectedStates, setSelectedStates] = useState<string[]>([]);

  const handleShowDropdown = () => setShowDropdown((prev) => !prev);

  const handleAddState = (state: string) => {
    const selectedStatesCopy = [...selectedStates];

    selectedStatesCopy.push(state);
    setSelectedStates(selectedStatesCopy);
  };

  return (
    <>
      <BackToHome />
      <section aria-labelledby="Multiselect State Dropdown">
        <div className="container mx-auto">
          <div className=" flex flex-col items-center gap-2">
            <h2 className="mb-8 text-2xl font-semibold">
              Multiselect State Dropdown
            </h2>

            <div className="relative mx-auto flex h-12 w-2/3 items-center rounded-sm bg-white pl-4">
              <span className="font-bold">
                {selectedStates.length > 0
                  ? `${selectedStates.length} states selected`
                  : `--- select your states ---`}
              </span>
              <button
                className="absolute right-0 top-0 cursor-pointer bg-blue-300 p-4 transition-colors duration-500 hover:bg-blue-500"
                onClick={handleShowDropdown}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`size-4 transition-transform duration-300 ease-in-out ${showDropdown ? "rotate-180" : "rotate-0"}`}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div
              className={`${showDropdown ? "grid" : "hidden"} w-3/4 grid-cols-4 gap-4 rounded-md bg-blue-100 p-6 shadow-lg`}
            >
              {states?.map((state) => (
                <div className="flex items-center gap-2" key={state}>
                  <input
                    id={state}
                    name={state}
                    type="checkbox"
                    onChange={() => handleAddState(state)}
                  />
                  <span>{state}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MultiSelectDropdown;
