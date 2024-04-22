import React, { useState } from "react";
import { BackToHome } from "../utils/helper";

const accordionData = [
  {
    id: 1,
    title: "Title 1",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores accusantium accusamus asperiores veniam repudiandae, quibusdam ex nihil sunt, quaerat consequuntur laboriosam natus aspernatur molestias porro nesciunt totam eveniet? Itaque, quaerat.`,
  },
  {
    id: 2,
    title: "Title 2",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores accusantium accusamus asperiores veniam repudiandae, quibusdam ex nihil sunt, quaerat consequuntur laboriosam natus aspernatur molestias porro nesciunt totam eveniet? Itaque, quaerat.`,
  },
  {
    id: 3,
    title: "Title 3",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores accusantium accusamus asperiores veniam repudiandae, quibusdam ex nihil sunt, quaerat consequuntur laboriosam natus aspernatur molestias porro nesciunt totam eveniet? Itaque, quaerat.`,
  },
];

const Accordion = () => {
  const [selected, setSelected] = useState<number | null>(null);

  function handleToggleAccordion(id: React.SetStateAction<number | null>) {
    setSelected(selected === id ? null : id);
  }

  return (
    <>
      <BackToHome />
      <section>
        <div className="container">
          <h1 className="main-heading">Accordion</h1>
          {accordionData.length
            ? accordionData.map((item) => (
                <div
                  key={item.id}
                  className="mb-4 flex flex-col items-start border border-slate-200"
                >
                  <div className="flex w-full items-center justify-between bg-slate-200 p-3">
                    <h2>{item.title}</h2>
                    <div
                      onClick={() => handleToggleAccordion(item.id)}
                      className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-sm bg-slate-300 hover:bg-slate-400"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className={
                          selected === item.id
                            ? `h-4 w-4 rotate-180`
                            : `h-4 w-4 rotate-0`
                        }
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  {selected === item.id ? (
                    <p className="p-3">{item.content}</p>
                  ) : null}
                </div>
              ))
            : null}
        </div>
      </section>
    </>
  );
};

export default Accordion;
