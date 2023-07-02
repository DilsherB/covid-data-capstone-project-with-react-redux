import React from "react";
import PropTypes from "prop-types";

import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Detail = ({ thisCountry }) => {
  return (
    <div className="mx-5">
      <NavLink to="/home">
        <FaArrowLeft />
      </NavLink>
      <h1>Detail</h1>
      <h1>{thisCountry}</h1>
    </div>
  );
};
Detail.propTypes = {
  thisCountry: PropTypes.string.isRequired,
};

export default Detail;
