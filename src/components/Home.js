import React from "react";
import Country from "./Country";
import Continent from "./Continent";
import Global from "./Global";

const Home = () => {
  const [radio, setRadio] = React.useState("country");
  const handleChange = (e) => {
    setRadio(e.target.value);
  };
  return (
    <div>
      <div className="flex gap-10 justify-center mb-3">
        <p>View by</p>
        <div>
          <input
            className="cursor-pointer"
            type="radio"
            value="country"
            checked={radio === "country"}
            onChange={handleChange}
          />{" "}
          Country
        </div>
        <div>
          <input
            className="cursor-pointer"
            type="radio"
            value="continent"
            checked={radio === "continent"}
            onChange={handleChange}
          />{" "}
          Continent
        </div>
      </div>
      <Global />
      {radio === "country" && <Country />}
      {radio === "continent" && <Continent />}
    </div>
  );
};

export default Home;
