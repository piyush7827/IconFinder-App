import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import logo from "../assests/logo.png";
import IconCard from "../component/IconCard";
import Home from "../component/Home";

const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
    Authorization:
      "Bearer y9MhcLFzcUoFX7p4mtEp8d0mGbiXh5DyIWHGKyOZLgeStrw0vWJqDZVTMn1EMPkj",
  },
};

function Searchpage() {
  const { iconName } = useParams();
  const [iconResult, setIconResult] = useState();
  const [styles, setStyles] = useState();
  const [priceFilter, setPriceFilter] = useState("All");
  const [styleFilter, setStyleFilter] = useState();

  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.iconfinder.com/v4/icons/search?query=${iconName}&count=10`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        return response;
      })
      .then(function (response) {
        setIconResult(response);
      })
      .catch((err) => console.error(err));

    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.iconfinder.com/v4/styles?count=10`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        return response;
      })
      .then(function (response) {
        setStyles(response.styles);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <a href="#" className="navbar-brand">
          <img src={logo} alt="image1" />
        </a>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <form className="form-inline my-2 my-lg-0">
            <input
              type="search"
              className="from-control mr-sn-2"
              placeholder="Search"
              aria-label="search"
            />
            <button className="btn">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>
      </nav>
      {iconResult ? (
        <div>
          <div className="sidebar">
            <p>Filters</p>
            <div className="pricefilter"></div>
            <label>
              <input
                type="radio"
                name=""
                id=""
                value="free"
                checked={priceFilter == "free" ? true : false}
                onChange={(e) => setPriceFilter(e.target.value)}
              />
              Free
            </label>
            <label>
              <input
                type="radio"
                name=""
                id=""
                value="premium"
                checked={priceFilter == "premium" ? true : false}
                onChange={(e) => setPriceFilter(e.target.value)}
              />
              Premium
            </label>
            <label>
              <input
                type="radio"
                name=""
                id=""
                value="All"
                checked={priceFilter == "All" ? true : false}
                onChange={(e) => setStyleFilter(e.target.value)}
              />
              All Styles
            </label>
            {styles
              ? styles.map((style, index) => {
                  <label>
                    <input
                      type="radio"
                      name=""
                      id=""
                      value={style.identifier}
                      checked={styleFilter == style.identifier ? true : false}
                      onChange={(e) => setStyleFilter(e.target.value)}
                    />
                    {style.iconName}
                  </label>;
                })
              : null}
          </div>
          <div className="content">
            <h2>{iconName}</h2>
            <div className="showIcons">
              {iconResult.icon.map((icon, index) => {
                if (priceFilter == "All" && styleFilter == "All") {
                  return (
                    <IconCard
                      key={index}
                      url={icon.raster_sizes[1].format[0].preview_url}
                      tags={icon.tags}
                      raster={icon.raster_sizes}
                      premium={icon.is_premium}
                    />
                  );
                }
              })}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-dark">Loading...</h1>
        </div>
      )}
    </div>
  );
}
export default Searchpage;
