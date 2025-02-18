import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { selectNetflixOriginals } from '../features/tv/tvSlice';
import { apirequests } from '../helper/api-requests';
import tmdbApi from '../helper/axios';
import Card from './Card';

const Row = ({ action, selector, title, platform, genre }) => {
    const { data, status } = useSelector(genre ? selectNetflixOriginals : selector);
    const dispatch = useDispatch();
    const [videosByGenre, setVideosByGenre] = useState(null);

    const fetchVideosByGenre = async (platform, genreid) => {

        try {
            const response = await tmdbApi.get(apirequests.getVideosByGenre(platform, genreid))
            setVideosByGenre(response.data.results);
        }
        catch (err) {
            console.log(err);
        }
    }


    useEffect(() => {

        if (genre) {
            fetchVideosByGenre(platform, genre.id)
        } else {
            dispatch(action());
        }
    }, [genre])

    return (
        <div className='py-3'>
            <h2 className='text-2xl font-medium mb-3'>{title}</h2>
            <Swiper
                spaceBetween={20}
                slidesPerView={5}
                modules={[Navigation]}
                navigation
            >


                {
                    videosByGenre ?
                        videosByGenre.map((video) => (
                            <SwiperSlide key={video.id}>
                                <Card video={video} platform={platform} />
                            </SwiperSlide>
                        ))
                        :
                        status === "success" &&
                        data.results.map((video) => (
                            <SwiperSlide key={video.id}>
                                <Card video={video} platform={platform} />
                            </SwiperSlide>
                        ))
                }

            </Swiper>
        </div>
    )
}

export default Row