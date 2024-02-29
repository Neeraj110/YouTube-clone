import React from "react";
import "./Bar.css";
import VillaIcon from "@mui/icons-material/Villa";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import RollerSkatingIcon from "@mui/icons-material/RollerSkating";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import GridViewIcon from "@mui/icons-material/GridView";
import InstagramIcon from "@mui/icons-material/Instagram";
import RocketIcon from "@mui/icons-material/Rocket";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import NewspaperIcon from "@mui/icons-material/Newspaper";

function SideBar({ sidebar, category, setCategory }) {
  return (
    <div className={`sidebar ${sidebar ? "small-sidebar" : ""}`}>
      <div className="short-links">
        <div
          className={`side ${category === 0 ? "active" : ""}`}
          onClick={() => setCategory(0)}
        >
          <VillaIcon />
          <p> Home</p>
        </div>
        <div
          className={`side ${category === 20 ? "active" : ""}`}
          onClick={() => setCategory(20)}
        >
          <SportsEsportsIcon />
          <p> Gaming</p>
        </div>
        <div
          className={`side ${category === 2 ? "active" : ""}`}
          onClick={() => setCategory(2)}
        >
          <DriveEtaIcon />
          <p> Automobiles</p>
        </div>
        <div
          className={`side ${category === 17 ? "active" : ""}`}
          onClick={() => setCategory(17)}
        >
          <RollerSkatingIcon />
          <p>Sports</p>
        </div>
        <div
          className={`side ${category === 22 ? "active" : ""}`}
          onClick={() => setCategory(22)}
        >
          <GridViewIcon />
          <p>Blogs</p>
        </div>
        <div
          className={`side ${category === 24 ? "active" : ""}`}
          onClick={() => setCategory(24)}
        >
          <InstagramIcon />
          <p> Entertainment</p>
        </div>
        <div
          className={`side ${category === 28 ? "active" : ""}`}
          onClick={() => setCategory(28)}
        >
          <RocketIcon />
          <p>Technology</p>
        </div>
        <div
          className={`side ${category === 10 ? "active" : ""}`}
          onClick={() => setCategory(10)}
        >
          <MusicNoteIcon />
          <p> Music</p>
        </div>
        <div
          className={`side ${category === 25 ? "active" : ""}`}
          onClick={() => setCategory(25)}
        >
          <NewspaperIcon />
          <p> News </p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
