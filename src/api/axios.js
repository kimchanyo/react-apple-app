import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "1f063e7047f572e2777b7fe993c79aeb",
    language: "ko-KR",
  },
});

export default instance;
