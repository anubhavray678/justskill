// // pages/index.js
"use client";
// pages/index.js
import { useEffect, useState } from "react";
import Link from "next/link";
import { getEducationalChannels } from "@/lib/youtube";

const HomePage = () => {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const fetchChannels = async () => {
      const channels = await getEducationalChannels();
      setChannels(channels);
    };
    fetchChannels();
  }, []);

  return (
    <div>
      <h1>Educational Channels</h1>
      <div className="channel-list">
        {channels.map((channel) => (
          <div key={channel.id.channelId} className="channel-item">
            <h2>{channel.snippet.title}</h2>
            <Link href={`/channel/${channel.id.channelId}`}>
              <a>View Videos</a>
            </Link>
          </div>
        ))}
      </div>
      <style jsx>{`
        .channel-list {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }
        .channel-item {
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

export default HomePage;
