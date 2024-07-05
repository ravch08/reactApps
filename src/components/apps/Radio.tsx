import { useState } from "react";

import BackToHome from "../features/BackToHome";

const options = ["cricket", "football", "hockey"];
const days = ["weekdays", "weekends"];

const Radio = () => {
  const [sport, setSport] = useState<string | null>(null);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(`You are playing ${sport} on ${selectedDay}.`);
  };

  return (
    <>
      <BackToHome />
      <section aria-labelledby="Radio Selection">
        <div className="container">
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-xl font-semibold">
              Please select a sport to play!!!
            </h2>
            <form onSubmit={handleFormSubmit}>
              {options.length
                ? options.map((option) => (
                    <label htmlFor={option} className="my-1 block" key={option}>
                      <input
                        required
                        id={option}
                        type="radio"
                        value={option}
                        className="mr-2"
                        checked={sport === option}
                        onChange={(e) => setSport(e.target.value)}
                      />
                      {option}
                    </label>
                  ))
                : null}

              <h2 className="mb-4 mt-12 text-xl font-semibold">
                Please select when to play!!!
              </h2>

              {days.length
                ? days.map((day) => (
                    <label htmlFor={day} className="my-1 block" key={day}>
                      <input
                        required
                        id={day}
                        value={day}
                        type="radio"
                        className="mr-2"
                        checked={selectedDay === day}
                        onChange={(e) => setSelectedDay(e.target.value)}
                      />
                      {day}
                    </label>
                  ))
                : null}
              <button type="submit" className="btn-link mt-8">
                Submit
              </button>
            </form>

            <p className="mt-12 text-xl font-medium">{message}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Radio;
