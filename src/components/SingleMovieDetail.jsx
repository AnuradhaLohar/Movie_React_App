import React, { useContext } from 'react';
import useFetchApi from '../hooks/UseFetchApi';
import MovieContext from '../MovieContext';

const SingleMovieDetail = () => {
  const { movieId } = useContext(MovieContext);
  const Api_Key = 'c45a857c193f6302f2b5061c3b85e743';

  const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${Api_Key}&language=en-US`;
  const creditsUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${Api_Key}&language=en-US`;

  const { data: movie, loading: movieLoading } = useFetchApi(movieUrl);
  const { data: credits, loading: creditsLoading } = useFetchApi(creditsUrl);

  if (movieLoading || creditsLoading || !movie || !credits) {
    return <div className="text-center text-white py-10">Loading...</div>;
  }

  return (
    <div className="bg-gray-950 text-white min-h-screen">
     
      <div
        className="relative w-full h-[75vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
          backgroundPosition: 'top right',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/95 flex items-center px-6 md:px-20 py-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 w-full max-w-7xl mx-auto">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-40 md:w-56 rounded-xl shadow-2xl object-cover"
            />
            <div className="space-y-3 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">{movie.title}</h2>
              <p className="text-yellow-400 text-lg font-medium">⭐ {movie.vote_average} / 10</p>
              <p className="text-gray-300 text-sm">
                {movie.runtime && `${movie.runtime} min • `}
                {movie.genres?.map((g) => g.name).join(', ')}
              </p>
              <p className="text-sm text-gray-400">📅 Released: {movie.release_date}</p>
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-1 text-white">📝 Overview</h3>
                <p className="text-gray-200 leading-relaxed max-w-2xl">{movie.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      <div className="py-12 px-6 md:px-20">
        <h3 className="text-3xl font-bold mb-8 border-b border-gray-700 pb-2 inline-block">
          Cast
        </h3>
        <div className="flex flex-wrap gap-6 justify-center md:justify-start">
          {credits.cast.slice(0, 10).map((actor) => (
            <div
              key={actor.id}
              className="w-60  bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                    : 'https://via.placeholder.com/500x750?text=No+Image'
                }
                alt={actor.name}
                className="h-80 w-full object-cover"
              />
              <div className="p-2 text-center">
                <p className="text-lg font-semibold">{actor.name}</p>
                <p className="text-gray-400 text-sm">as {actor.character}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default SingleMovieDetail;
