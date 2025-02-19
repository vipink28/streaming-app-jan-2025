export const apirequests = {
    getNetflixOriginals: `/discover/tv?language=en-US&page=1&with_networks=213`,
    getCollection: (platform, endpoint) => `${platform}/${endpoint}?language=en-US&page=1`,
    getDetails: (platform, id) => `${platform}/${id}?language=en-US&append_to_response=videos,recommendations,similar,credits`,
    getGenresList: (platform) => `genre/${platform}/list?language=en-US`,
    getVideosByGenre: (platform, genreid, page = 1) => `/discover/${platform}?language=en-US&page=${page}&with_genres=${genreid}`,
}

export const IMG_URL = 'https://image.tmdb.org/t/p/original';

export const platformType = {
    tv: "tv",
    movie: "movie"
}

export const endpoints = {
    popular: "popular",
    upcoming: "upcoming",
    topRated: "top_rated",
    nowPlaying: "now_playing",
    airingToday: "airing_today",
    onTheAir: "on_the_air"
}