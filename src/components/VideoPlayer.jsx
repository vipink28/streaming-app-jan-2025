import React, { useEffect, useState } from 'react';

const VideoPlayer = ({ videoList }) => {
    const [trailer, setTrailer] = useState(null);

    useEffect(() => {
        if (videoList) {
            const trailerObj = videoList.find((obj) => (
                obj.type === "Trailer"
            ))
            setTrailer(trailerObj);
        }
    }, [videoList])

    return (
        <div className='w-full h-full'>
            {
                trailer && videoList.length > 0 ?
                    <iframe class="aspect-video w-full" src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1`}></iframe>
                    : "no trailer"
            }

        </div>
    )
}

export default VideoPlayer