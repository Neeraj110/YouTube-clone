import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./feed.css";
import moment from "moment";
import { api, value_converter } from "../../store";

function Feed({ category }) {
  const [data, setData] = useState([]);
  const { videoId } = useParams();

  const fetchApi = async () => {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=US&videoCategoryId=${category}&key=${api}`;
    await fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.items));

    // alternate methods
    // const { data } = await axios.get(url);
    // setData(data.items);
  };
  useEffect(() => {
    fetchApi();
  }, [category]);

  return (
    <div>
      <div className="video">
        {data?.map((item) => {
          return (
            <Link
              to={`video/${item.snippet.categoryId}/${item.id}`}
              key={item?.id}
              className="thum"
            >
              <img src={item?.snippet?.thumbnails?.medium?.url} alt="" />
              <h2>{item?.snippet?.title}</h2>
              <h3>{item?.snippet?.channelTitle}</h3>
              <div className="date">
                <p>{value_converter(item?.statistics?.viewCount)} views </p>
                <p>{moment(item?.snippet?.publishedAt).fromNow()} </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Feed;
