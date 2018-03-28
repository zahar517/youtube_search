import axios from "axios";
import secret from "./secret";

const API_KEY = secret.API_KEY;

const baseURL = "https://www.googleapis.com/youtube/v3/search";
const instance = axios.create({ baseURL });

const part = "snippet";
const maxResults = 5;

export const getVideos = q =>
  instance(`?key=${API_KEY}&part=${part}&maxResults=${maxResults}&q=${q}`).then(
    result => result.data.items
  );
