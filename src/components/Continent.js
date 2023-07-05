import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaClock } from "react-icons/fa";
import { fetchContinent } from "../redux/continentSlice";
import DateComponent from "../globals";

const Continent = () => {
  const { continents, loading, error } = useSelector(
    (state) => state.continentSlice
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (!continents.length) {
      dispatch(fetchContinent());
    }
  }, [continents, dispatch]);
  return (
    <div>
      {loading && (
        <div className="loader-container">
          <div className="relative">
            <div className="w-20 h-20 border-purple-200 border-2 rounded-full" />
            <div className="w-20 h-20 border-purple-700 border-t-2 animate-spin rounded-full absolute left-0 top-0" />
          </div>
        </div>
      )}
      {error && <h3>{error}</h3>}
      <div className="grid md:grid-cols-2 mx-5 gap-10">
        {continents.map((continent) => {
          return (
            <div
              className="h-96 xl:h-80 shadow-lg border-2 rounded p-5 bg-white flex flex-col justify-around"
              key={continent.continent}
            >
              <div className="text-left h-20">
                <h2 className="text-2xl md:text-2xl mb-3">
                  continent:{" "}
                  <span className="text-blue-900">{continent.continent}</span>
                </h2>
                <p className="flex justify-start gap-5">
                  <span>Population: </span>
                  <span>{continent.population}</span>
                </p>
              </div>
              <div className="p-3 grid gap-x-20 xl:grid-cols-4 text-left bg-slate-300 rounded">
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
              <div className="flex justify-center gap-5 pt-3 leading-10 align-middle">
                <span className="mt-3">
                  <FaClock />
                </span>
                <span>Updated on: </span>
                <span>{DateComponent(continent.updated)}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Continent;
