import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchNowPlayingMovies } from '../features/movie/movieSlice'
import { IMG_URL } from '../helper/api-requests'
import Ratings from './Ratings'

const Header = ({ video }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchNowPlayingMovies())
    }, [])
    return (
        <div className='h-screen relative'>
            <img className='w-full h-full object-cover object-center' src={IMG_URL + video.backdrop_path} alt='' />
            <div className='absolute top-1/2 -translate-y-1/2 text-white left-12 max-w-3xl z-10'>
                <h1 className='text-7xl font-bold'>{video.name || video.original_name || video.title || video.original_title}</h1>
                <p className='mt-4 text-xl'>{video.overview}</p>
                <Ratings voteAverage={video.vote_average} voteCount={video.vote_count} />
            </div>
            <div className='absolute top-0 left-0 w-full max-w-4xl h-full bg-gradient-to-r from-slate-950 to-transparent z-0'></div>
        </div>
    )
}

export default Header