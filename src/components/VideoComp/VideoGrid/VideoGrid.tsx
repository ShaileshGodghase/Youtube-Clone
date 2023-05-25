import "./VideoGrid.scss";

type VideoGridProps = {
  children: string | JSX.Element | JSX.Element[];
};
function VideoGrid({ children }: VideoGridProps) {
  return (
    <>
      <section className="video-grid-section">{children}</section>
    </>
  );
}

export default VideoGrid;
