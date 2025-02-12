import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Row from '../components/Row';
import { fetchNowPlayingMovies, fetchUpcomingMovies, selectNowPlayingMovies, selectUpcomingMovies } from '../features/movie/movieSlice';
import { fetchNetflixOrginals, selectNetflixOriginals } from '../features/tv/tvSlice';

const Homescreen = () => {
    const { data, status } = useSelector(selectNetflixOriginals); // (state) => state.tv.netflixOriginals
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchNetflixOrginals());// dispatch({type:"", playload:""})
    }, [])
    return (
        <>
            {
                status === "success" ?
                    <Header video={data.results[Math.floor(Math.random() * data.results.length)]} />
                    : <Loading />
            }

            <div className='px-4'>
                <Row title="Upcoming Movies" action={fetchUpcomingMovies} selector={selectUpcomingMovies} />

                <Row title="Now Playing Movies" action={fetchNowPlayingMovies} selector={selectNowPlayingMovies} />

                <Row title="Netflix Originals" action={fetchNetflixOrginals} selector={selectNetflixOriginals} />
            </div>
        </>
    )
}

export default Homescreen