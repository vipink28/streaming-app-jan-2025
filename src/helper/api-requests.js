export const apirequests = {
    getNetflixOriginals: `/discover/tv?language=en-US&page=1&with_networks=213`,
    getCollection: (platform, endpoint) => `${platform}/${endpoint}?language=en-US&page=1`
}

export const IMG_URL = 'https://image.tmdb.org/t/p/original';