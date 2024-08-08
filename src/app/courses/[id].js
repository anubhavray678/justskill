// pages/channel/[id].js
"use client";
import { getVideosByChannel } from "@/lib/youtube";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const ChannelPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (id) {
      const fetchVideos = async () => {
        const videos = await getVideosByChannel(id);
        setVideos(videos);
      };
      fetchVideos();
    }
  }, [id]);

  return (
    <div>
      <h1>Channel Videos</h1>
      <div className="video-list">
        {videos.map((video) => (
          <div key={video.id.videoId} className="video-item">
            <h2>{video.snippet.title}</h2>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
      <style jsx>{`
        .video-list {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }
        .video-item {
          width: calc(33% - 16px);
          box-sizing: border-box;
        }
        h2 {
          font-size: 1.2em;
        }
      `}</style>
    </div>
  );
};

export default ChannelPage;
