import React, { useEffect, useState } from "react";
import "./play.css";
import axios from "axios";
import { api, value_converter } from "../../store";
import moment from "moment";
import { useParams } from "react-router-dom";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import SendIcon from "@mui/icons-material/Send";

function PlayBtn({}) {
  const { videoId } = useParams();
  const [apiData, setApiData] = useState(null);
  const [channle, setChannel] = useState(null);
  const [commentData, setCommentData] = useState([]);

  const fetchVideoData = async () => {
    const video_URL = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${api}`;

    await fetch(video_URL)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]));
  };

  const fetchOtherData = async () => {
    const video_URL = ` https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${api}`;
    await fetch(video_URL)
      .then((res) => res.json())
      .then((data) => setChannel(data.items[0]));

    const Comment_url = ` https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${api} `;
    await fetch(Comment_url)
      .then((res) => res.json())
      .then((data) => setCommentData(data.items));
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    fetchOtherData();
  }, [apiData]);

  return (
    <div className="about">
      <div className="more">
        <iframe
          className="youtube"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div className="title">
        <h1>{apiData ? apiData?.snippet?.title : "Title is Not Found "}</h1>
      </div>
      <br />
      <div className="publisher">
        <div
          className=""
          style={{ display: "flex", gap: "10px", alignItems: "center" }}
        >
          <img
            src={channle?.snippet?.thumbnails?.default?.url}
            alt=""
            className="avatar"
          />
          <p className="channel-name">
            {apiData ? apiData?.snippet?.channelTitle : ""}
            <span className="light">
              {channle
                ? value_converter(channle?.statistics?.subscriberCount)
                : "16k"}{" "}
              subscribers
            </span>
          </p>
        </div>
        <button className="subscribers">Subscribers</button>
        <div
          className=""
          style={{ display: "flex", gap: "10px", alignItems: "center" }}
        >
          <button className="like">
            <ThumbUpOffAltIcon />
            {apiData ? value_converter(apiData?.statistics?.likeCount) : "16k"}
          </button>
          <button className="like">
            <ThumbDownOffAltIcon />
          </button>
        </div>
        <span className="send">
          <SendIcon />
          share
        </span>
      </div>
      <br />
      <hr style={{ width: "98%" }} />
      <div className="vid-description">
        <div className="view">
          <p className="">
            {apiData ? value_converter(apiData?.statistics?.viewCount) : "16K"}{" "}
            views
          </p>
          <p>
            {apiData
              ? moment(apiData?.snippet?.publishedAt).fromNow()
              : "1 month ago"}
          </p>
        </div>

        <p className="description">
          {apiData
            ? apiData?.snippet.description.slice(0, 250)
            : "Description Not Found"}
        </p>

        <h4>
          {" "}
          {apiData
            ? value_converter(apiData?.statistics?.commentCount)
            : "16k"}{" "}
          Comments
        </h4>
      </div>
      <div className="comment-section">
        {commentData.map((item, index) => (
          <div className="comment" key={index}>
            <img
              src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
              className="comment-img"
            />
            <div className="">
              <h3 style={{ fontSize: "1rem" }}>
                {item.snippet.topLevelComment.snippet.authorDisplayName}
              </h3>
              <p style={{ fontSize: "0.7rem", color: "#808080" }}>
                {item.snippet.topLevelComment.snippet.textDisplay}
              </p>
              <div className="comment-action">
                <span className="reply">
                  <ThumbUpOffAltIcon
                    style={{ fontSize: "1rem", color: "#808080" }}
                  />{" "}
                  {value_converter(
                    item?.snippet?.topLevelComment?.snippet?.likeCount
                  )}
                </span>
                <span>Reply</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlayBtn;
