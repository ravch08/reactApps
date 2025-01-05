import { useState } from "react";

import BackToHome from "../features/BackToHome";

const options = ["cricket", "football", "hockey"];
const days = ["weekdays", "weekends"];

const Radio = () => {
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedSport, setSelectedSport] = useState("");

  return (
    <>
      <BackToHome />
      <section aria-labelledby="Radio Sport Selection">
        <div className="container mx-auto">
          <h1 className="main-heading">Please select a sport to play.</h1>

          <div className="flex items-start justify-center gap-6">
            <select
              name="sports"
              className="rounded-md bg-slate-100 p-2"
              onChange={(e) => setSelectedSport(e.target.value)}
            >
              <option value="">select</option>
              {options?.map((option) => (
                <option value={option}>{option}</option>
              ))}
            </select>
            <select
              name="days"
              className="rounded-md bg-slate-100 p-2"
              onChange={(e) => setSelectedDay(e.target.value)}
            >
              <option value="">select</option>
              {days?.map((day) => <option value={day}>{day}</option>)}
            </select>
          </div>

          {!selectedDay || !selectedSport ? null : (
            <p className="mt-8 text-center text-base">
              You would like to play
              <span className="font-bold"> {selectedSport}</span> on the
              <span className="font-bold"> {selectedDay}</span>.
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default Radio;
