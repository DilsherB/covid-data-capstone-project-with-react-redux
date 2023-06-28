import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCountries } from "../redux/countrySlice";
import DateComponent from "../globals";

const Country = () => {
  const { countries, loading, error } = useSelector(
    (state) => state.countrySlice
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);
  return (
    <div>
      {loading && <h3 className="text-center">Loading...</h3>}
      {error && <h3>{error}</h3>}
      <div className="grid md:grid-cols-2 mx-5 gap-10">
        {countries.map((country) => {
          return (
            <div
              className="h-96 p-3 border-2 shadow-lg rounded bg-white flex flex-col justify-around"
              key={country.country}
            >
              <div className="flex gap-3">
                <div className="bg-slate-200 h-32 w-1/3 flex items-center justify-center rounded p-3">
                  <img
                    // width={200}
                    className="rounded"
                    alt="Country's Flag"
                    src={country.countryInfo.flag}
                  />
                </div>
                <div className="text-left h-40">
                  <h2 className="text-2xl md:text-2xl mb-5">
                    Country:{" "}
                    <span className="text-blue-900">{country.country}</span>
                  </h2>
                  <p className="flex justify-between">
                    <span>Population: </span>
                    <span>{country.population}</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Continent: </span>
                    <span>{country.continent}</span>
                  </p>
                </div>
              </div>
              <div className="p-3 grid gap-x-20 grid-cols-2 text-left bg-slate-300 rounded">
                <p className="flex justify-between">
                  <span>Total Cases: </span>
                  <span>{country.cases}</span>
                </p>
                <p className="flex justify-between">
                  <span>Total Recovered: </span>
                  <span>{country.recovered}</span>
                </p>
                <p className="flex justify-between">
                  <span>Today Cases: </span>
                  <span>{country.todayCases}</span>
                </p>
                <p className="flex justify-between">
                  <span>Today Recovered: </span>
                  <span>{country.todayRecovered}</span>
                </p>
                <p className="flex justify-between">
                  <span>Deaths: </span>
                  <span>{country.deaths}</span>
                </p>
                <p className="flex justify-between">
                  <span>Critical: </span>
                  <span>{country.critical}</span>
                </p>
                <p className="flex justify-between">
                  <span>Active: </span>
                  <span>{country.active}</span>
                </p>
                <p className="flex justify-between">
                  <span>Today Deaths: </span>
                  <span>{country.todayDeaths}</span>
                </p>
              </div>
              <div className="flex justify-around pt-3">
                <span>Updated on: </span>
                <span>{DateComponent(country.updated)}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Country;
