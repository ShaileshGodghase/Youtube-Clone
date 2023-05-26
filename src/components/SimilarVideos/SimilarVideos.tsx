import { useQuery } from "react-query";
import { CreateApiEndpoint } from "../Fetch/CreatAPIEndpoint";
import { useParams } from "react-router-dom";
import { VideoType } from "../VideoComp/CommonTypes";
import VideoCard from "../VideoComp/VideoCard/VideoCard";
import Loader from "../Loader/Loader";

function SimilarVideos() {
  const params = useParams();

  const fetchVideos = CreateApiEndpoint(`search`, {
    relatedToVideoId: params.videoId as string,
    part: "id,snippet",
    type: "video",
    maxResults: 50,
  });
  let queryName = params.videoId + "similar";
  const { isLoading, data, isError } = useQuery(
    queryName as string,
    fetchVideos
  );

  if (isLoading) return <Loader />;
  if (isError) return <h1>Something went wrong"</h1>;
  return (
    <>
      <div>
        {data?.data.items.map((video: VideoType) => {
          return (
            video.id.videoId && (
              <VideoCard key={video.id.videoId} videoInfo={video} />
            )
          );
        })}
      </div>
    </>
  );
}

export default SimilarVideos;
