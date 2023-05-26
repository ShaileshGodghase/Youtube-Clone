import "./VideoInfo.scss";
import ReactPlayer from "react-player/youtube";
import { TbShare3 } from "react-icons/tb";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { CreateApiEndpoint } from "../Fetch/CreatAPIEndpoint";
import { useQuery } from "react-query";
import SimilarVideos from "../SimilarVideos/SimilarVideos";
import Loader from "../Loader/Loader";

function VideoInfo() {
  const a = useParams();
  const videoId = a.videoId;
  const fetchVideos = CreateApiEndpoint(`videos`, {
    part: "snippet,statistics",
    id: videoId,
  });
  let queryName: string = videoId!;
  const { isLoading, data, isError } = useQuery(queryName, fetchVideos);

  let snippet = {
      title: "",
      channelTitle: "",
    },
    statistics = {
      viewCount: "0",
      likeCount: "0",
    };
  if (data) {
    snippet = data?.data?.items[0].snippet;
    statistics = data?.data?.items[0].statistics;
  }

  if (isLoading) return <Loader />;
  if (isError) return <h1>Something went wrong"</h1>;
  return (
    <>
      <section className="video-info-section">
        <div className="primary">
          <div className="video-player-wrapper">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoId}`}
              controls={true}
              width="100%"
            />
          </div>
          <div className="channel-info-wrapper">
            <h1 className="video-heading">{snippet.title}</h1>
            <div className="channel-info-row">
              <div className="subscribe-wrapper">
                <div className="channel-icon-wrapper">
                  <img
                    src="https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s88-c-k-c0x00ffffff-no-rj"
                    alt=""
                  />
                </div>
                <div className="channel-info">
                  <h2>{snippet.channelTitle}</h2>
                  <p>
                    {parseInt(statistics.viewCount).toLocaleString()} views{" "}
                  </p>
                </div>
                <div className="subscribe-btn-wrapper">
                  <button>Subscribe</button>
                </div>
              </div>
              <div className="like-wrapper">
                <div className="btn-wrapper">
                  <button className="like-btn">
                    <AiOutlineLike />{" "}
                    {parseInt(statistics.likeCount).toLocaleString()} likes
                  </button>
                  <button className="dislike-btn">
                    <AiOutlineDislike />
                  </button>
                </div>
                <div className="share-btn-wrapper">
                  <button>
                    <TbShare3 />
                    Share
                  </button>
                </div>
              </div>
            </div>
            <div className="description-wrapper">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At non
                exercitationem, quod magnam ea nemo adipisci temporibus magni
                illum provident. Eveniet, repellendus itaque? Placeat quae
                similique ullam vero deleniti ducimus. Labore dignissimos sed
                tenetur. Sed dolore animi voluptatum quo sunt.
              </p>
            </div>
          </div>
        </div>
        <div className="secondary">
          <div className="video-wrapper">
            <SimilarVideos />
          </div>
        </div>
      </section>
    </>
  );
}
export default VideoInfo;
