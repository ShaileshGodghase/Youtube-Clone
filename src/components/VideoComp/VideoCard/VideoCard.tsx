import "./VideoCard.scss";
import { BsDot } from "react-icons/bs";
import { VideoType } from "../CommonTypes";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../../../../store/slices/uiSlice";

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
            <img
              src="https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s68-c-k-c0x00ffffff-no-rj"
              alt=""
            />
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
