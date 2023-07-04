import React from "react";
import { FaArrowLeft } from "react-icons/fa";
// import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import DateComponent from "../globals";

const Detail = () => {
  const countryData = useSelector((state) => state.countrySlice.country);
  return (
    <div>
      <NavLink to="/home">
        <button type="button" className="px-6 py-2 bg-slate-300 rounded-2xl flex mx-5">
          <FaArrowLeft />
        </button>
      </NavLink>
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl mb-3 font-bold">{`${countryData.country}'s Data`}</h1>
        <table className="mx-auto">
          <tbody>
            <tr>
              <td colSpan={2} className="text-center text-2xl underline">Continent: {countryData.continent}</td>
            </tr>
            <tr>
              <td className="text-left">Total Cases</td>
              <td className="text-right">{countryData.cases}</td>
            </tr>
            <tr>
              <td className="text-left">Total Recovered</td>
              <td className="text-right">{countryData.recovered}</td>
            </tr>
            <tr>
              <td className="text-left">Today Cases</td>
              <td className="text-right">{countryData.todayCases}</td>
            </tr>
            <tr>
              <td className="text-left">Today Recovered</td>
              <td className="text-right">{countryData.todayRecovered}</td>
            </tr>
            <tr>
              <td className="text-left">Deaths</td>
              <td className="text-right">{countryData.deaths}</td>
            </tr>
            <tr>
              <td className="text-left">Critical</td>
              <td className="text-right">{countryData.critical}</td>
            </tr>
            <tr>
              <td className="text-left">Active</td>
              <td className="text-right">{countryData.active}</td>
            </tr>
            <tr>
              <td className="text-left">Today Deaths</td>
              <td className="text-right">{countryData.todayDeaths}</td>
            </tr>
            <tr className="font-bold bg-slate-300 px-8">
              <td colSpan={2} className="px-3 py-1">
                Last Updated at: {DateComponent(countryData.updated)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Detail;
