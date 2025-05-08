
import NavBar from "./components/NavBar"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import PopularMovie from "./components/PopularMovie"
import TopRatedMovie from "./components/TopRatedMovie.jsx"
import Upcomingovie from "./components/UpcomingMovie.jsx"
import SingleMovieDetail from "./components/SingleMovieDetail.jsx"
import MovieContext from "./MovieContext.js"
import { useState } from "react"

function App() {

  const [movieId, setMovieId] = useState(0)

  return (
    <>
    <MovieContext.Provider value={{movieId,setMovieId}}>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path = "/" element= {<PopularMovie />}/>
          <Route path = "/toprated" element = {<TopRatedMovie />}/>
          <Route path = "/upcomingmovie" element = {<Upcomingovie />}/>
          <Route path = "/moviedetils" element = {<SingleMovieDetail/>}/>
        </Routes>
      </BrowserRouter>
    </MovieContext.Provider>
      
    
      


    </>
  )
}

export default App
