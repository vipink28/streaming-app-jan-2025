import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';
import { fetchVideoDetails, selectVideoDetails } from '../features/common/commonSlice';
import { IMG_URL } from '../helper/api-requests';

const Details = () => {
    const dispatch = useDispatch();
    const { data, status } = useSelector(selectVideoDetails);
    const { platform, id } = useParams();
    useEffect(() => {
        if (platform && id) {
            dispatch(fetchVideoDetails({ platform, id }))
        }
    }, [platform, id])

    return (
        status === "success" ?
            <div className='px-4 py-6'>
                <div className='max-w-7xl px-4 mx-auto'>
                    <VideoPlayer videoList={data.videos.results} />
                </div>

                <div className='flex py-4'>
                    <div className='w-1/4'>
                        <img className='max-w-full inline-block' src={IMG_URL + data.poster_path} alt='poster' />
                    </div>
                    <div className='w-3/4 ps-4'>
                        <h1 className='text-7xl font-bold'>{data.name || data.original_name || data.title || data.original_title}</h1>
                    </div>
                </div>
            </div>
            : ""
    )
}

export default Details