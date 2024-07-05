import { useState } from "react";
import { v4 as uuid } from "uuid";

import BackButton from "../features/BackToHome.tsx";

const CheckedTodolist = () => {
  const [toDoItem, setToDoItem] = useState<string>("");
  const [itemsList, setItemsList] = useState<string[]>([]);
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!toDoItem) return;
    setItemsList((prev) => [...prev, toDoItem]);
    setToDoItem("");
  };

  const toggleCheckBox = (itemID: number) => {
    setCheckedItems((prevCheckedItems) => {
      if (prevCheckedItems.includes(itemID)) {
        return prevCheckedItems.filter((id) => id !== itemID);
      } else {
        return [...prevCheckedItems, itemID];
      }
    });
  };

  const deleteTodoItem = (itemID: number) => {
    const newList = itemsList.filter((_, idx) => idx !== itemID);
    setItemsList(newList);
    setCheckedItems([]);
  };

  return (
    <section className="section">
      <div className="container mx-auto h-[80vh]">
        <BackButton />
        <div className="mx-auto flex w-1/2 flex-col items-center justify-center">
          <h2 className="mb-12 text-2xl font-semibold">TO-DO LIST</h2>

          <form className="mb-12">
            <label htmlFor="todoItem" className="font-semibold">
              Add Items:
            </label>

            <input
              autoFocus
              type="text"
              id="todoItem"
              value={toDoItem}
              onChange={(e) => setToDoItem(e.target.value)}
              className="mx-2 rounded-md bg-slate-200 px-4 py-2 outline-none"
            />

            <button
              type="submit"
              onClick={handleSubmit}
              className="rounded-md bg-slate-800 px-6 py-2 text-white"
            >
              Submit
            </button>
          </form>

          <div className="flex w-full flex-col items-center gap-4">
            {itemsList.length !== 0 ? (
              itemsList?.map((item, idx) => (
                <div
                  key={uuid()}
                  onChange={() => toggleCheckBox(idx)}
                  className="flex w-full items-center justify-between gap-2 rounded-md bg-slate-400 px-6 py-2 text-white"
                >
                  <div className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      onChange={() => {}}
                      checked={checkedItems.includes(idx)}
                    />
                    <p>{item}</p>
                  </div>
                  <button
                    className={
                      checkedItems.includes(idx)
                        ? "rounded-md bg-red-800 p-2"
                        : "rounded-md bg-gray-800 p-2"
                    }
                    disabled={!checkedItems.includes(idx)}
                    // className="rounded-md bg-red-800 p-2"
                    onClick={() => deleteTodoItem(idx)}
                  >
                    <svg
                      fill="white"
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              ))
            ) : (
              <p className="w-full text-center">No Items Added...</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckedTodolist;
