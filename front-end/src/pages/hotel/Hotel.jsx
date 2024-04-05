import React from "react";
import NavBar from "../../components/navbar/Navbar";
import { Header } from "../../components/header/Header";
import "./hotel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";

const Hotel = () => {
  return (
    <div>
      <NavBar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <h1 className="hotelTitle">Grand hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocation} />
            <span>Elton st 125 New york</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
