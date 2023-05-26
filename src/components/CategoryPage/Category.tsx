import VideoCard from "../VideoComp/VideoCard/VideoCard";
import VideoGrid from "../VideoComp/VideoGrid/VideoGrid";
import { useQuery } from "react-query";
import { CreateApiEndpoint } from "../Fetch/CreatAPIEndpoint";
import type { VideoType } from "../VideoComp/CommonTypes";
import "../Home/Home.scss";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

function Category() {
  const { categoryId } = useParams();
  const fetchVideos = CreateApiEndpoint("search", {
    q: categoryId,
    part: "snippet,id",
    regionCode: "IN",
    maxResults: 50,
    order: "date",
  });

  let queryName: string = categoryId!;
  const { isLoading, data, isError } = useQuery(queryName, fetchVideos);

  if (isLoading) return <Loader />;

  if (isError) return <div>Something Went Wrong</div>;

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

export default Category;
