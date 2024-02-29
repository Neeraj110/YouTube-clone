import React from "react";
import logo from "./img.png";
import "./nav.css";
import { FaBell, FaMicrophone, FaSearch } from "react-icons/fa";
import { MdOutlineVideoCall } from "react-icons/md";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";

function Nav({ setSidebar, searchRes, setSearchRes }) {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (searchRes.length > 0) {
      navigate(`/search/${searchRes}`);
    }
  };
  return (
    <div className="nav">
      <Link to="/" className="logo">
        <HiMiniBars3BottomRight
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
          style={{ fontSize: "2.2rem" }}
        />
        <img src={logo} alt="" />
        <p>
          {" "}
          YouTube <sup>IN</sup>
        </p>
      </Link>

      <div className="search box">
        <input
          type="text"
          placeholder="Search"
          value={searchRes}
          onChange={(e) => setSearchRes(e.target.value)}
        />
        <button className="search-icon" onClick={()=>handleSearch()}>
          <FaSearch />{" "}
        </button>

        <button className="micro">
          <FaMicrophone />
        </button>
      </div>

      <div className="account flex">
        <span className="mic" style={{ fontSize: "2.2rem" }}>
          <MdOutlineVideoCall />
        </span>
        <span className="mic" style={{ fontSize: "1.8rem" }}>
          <FaBell />
        </span>
        <img
          src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
