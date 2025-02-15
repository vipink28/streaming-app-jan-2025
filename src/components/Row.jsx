import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './Card';

const Row = ({ action, selector, title, platform }) => {
    const { data, status } = useSelector(selector);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(action());
    }, [])

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