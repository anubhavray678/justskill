// lib/youtube.js
import axios from "axios";

const API_KEY = "YOUR_YOUTUBE_API_KEY";
const BASE_URL = "https://www.googleapis.com/youtube/v3";

export const getEducationalChannels = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        part: "snippet",
        maxResults: 10,
        q: "educational",
        type: "channel",
        key: API_KEY,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error("Error fetching channels: ", error);
    return [];
  }
};

export const getVideosByChannel = async (channelId) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        part: "snippet",
        channelId,
        maxResults: 10,
        type: "video",
        key: API_KEY,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error("Error fetching videos: ", error);
    return [];
  }
};
