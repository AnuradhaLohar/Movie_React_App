import React, { useState } from 'react';
import useFetchApi from '../hooks/UseFetchApi.js';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Movie from './movie.jsx';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import MovieContext from '../MovieContext.js';

const Popular = () => {
  const [count, setCount] = useState(1);
  const apiKey = 'c45a857c193f6302f2b5061c3b85e743';
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${count}`;

  const { data, error, loading } = useFetchApi(url);

  const { movieId, setMovieId } = useContext(MovieContext);

  const handleNext = () => {
    if (count < 500) setCount(prev => prev + 1);
  };

  const handlePrev = () => {
    if (count > 1) setCount(prev => prev - 1);
  };

  if (error) return <div className='text-center'>Failed to load movies...</div>;
  if (loading || !data) return <div className='text-center'>Loading...</div>;

  return (
    <div className='p-5'>
      <ul className='flex flex-wrap justify-center items-center gap-4'>
        {data.results.map(movie => {
              console.log(movieId);
              
          return (

            <Link to='/moviedetils' onClick={() => setMovieId(movie.id)} >
              <Movie id={movie.id} img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} title={movie.original_title} rating={movie.vote_average} />
            </Link>

          )
        }


        )}
      </ul>

      <div className='mt-4 flex justify-center gap-4'>
        <button
          onClick={handlePrev}
          disabled={count <= 1}
          className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50'
        >
          <IoIosArrowBack />
        </button>
        <h1 className='flex justify-center  items-center'>{count}</h1>
        <button
          onClick={handleNext}
          disabled={count >= 500}
          className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50'
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Popular;