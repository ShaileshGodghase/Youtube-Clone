import "./VideoCard.scss";
import { BsDot } from "react-icons/bs";
import { VideoType } from "../CommonTypes";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../../../../store/slices/uiSlice";
import Avatar from "react-avatar";

interface VideoCardType {
  videoInfo: VideoType;
}
function VideoCard({ videoInfo }: VideoCardType) {
  const { channelTitle, title, thumbnails } = videoInfo.snippet;
  const dispatch = useDispatch();
  return (
    <>
      <Link
        to={`/video/${videoInfo.id.videoId}`}
        onClick={() => dispatch(closeSidebar())}
        className="video-card"
      >
        <div>
          <img
            className="thumbnail"
            src={thumbnails.high.url}
            alt={channelTitle}
          />
        </div>
        <div className="card-content-wrapper">
          <div className="channel-icon">
            <Avatar name={channelTitle} round={true} size="40px" />
          </div>
          <div className="card-info">
            <div className="card-heading">{title}</div>
            <h3>{channelTitle}</h3>
            <div className="card-metadata">
              <p>850K views</p>
              <BsDot />9 Months ago
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default VideoCard;
