import React, { useState } from "react";
import logo from "../assests/logo.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [searchIcon, setSearchIcon] = useState("");

  const searchClick = () => {
    navigate(`Searchpage/${searchIcon}`);
  };
  return (
    <div>
      <div className="vh-100  d-flex justify-content-center align-items-center text-center">
        <div>
          <img src={logo} alt="iconfinder logo" />

          <div className="input-group px-5 input-group-lg ">
            <input
              type="text"
              className="form-control px-5 bg-light"
              placeholder="Search Icons"
              onChange={(e) => setSearchIcon(e.target.value)}
            />
            <button
              className="btn btn-lg btn-otline-light text-dark"
              onClick={searchClick()}
            >
              <i className="bi bi-search"></i>
            </button>
          </div>
          <div className="m-3">
            <p className="text-secondary">
              Populer seraches: Instagrm, facebook, arrow, phone
            </p>
            <h5>Seach through 5,779,071 Icons illustration</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
