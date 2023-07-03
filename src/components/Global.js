import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaClock, FaEye, FaEyeSlash } from "react-icons/fa";
import { fetchGlobalData } from "../redux/globalSlice";
import DateComponent from "../globals";

const Global = () => {
  const [showData, setShowData] = useState(false);
  const { globals, loading, error } = useSelector((state) => state.globalSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    // Only fetch global data on first load
    if (!globals.cases) {
      dispatch(fetchGlobalData());
    }
  }, [globals, dispatch]);
  const handleShowData = () => {
    setShowData(!showData);
  };
  return (
    <div className=" m-5 border-2 rounded-lg shadow-lg">
      {loading && <h3 className="text-center">Loading...</h3>}
      {error && <h3>{error}</h3>}
      <div className="flex justify-between p-5">
        <div className="text-3xl">Covid-19 Global Data</div>
        <div>
          <button
            type="button"
            className="flex gap-3 text-white bg-slate-700 hover:bg-slate-800 font-medium rounded-lg px-8 py-2"
            onClick={handleShowData}
          >
            <span className="ease-in-out">{showData ? "Hide" : "Show"}</span>
            <span className="pt-1 ease-in-out">
              {showData ? <FaEyeSlash /> : <FaEye />}
            </span>
          </button>
        </div>
      </div>
      {showData ? (
        <div className="ease-in-out">
          <div
            key={globals.cases}
            className="m-5 mt-0 p-3 grid gap-x-20 md:grid-cols-2 xl:grid-cols-4 text-left bg-slate-300 rounded"
          >
            <p className="flex justify-between">
              <span>Total Cases: </span>
              <span>{globals.cases}</span>
            </p>
            <p className="flex justify-between">
              <span>Total Deaths: </span>
              <span>{globals.deaths}</span>
            </p>
            <p className="flex justify-between">
              <span>Today Cases: </span>
              <span>{globals.todayCases}</span>
            </p>
            <p className="flex justify-between">
              <span>Today Deaths: </span>
              <span>{globals.todayDeaths}</span>
            </p>
            <p className="flex justify-between">
              <span>Total Recovered: </span>
              <span>{globals.recovered}</span>
            </p>
            <p className="flex justify-between">
              <span>Today Recovered: </span>
              <span>{globals.todayRecovered}</span>
            </p>
            <p className="flex justify-between">
              <span>Total Active: </span>
              <span>{globals.active}</span>
            </p>
            <p className="flex justify-between">
              <span>Today Critical: </span>
              <span>{globals.critical}</span>
            </p>
          </div>
          <div className="m-5 mt-0 p-3 flex gap-5 text-left rounded">
            <span>
              <FaClock className="mt-1" />
            </span>
            <span>Updated On:</span>
            <span>{DateComponent(globals.updated)}</span>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Global;
