import { useState } from "react";
import BackToHome from "../features/BackToHome";

const countries = [
  {
    id: "c1",
    code: "IN",
    name: "India",
    cities: ["Delhi", "Mumbai", "Bangalore"],
  },
  {
    id: "c2",
    code: "PAK",
    name: "Pakistan",
    cities: ["Lahore", "Karachi", "Rawalpindi"],
  },
  {
    id: "c3",
    code: "CH",
    name: "China",
    cities: ["Hongkong", "Shanghai", "Yunnan"],
  },
];

const Country = () => {
  const [code, setCode] = useState("IN");

  const selectedCountry = countries.filter((item) => item.code === code)[0];

  return (
    <>
      <BackToHome />
      <section aria-labelledby="Country Dropdown">
        <div className="container">
          <select
            id="country"
            name="country"
            className="mr-2 border border-slate-300 bg-slate-300 p-3 outline-none"
            onChange={(e) => setCode(e.target.value)}
          >
            {countries?.map((item) => (
              <option key={item.id} value={item.code}>
                {item.name}
              </option>
            ))}
          </select>
          <select
            id="cities"
            name="cities"
            className="border border-slate-100 bg-amber-100 p-3 outline-none"
          >
            {selectedCountry.cities?.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </section>
    </>
  );
};

export default Country;
