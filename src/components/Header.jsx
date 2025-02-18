import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchHeaderDetails, selectHeaderDetails } from '../features/common/commonSlice'
import { truncateText } from '../helper'
import { IMG_URL } from '../helper/api-requests'
import GenreList from './GenreList'
import Ratings from './Ratings'
import VideoPlayer from './VideoPlayer'

const Header = ({ video, platform }) => {
    const dispatch = useDispatch();
    const { data, status } = useSelector(selectHeaderDetails);
    const [showVideo, setShowVideo] = useState(false);
    useEffect(() => {
        if (video) {
            dispatch(fetchHeaderDetails({ platform: platform, id: video.id }));
        }
    }, [video])

    const handleVideoPlayer = () => {
        setShowVideo(true);
    }
    return (
        <div className='h-screen relative'>
            {
                status === "success" ?
                    showVideo ?
                        <VideoPlayer videoList={data.videos.results} />
                        :
                        <>
                            <img className='w-full h-full object-cover object-center' src={IMG_URL + data.backdrop_path} alt='' />
                            <div className='absolute top-1/2 -translate-y-1/2 text-white left-12 max-w-3xl z-10'>
                                <h1 className='text-7xl font-bold'>{data.name || data.original_name || data.title || data.original_title}</h1>
                                <h3 className='text-3xl text-orange-400'>{data.tagline}</h3>
                                <p className='mt-4 text-xl'>{truncateText(data.overview, 180)}</p>
                                <Ratings voteAverage={data.vote_average} voteCount={data.vote_count} />
                                <GenreList genres={data.genres} />
                                <div className='flex gap-3 py-2'>
                                    <button onClick={handleVideoPlayer} className='bg-red-500 py-2 px-5 rounded-full font-semibold'>Watch Now</button>
                                    <Link to={`/details/tv/${data.id}`} className='bg-green-900 py-2 px-5 rounded-full font-semibold'>More Info</Link>
                                </div>
                            </div>
                            <div className='absolute top-0 left-0 w-full max-w-4xl h-full bg-gradient-to-r from-slate-950 to-transparent z-0'></div>
                        </>
                    : "...loading"
            }
        </div>
    )
}

export default Header