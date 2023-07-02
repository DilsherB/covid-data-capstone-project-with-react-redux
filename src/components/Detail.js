import React, { useState } from "react";
// import PropTypes from 'prop-types';
import { useSelector } from "react-redux";

const Detail = () => {
  // eslint-disable-next-line no-unused-vars
  const [currentCuntary, setCurrentCuntary] = useState("Albania");

  const countryData = useSelector((state) => state.countrySlice.countries.find(
    (country) => country.country === currentCuntary
  ));
  return (
    <div>
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
