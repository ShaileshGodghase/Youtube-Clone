import VideoCard from "../VideoComp/VideoCard/VideoCard";
import VideoGrid from "../VideoComp/VideoGrid/VideoGrid";
import { useQuery } from "react-query";
import { CreateApiEndpoint } from "../Fetch/CreatAPIEndpoint";
import type { VideoType } from "../VideoComp/CommonTypes";
import "./Home.scss";
import Loader from "../Loader/Loader";

const fetchVideos = CreateApiEndpoint("search", {
  q: "Javascript",
  part: "snippet,id",
  regionCode: "IN",
  maxResults: 50,
  order: "date",
});

function Home() {
  const { isLoading, data, isError } = useQuery("home", fetchVideos);

  if (isLoading) return <Loader />;

  if (isError) return <div>Something Went Wrong</div>;

  return (
    <div className="home-wrapper">
      <VideoGrid>
        {data?.data?.items.map((video: VideoType) => {
          return (
            video.id.videoId && (
              <VideoCard key={video.id.videoId} videoInfo={video} />
            )
          );
        })}
      </VideoGrid>
    </div>
  );
}

export default Home;
