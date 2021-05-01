import React, {useState,useEffect}from 'react'
import Movie from './components/Movie';


//const F_API="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";//
const F_API="https://api.themoviedb.org/3/discover/movie?api_key=fa2bb19984a6fd4495358fc3f7303f3d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";//

const S_API="https://api.themoviedb.org/3/search/movie?&api_key=fa2bb19984a6fd4495358fc3f7303f3d&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  useEffect( () => {
    fetch(F_API)
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);
      setMovies(data.results);
    });
  
  }, []);
   
  const handleOnSubmit =(e)=>{
      e.preventDefault();
      fetch(S_API+searchTerm)
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data);
        setMovies(data.results);
      });
    
    }
  const handleOnChange=(e)=>{
    setSearchTerm(e.target.value);
  }
  return (<>
    <header className="header">
    <form onSubmit={handleOnSubmit}>
    <input   
    className="search" 
    type="search" 
    placeholder="Search"
    value={searchTerm}
    onChange={handleOnChange}
    >

     </input>
    </form>
    </header>
    <div className="movie-container">
    {movies.map((movie)=>{
      return(
        <Movie key={movie.id} {...movie}/>
      )
      
    })} 
    </div>
    </>
  );
}

export default App;
