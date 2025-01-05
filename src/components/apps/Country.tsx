import { useState } from "react";

import BackToHome from "../features/BackToHome";
import { countries } from "../utils/data";

const Country = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [countryCode, setCountryCode] = useState("");

  const selectedCities = countries.filter(
    (country) => country.code === countryCode,
  )[0]?.cities;

  return (
    <>
      <BackToHome />
      <section aria-labelledby="Country Dropdown">
        <div className="container mx-auto">
          <h1 className="main-heading">Country Dropdown</h1>

          <div className="flex items-center justify-center gap-4">
            <select
              name="country"
              className="rounded-md bg-slate-200 p-2"
              onChange={(e) => setCountryCode(e.target.value)}
            >
              <option value="">select</option>
              {countries.map((country) => (
                <option key={country.id} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>

            <select
              name="cities"
              className="rounded-md bg-slate-200 p-2"
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              <option value="">select</option>
              {selectedCities?.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {countryCode && selectedCity ? (
            <p className="mt-12 text-center">
              You selected{" "}
              <span className="font-bold">
                {selectedCity}, {countryCode}
              </span>
              .
            </p>
          ) : null}
        </div>
      </section>
    </>
  );
};

export default Country;
