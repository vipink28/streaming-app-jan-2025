import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import { apirequests } from '../helper/api-requests';
import tmdbApi from '../helper/axios';

const BrowseByGenre = () => {
    const { platform, genreid } = useParams();
    const [videosByGenre, setVideosByGenre] = useState(null);
    const [listOfGenres, setListOfGenres] = useState(null);
    const [currentSelection, setCurrentSelection] = useState(null);

    const fetchGenreList = async (platform) => {
        try {
            const response = await tmdbApi.get(apirequests.getGenresList(platform))
            setListOfGenres(response.data.genres);
        }
        catch (err) {
            console.log(err);
        }
    }
    const fetchVideosByGenre = async (platform, genreid, page) => {
        try {
            const response = await tmdbApi.get(apirequests.getVideosByGenre(platform, genreid, page))
            setVideosByGenre(response.data);
        }
        catch (err) {
            console.log(err);
        }
    }

    const handlePlatform = (e) => {
        let { value } = e.target;
        fetchGenreList(value);
        setCurrentSelection((prev) => (
            { ...prev, platform: value }
        ))
    }

    const handleGenre = (e) => {
        let { value } = e.target;
        fetchVideosByGenre(currentSelection.platform, value);
        setCurrentSelection((prev) => ({
            ...prev,
            genreid: value
        }))
    }

    useEffect(() => {
        if (platform) {
            fetchGenreList(platform);
        }
    }, [platform])

    useEffect(() => {
        if (platform && genreid) {
            fetchVideosByGenre(platform, genreid);
            setCurrentSelection({ platform, genreid });
        }
    }, [platform, genreid])

    return (
        <div className='px-4'>
            <div className='py-6 flex'>
                <div className='ms-auto flex gap-3'>
                    <span>Filter By</span>
                    {currentSelection &&
                        <>
                            <select defaultValue={currentSelection.platform} className='border' onChange={handlePlatform}>
                                <option value="tv">Tv Shows</option>
                                <option value="movie">Movies</option>
                            </select>
                            <select className='border' onChange={handleGenre}>
                                {
                                    listOfGenres &&
                                    listOfGenres.map((genre) => (
                                        <option key={genre.id} value={genre.id}>{genre.name}</option>
                                    ))
                                }

                            </select>
                        </>
                    }
                </div>
            </div>

            <div className='grid grid-cols-5 gap-4'>
                {
                    videosByGenre &&
                    videosByGenre.results.map((video) => (
                        <Card key={video.id} video={video} platform={platform} />
                    ))
                }
            </div>

            <div className='py-6'>
                <div className='flex gap-3'>
                    <span className='p-2 cursor-pointer' onClick={() => { fetchVideosByGenre(currentSelection.platform, currentSelection.genreid, 1) }}>1</span>

                    <span className='p-2 cursor-pointer' onClick={() => { fetchVideosByGenre(currentSelection.platform, currentSelection.genreid, 2) }}>2</span>

                    <span className='p-2 cursor-pointer' onClick={() => { fetchVideosByGenre(currentSelection.platform, currentSelection.genreid, 3) }}>3</span>
                </div>
            </div>
        </div>
    )
}

export default BrowseByGenre