import React from 'react'

const Movie = ({id,img,title,rating}) => {
    return (
        <div>
            <li key = {id} className='w-60 p-2 mx-auto'>
                <img
                    src={img}
                    alt={title}
                    className='h-80 object-cover'
                />
                <p className='text-center text-[18px] font-bold pt-2'>{}</p>
                <p className='text-center text-[16px] font-medium'><span className='font-bold'>Rating :</span>{rating}</p>
            </li>
        </div>
    )
}

export default Movie