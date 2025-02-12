import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHeaderDetails, selectHeaderDetails } from '../features/common/commonSlice'
import { IMG_URL } from '../helper/api-requests'
import Ratings from './Ratings'

const Header = ({ video }) => {
    const dispatch = useDispatch();
    const { data, status } = useSelector(selectHeaderDetails);
    useEffect(() => {
        if (video) {
            dispatch(fetchHeaderDetails({ platform: "tv", id: video.id }));
        }
    }, [video])
    return (
        <div className='h-screen relative'>
            {
                status === "success" ?
                    <>
                        <img className='w-full h-full object-cover object-center' src={IMG_URL + data.backdrop_path} alt='' />
                        <div className='absolute top-1/2 -translate-y-1/2 text-white left-12 max-w-3xl z-10'>
                            <h1 className='text-7xl font-bold'>{data.name || data.original_name || data.title || data.original_title}</h1>
                            <h3 className='text-3xl text-orange-400'>{data.tagline}</h3>
                            <p className='mt-4 text-xl'>{data.overview}</p>
                            <Ratings voteAverage={data.vote_average} voteCount={data.vote_count} />
                        </div>
                        <div className='absolute top-0 left-0 w-full max-w-4xl h-full bg-gradient-to-r from-slate-950 to-transparent z-0'></div>
                    </>
                    : "...loading"
            }
        </div>
    )
}

export default Header