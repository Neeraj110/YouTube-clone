import React, { useEffect, useState } from "react";
import { api, value_converter } from "../../store";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import "./search.css";

function Search({ searchRes }) {
  const [showResults, setShowResults] = useState();

  const fetchVideos = async () => {
    if (!searchRes) {
      return; // No search term, do nothing
    }
    const response = await fetch(
      `  https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchRes}&key=${api}`
    );
    const data = await response.json();
    console.log(data);
    setShowResults(data.items);
  };
  console.log(showResults);
  useEffect(() => {
    fetchVideos();
  }, [searchRes]);

  return (
    <div className="search-center">
      <div className="search-video">
        {showResults?.map((u) => {
          return (
            <Link
              to={`/play/${u.id.videoId}`}
              className="search-thum"
              key={u.etag}
            >
              <img src={u?.snippet?.thumbnails?.medium?.url} alt="" />
              <h2>{u?.snippet?.title}</h2>
              <h3>{u?.snippet?.channelTitle}</h3>
              <div className="date">
                <p>{value_converter(u?.statistics?.viewCount)} views </p>
                <p>{moment(u?.snippet?.publishedAt).fromNow()} </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Search;
