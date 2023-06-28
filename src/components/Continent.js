import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContinent } from "../redux/continentSlice";

const Country = () => {
  const { continents, loading, error } = useSelector(
    (state) => state.continentSlice
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContinent());
  }, [dispatch]);
  return (
    <div className="grid md:grid-cols-2 mx-5 gap-10 mb-10">
      {loading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {continents.map((continent) => {
        return (
          <div
            className="h-80 border-2 rounded p-5 bg-white"
            key={continent.continent}
          >
            <div className="flex gap-3">
              <div className="bg-slate-200 h-32 w-1/3 flex items-center justify-center rounded p-3">
                <img
                  // width={200}
                  className="rounded"
                  alt="continent's Flag"
                  src={continent.continentInfo.flag}
                />
              </div>
              <div className="text-left h-40">
                <h2 className="text-2xl md:text-2xl mb-5">
                  continent:{" "}
                  <span className="text-blue-900">{continent.continent}</span>
                </h2>
                <p className="flex justify-between">
                  <span>Population: </span>
                  <span>{continent.population}</span>
                </p>
                <p className="flex justify-between">
                  <span>Continent: </span>
                  <span>{continent.continent}</span>
                </p>
              </div>
            </div>
            <div className="p-3 grid gap-x-20 grid-cols-2 text-left bg-slate-300 rounded">
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
