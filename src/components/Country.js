import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCountries } from "../redux/countrySlice";

const Country = () => {
  const { countries, loading, error } = useSelector(
    (state) => state.countrySlice
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);
  return (
    <div className="grid md:grid-cols-2 mx-5 gap-10 mb-10">
      {loading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {countries.map((country) => {
        return (
          <div className="h-80 border-2 rounded p-5" key={country.country}>
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
                <h2 className="text-2xl md:text-3xl underline mb-5">
                  Country: {country.country}
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
          </div>
        );
      })}
    </div>
  );
};

export default Country;
