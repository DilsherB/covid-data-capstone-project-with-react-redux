import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaClock } from "react-icons/fa";
import { fetchCountries } from "../redux/countrySlice";
import DateComponent from "../globals";

const Country = () => {
  const [show, setShow] = useState(false);
  const [currentCuntary, setCurrentCuntary] = useState(null);
  const { countries, loading, error } = useSelector(
    (state) => state.countrySlice
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);
  const handleShow = (country) => {
    setCurrentCuntary(country);
    setShow(true);
  };
  const handleHide = () => {
    // setHide(!hide);
    setShow(false);
  };

  return (
    <div>
      {loading && <h3 className="text-center">Loading...</h3>}
      {error && <h3>{error}</h3>}
      <div className="grid grid-cols-2 mx-5 md:gap-10 overflow-hidden">
        {countries.map((country) => {
          return (
            <div
              type="button"
              className="h-max p-3 border-2 shadow-lg rounded bg-white flex flex-col justify-around"
              key={country.country}
            >
              <div className="flex gap-3">
                <div className="hidden bg-slate-200 h-32 lg:h-max lg:mb-5 w-1/3 md:flex items-center justify-center rounded p-3">
                  <img
                    // width={200}
                    className="rounded"
                    alt={`${country.country}'s flag`}
                    src={country.countryInfo.flag}
                  />
                </div>
                <div className="text-left h-max">
                  <div className="text-center md:text-left md:flex mb-5">
                    <p className="text-xl md:text-2xl">Country: </p>
                    <p className="text-xl md:text-2xl text-blue-900">
                      {country.country}
                    </p>
                  </div>
                  <p className="flex justify-between">
                    <span>Population: </span>
                    <span>{country.population}</span>
                  </p>
                  <p className="md:flex md:justify-between">
                    <span>Continent: </span>
                    <span>{country.continent}</span>
                  </p>
                </div>
              </div>
              {show && currentCuntary === country.country ? (
                <div>
                  <button
                    type="button"
                    className="w-max text-white bg-slate-700 hover:bg-slate-300 rounded-lg px-6 py-1 mb-1"
                    onClick={handleHide}
                  >
                    Hide Details
                  </button>
                  <div className="p-3 grid gap-x-20 md:grid-cols-2 text-left bg-slate-300 rounded">
                    <p className="md:flex md:justify-between">
                      <span>Total Cases: </span>
                      <span>{country.cases}</span>
                    </p>
                    <p className="md:flex md:justify-between">
                      <span>Total Recovered: </span>
                      <span>{country.recovered}</span>
                    </p>
                    <p className="md:flex md:justify-between">
                      <span>Today Cases: </span>
                      <span>{country.todayCases}</span>
                    </p>
                    <p className="md:flex md:justify-between">
                      <span>Today Recovered: </span>
                      <span>{country.todayRecovered}</span>
                    </p>
                    <p className="md:flex md:justify-between">
                      <span>Deaths: </span>
                      <span>{country.deaths}</span>
                    </p>
                    <p className="md:flex md:justify-between">
                      <span>Critical: </span>
                      <span>{country.critical}</span>
                    </p>
                    <p className="md:flex md:justify-between">
                      <span>Active: </span>
                      <span>{country.active}</span>
                    </p>
                    <p className="md:flex md:justify-between">
                      <span>Today Deaths: </span>
                      <span>{country.todayDeaths}</span>
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex justify-center m-0">
                  <button
                    type="button"
                    className="w-max text-white bg-slate-700 hover:bg-slate-300 rounded-lg px-8 py-2"
                    onClick={() => handleShow(country.country)}
                  >
                    Show Details{" "}
                  </button>
                </div>
              )}
              <div className="md:flex justify-center gap-5 pt-3 leading-10 align-middle">
                <span className="hidden md:flex mt-3">
                  <FaClock />
                </span>
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
