import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Ratings = ({ voteAverage, voteCount }) => {
    let vote = Math.floor(voteAverage / 2);
    let starArr = [...Array(5)];
    return (
        <div className='py-4'>
            {
                starArr.map((item, index) => (
                    index < vote ?
                        <FontAwesomeIcon key={index} icon={solidStar} />
                        :
                        <FontAwesomeIcon key={index} icon={faStar} />
                ))
            }
        </div>
    )
}

export default Ratings