import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IMG_URL } from '../helper/api-requests'
import Ratings from './Ratings'

const Card = ({ video, platform }) => {
    const navigate = useNavigate();
    const handleDetails = () => {
        navigate(`/details/${platform}/${video.id}`);
    }
    return (
        <div className='relative' onClick={handleDetails}>
            <img className='w-full h-full object-cover object-center' src={IMG_URL + video.backdrop_path} alt={video.name || video.title} />
            <div className='p-2 absolute bottom-0 text-white'>
                <h3>{video.name || video.original_name || video.title || video.original_title}</h3>
                <Ratings voteAverage={video.vote_average} voteCount={video.vote_count} />
            </div>
        </div>
    )
}

export default Card