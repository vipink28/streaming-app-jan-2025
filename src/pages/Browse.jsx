import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Row from '../components/Row';
import { fetchUpcomingMovies, selectUpcomingMovies } from '../features/movie/movieSlice';
import { fetchNetflixOrginals, selectNetflixOriginals } from '../features/tv/tvSlice';
import { apirequests, platformType } from '../helper/api-requests';
import tmdbApi from '../helper/axios';

const Browse = () => {
    const { platform } = useParams();
    const { data, status } = useSelector(platform === platformType.tv ? selectNetflixOriginals : selectUpcomingMovies);
    const dispatch = useDispatch();
    const [listOfGenres, setListOfGenres] = useState(null);
    const fetchGenreList = async (platform) => {
        try {
            const response = await tmdbApi.get(apirequests.getGenresList(platform))
            setListOfGenres(response.data.genres);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (platform) {
            fetchGenreList(platform);
        }
    }, [platform])


    useEffect(() => {
        if (platform === platformType.tv) {
            dispatch(fetchNetflixOrginals())
        } else {
            dispatch(fetchUpcomingMovies());
        }
    }, [platform]);



    return (
        <>
            {
                status === "success" ?
                    <Header video={data.results[Math.floor(Math.random() * data.results.length)]} platform={platform} />
                    : <Loading />
            }

            {
                listOfGenres &&
                listOfGenres.map((genre, index) => (
                    index < 6 &&
                    <Row key={genre.id} title={genre.name} genre={genre} platform={platform} />
                ))

            }
        </>
    )
}

export default Browse