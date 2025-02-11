import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { fetchUpcomingMovies, selectUpcomingMovies } from '../features/movie/movieSlice';
import Card from './Card';

const Row = () => {
    const { data, status } = useSelector(selectUpcomingMovies);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUpcomingMovies());
    }, [])

    return (
        <div>
            <h2>Upcoming Movies</h2>
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
                            <Card video={video} />
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    )
}

export default Row