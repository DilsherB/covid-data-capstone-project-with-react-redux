import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContinent } from "../redux/continentSlice";

const Country = () => {
  const { continents, loading, error } = useSelector(
    (state) => state.continentSlice
  );
  console.log(continents);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContinent());
  }, [dispatch]);
  return (
    <div>
      {loading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {continents.map((continent) => {
        return (
          <div
            className="h-80 border-2 rounded p-5 bg-white flex flex-col justify-around"
            key={continent.continent}
          >
            <div className="text-left h-20">
              <h2 className="text-2xl md:text-2xl mb-5">
                continent:{" "}
                <span className="text-blue-900">{continent.continent}</span>
              </h2>
              <p className="flex justify-start gap-5">
                <span>Population: </span>
                <span>{continent.population}</span>
              </p>
            </div>
            <div className="p-3 grid gap-x-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-left bg-slate-300 rounded">
              <p className="flex justify-between">
                <span>Total Cases: </span>
                <span>{continent.cases}</span>
              </p>
              <p className="flex justify-between">
                <span>Total Recovered: </span>
                <span>{continent.recovered}</span>
              </p>
              <p className="flex justify-between">
                <span>Today Cases: </span>
                <span>{continent.todayCases}</span>
              </p>
              <p className="flex justify-between">
                <span>Today Recovered: </span>
                <span>{continent.todayRecovered}</span>
              </p>
              <p className="flex justify-between">
                <span>Deaths: </span>
                <span>{continent.deaths}</span>
              </p>
              <p className="flex justify-between">
                <span>Critical: </span>
                <span>{continent.critical}</span>
              </p>
              <p className="flex justify-between">
                <span>Active: </span>
                <span>{continent.active}</span>
              </p>
              <p className="flex justify-between">
                <span>Today Deaths: </span>
                <span>{continent.todayDeaths}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Country;
