import React from 'react'
import { Link } from 'react-router-dom'

const GenreList = ({ genres, platform }) => {
    return (
        <div className='py-2 flex gap-2'>
            {
                genres.map((genre) => (
                    <Link className='bg-yellow-300 px-4 py-1 rounded-full text-slate-900 font-medium' to={`/browsebygenre/${platform}/${genre.id}`} key={genre.id}>{genre.name}</Link>
                ))
            }
        </div>
    )
}

export default GenreList