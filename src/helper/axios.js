import axios from "axios";

const tmdbApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWFmZWMxNmNhMjlhOTlkZTgzNDYyNjk0MmY2ZDA1ZCIsIm5iZiI6MTY1NzcxNjU1NS44NjYsInN1YiI6IjYyY2ViZjRiNjMzMWIyMDBmMjYwMjJkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XvXnP16qH6ZKjTQhU4IlCl7ebe8SmRqjmigSDgwqV6k'
    }
});

export default tmdbApi;