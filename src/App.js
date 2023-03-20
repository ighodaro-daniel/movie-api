import {useState,useEffect} from 'react'
import "./style.css"
import searchIcon from "./search.svg"
import MovieCard from './MovieCard'
function App() {
  const[search,setSearch] = useState("")
  const[movies,setMovies] = useState([])

  const apiUrl = "http://www.omdbapi.com/?apikey=cea338a9"
  const searchMovies = async(title) =>{
    const response = await fetch(`${apiUrl}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
  }
  
  
  useEffect(() =>{searchMovies("batman")},[])

  return (
    
    <div className="app">
      <h1>citymovie</h1>
      <div className="search">
        <input
        placeholder="search for movies"
        value={search}
        onChange ={(e) =>{setSearch(e.target.value)}}/>
      <img src={searchIcon} alt="search-icon" onClick={()=>searchMovies(search)} />
      </div>
     
        {movies?.length > 0
        ?(
          <div className="container">
         { movies.map((movie)=>(
         <MovieCard movie={movie}/>
))}
</div>)
: (<div className="empty">
  <h2>no such file found</h2>
</div>)
}
      


     </div>
  );
}

export default App;
