import React, { useEffect, useState } from "react";
import "./style.css";
import { api, value_converter } from "../../store";
import { Link } from "react-router-dom";

function Recommend({ categoryId }) {
  const [listData, setListData] = useState([]);

  const fetchDataFroRecommed = async () => {
    const video_URL = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=US&videoCategroy=${categoryId}&key=${api}`;
    await fetch(video_URL)
      .then((res) => res.json())
      .then((data) => setListData(data.items));
  };

  useEffect(() => {
    fetchDataFroRecommed();
  }, []);
  return (
    <div className="small">
      {listData.map((item, index) => (
        <Link
          to={`/video/${item?.snippet?.categoryId}/${item?.id}`}
          className="content"
          key={index}
        >
          <img
            src={item.snippet.thumbnails.medium.url}
            className="small-youtube"
          />
          <div className="small-section">
            <h2>{item.snippet.title}</h2>
            <p>{item.snippet.channelTitle}</p>
            <p>{value_converter(item.statistics.viewCount)}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Recommend;
