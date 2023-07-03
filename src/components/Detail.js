import React from "react";
import { FaArrowLeft } from "react-icons/fa";
// import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Detail = () => {
  // eslint-disable-next-line no-unused-vars
  const currentCuntary = useSelector((state) => state.countrySlice.country);
  const countryData = useSelector((state) => state.countrySlice.countries.find(
    (country) => country.country === currentCuntary
  ));
  return (
    <div>
      <NavLink to="/home">
        <button type="button" className="px-6 py-2 bg-slate-300 rounded-2xl flex mx-5">
          <FaArrowLeft />
        </button>
      </NavLink>
      <div>
        <h1>{countryData.country}</h1>
        <p>Population: {countryData.population}</p>
        <p>Continent: {countryData.continent}</p>
        <p>Total Cases: {countryData.cases}</p>
        <p>Total Recovered: {countryData.recovered}</p>
        <p>Today Cases: {countryData.todayCases}</p>
        <p>Today Recovered: {countryData.todayRecovered}</p>
        <p>Deaths: {countryData.deaths}</p>
        <p>Critical: {countryData.critical}</p>
        <p>Active: {countryData.active}</p>
        <p>Today Deaths: {countryData.todayDeaths}</p>
      </div>
    </div>
  );
};

// Detail.propTypes = {
//   c: PropTypes.string.isRequired,
// };

export default Detail;
