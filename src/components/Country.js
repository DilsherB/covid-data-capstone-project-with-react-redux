import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCountries } from "../redux/countrySlice";

const Country = () => {
  const { countries, loading } = useSelector((state) => state.countrySlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);
  return (
    <div>
      <h1>Country Page</h1>
      {loading && <h3>Loading...</h3>}
      {/* {error && <h3>{error}</h3>} */}
      {countries.map((country) => {
        return (
          <div key={country.country}>
            <h2>Country: {country.country}</h2>
            <p>Continent: {country.continent}</p>
            <p>Population: {country.population}</p>
            <p>Total Covid Cases: {country.cases}</p>
            <p>Deaths due to Covid: {country.deaths}</p>
            <img alt="Country's Flag" src={country.countryInfo.flag} />
          </div>
        );
      })}
    </div>
  );
};

export default Country;
