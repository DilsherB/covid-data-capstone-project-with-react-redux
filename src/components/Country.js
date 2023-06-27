import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCountries } from "../redux/APIData";

const Country = () => {
  const countries = useSelector((state) => state.countrySlice.countries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries);
  });
  return (
    <div>
      <h1>Country Page</h1>
      {countries.map((country) => {
        return (
          <div key={country.id}>
            <h2>{country.name}</h2>
            <p>{country.capital}</p>
            <p>{country.population}</p>
            <p>{country.region}</p>
            <p>{country.subregion}</p>
            <p>{country.languages}</p>
            <p>{country.borders}</p>
            <p>{country.flag}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Country;
