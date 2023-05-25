import VideoCard from "../VideoComp/VideoCard/VideoCard";
import VideoGrid from "../VideoComp/VideoGrid/VideoGrid";
import { useQuery } from "react-query";
import { CreateApiEndpoint } from "../Fetch/CreatAPIEndpoint";
import type { VideoType } from "../VideoComp/CommonTypes";
import "./Home.scss";

const fetchVideos = CreateApiEndpoint("search", {
  q: "new",
  part: "snippet,id",
  regionCode: "IN",
  maxResults: 50,
  order: "date",
});

function Home() {
  const { isLoading, data, isError } = useQuery("home", fetchVideos);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Something Went Wrong</div>;
  // console.log(data);

  return (
    <div className="home-wrapper">
      <VideoGrid>
        {data?.data?.items.map((video: VideoType) => {
          return <VideoCard key={video.id.videoId} videoInfo={video} />;
        })}
      </VideoGrid>
    </div>
  );
}

export default Home;
