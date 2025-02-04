import { useState } from "react";
import BackToHome from "../features/BackToHome";

type ExpanseProps = {
  expAmount: number;
  expItem: string;
};

const Expanse = () => {
  const [expanseAmount, setExpanseAmount] = useState<number>(0);
  const [expanseItem, setExpanseItem] = useState<string>("");
  const [expanse, setExpanse] = useState<ExpanseProps[]>([]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!expanseAmount || !expanseItem) return;

    setExpanse((prev) => [
      ...prev,
      { expAmount: expanseAmount, expItem: expanseItem },
    ]);

    setExpanseAmount(0);
    setExpanseItem("");
  }

  return (
    <>
      <BackToHome />

      <section aria-labelledby="Expanse Tracker">
        <div className="container mx-auto">
          <h2 className="main-heading">Expanse Tracker</h2>
          <form
            onSubmit={handleSubmit}
            className="mx-auto mb-20 w-1/2 rounded-md bg-slate-200 p-4"
          >
            <div className="form-control">
              <label htmlFor="expAmount">Expanse Amount: </label>
              <input
                autoFocus
                type="number"
                id="expAmount"
                className="input-primary"
                value={expanseAmount}
                placeholder="Enter Expanse..."
                onChange={(e) => setExpanseAmount(+e.target.value)}
              />
            </div>
            <div className="form-control">
              <label htmlFor="expItem">Expanse Item: </label>
              <input
                type="text"
                id="expItem"
                value={expanseItem}
                className="input-primary"
                placeholder="Enter Expanse Item..."
                onChange={(e) => setExpanseItem(e.target.value)}
              />
            </div>
            <button type="submit" className="btn-primary mt-8">
              Add Expanse
            </button>
          </form>

          <div className="mx-auto w-1/2 rounded-md bg-blue-500 text-white">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="w-1/2 border border-blue-100 bg-blue-800 p-2 font-semibold">
                    Expanse Item
                  </th>
                  <th className="w-1/2 border border-blue-100 bg-blue-800 p-2 font-semibold">
                    Expanse Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {expanse.length > 0
                  ? expanse?.map((exp) => (
                      <tr key={exp.expItem}>
                        <td className="border border-blue-100 p-2 text-center text-sm">
                          {exp?.expItem}
                        </td>
                        <td className="border border-blue-100 p-2 text-center text-sm">
                          {exp?.expAmount}
                        </td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Expanse;
