import "./VideoCard.scss";
import { BsDot } from "react-icons/bs";

function VideoCard() {
  return (
    <>
      <div>
        <div>
          <img
            className="thumbnail"
            src="https://i.ytimg.com/vi/yxXzMqyHFJc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAxCHu-9hyuoB9QY6_b1pkraAyvSg"
            alt=""
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
            <div className="card-heading">
              Build and Deploy a Fully Responsive Website with Modern UI/UX in
              React, Tailwinddsfsdfsdfsdf sdfsdfsd
            </div>
            <h3>JavaScript Mastery</h3>
            <div className="card-metadata">
              <p>850K views</p>
              <BsDot />9 Months ago
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoCard;
