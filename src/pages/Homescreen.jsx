import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import Loading from '../components/Loading';
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
        </>
    )
}

export default Homescreen