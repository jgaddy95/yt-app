import axios from "axios";

const KEY = "AIzaSyDeksgKjoi1ptA2T5foD_B6RrrSxr1m4uc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
