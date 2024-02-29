import React from "react";
import SearchContent from "../search-content/SearchContent";
import Recommend from "../recommended/Recommend";
import "./style.css";

function PalySearch() {
  return (
    <div className="center mobile">
      <SearchContent />
      <Recommend />
    </div>
  );
}

export default PalySearch;
