import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='px-4 bg-slate-950 text-white'>
            <div className='flex justify-between items-center py-3'>
                <div>Streaming App</div>
                <div className='flex items-center'>
                    <NavLink to="/" className="p-2.5">Home</NavLink>
                    <NavLink to="/browse/movie" className="p-2.5">Movies</NavLink>
                    <NavLink to="/browse/tv" className="p-2.5">Tv Shows</NavLink>
                    <NavLink to="/browsebygenre" className="p-2.5">Browse By Genre</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar