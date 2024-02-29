import { useState } from "react";
import Feed from "../../Components/Feed/Feed";
import SideBar from "../../Components/Sidebar/SideBar";
import "./Home.css";

function Home({ sidebar, category, setCategory }) {
 
  return (
    <>
      <SideBar
        sidebar={sidebar}
        setCategory={setCategory}
        category={category}
      />
      <div className={`container ${sidebar ? "large-container" : ""}`}>
        <Feed category={category} />
      </div>
    </>
  );
}

export default Home;
