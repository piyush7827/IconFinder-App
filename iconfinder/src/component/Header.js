import React, { useEffect, useState } from "react";

const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
    Authorization:
      "Bearer y9MhcLFzcUoFX7p4mtEp8d0mGbiXh5DyIWHGKyOZLgeStrw0vWJqDZVTMn1EMPkj",
  },
};

function Header() {
  const [styles, setStyles] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://api.iconfinder.com/v4/categories?count=10",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        return response;
      })
      .then(function(response) {
        setCategory(response.categories);
      })
      .catch((err) => console.error(err));

    fetch(
      "https://cors-anywhere.herokuapp.com/https://api.iconfinder.com/v4/styles?count=10",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        return response;
      })
      .then(function(response) {
        setStyles(response.styles);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Icon Sets
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu dropdown-menu-dark">
                  {category.map((cate) => (
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        key={cate.identifier}
                      >
                        {cate.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Styles
                </a>
                <ul className="dropdown-menu  dropdown-menu-dark">
                  {styles.map((sty) => (
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        key={sty.identifier}
                      >
                        {sty.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
