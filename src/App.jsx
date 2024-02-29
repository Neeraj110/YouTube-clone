import React, { useState } from "react";
import Home from "./Pages/Home/Home";
import Video from "./Pages/video/Video";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Search from "./Pages/Search/Search";
import SearchContent from "./Components/search-content/SearchContent";
import PalySearch from "./Components/play-search/PalySearch";

function App() {
  const [sidebar, setSidebar] = useState(true);
  const [searchRes, setSearchRes] = useState();
  const [category, setCategory] = useState(0);
  return (
    <BrowserRouter>
      <Nav
        setSidebar={setSidebar}
        searchRes={searchRes}
        setSearchRes={setSearchRes}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              sidebar={sidebar}
              setCategory={setCategory}
              category={category}
            />
          }
        />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
        <Route
          path="/search/:query"
          element={<Search searchRes={searchRes} />}
        />
        <Route path="/play/:videoId" element={<PalySearch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
