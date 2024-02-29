import React from "react";
import PlayBtn from "../../Components/playbtn/PlayBtn";
import Recommend from "../../Components/recommended/Recommend";
import "./video.css";
import { useParams } from "react-router-dom";

function Video() {
  const { categoryId, videoId } = useParams();
  return (
    <div className="center mobile">
      <PlayBtn videoId={videoId} />
      <Recommend categoryId={categoryId} />
    </div>
  );
}

export default Video;
