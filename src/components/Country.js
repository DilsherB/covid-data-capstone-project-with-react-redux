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
          <div key={country.country}>
            <div className="flex gap-3 mb-3">
              <div className="bg-slate-200 w-1/3 flex items-center justify-center p-3">
                <img
                  width={200}
                  className="rounded"
                  alt="Country's Flag"
                  src={country.countryInfo.flag}
                />
              </div>
              <div className="text-left">
                <h2 className="text-2xl md:text-3xl underline mb-5">
                  Country: {country.country}
                </h2>
                <p>Population: {country.population}</p>
                <p>Continent: {country.continent}</p>
              </div>
            </div>
            <div className="p-3 grid grid-cols-2 text-left bg-slate-300 rounded">
              <p>Total Cases: {country.cases}</p>
              <p>Total Recovered: {country.recovered}</p>
              <p>Today Cases: {country.todayCases}</p>
              <p>Today Recovered: {country.todayRecovered}</p>
              <p>Deaths: {country.deaths}</p>
              <p>Critical: {country.critical}</p>
              <p>Active: {country.active}</p>
              <p>Today Deaths: {country.todayDeaths}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Country;
