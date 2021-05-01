import React from 'react'

const IMG_API="https://image.tmdb.org/t/p/w1280";
export const Movie = ({title,overview,poster_path,vote_average}) => {
    return (
        <div className="movie">
        <img src={IMG_API + poster_path} alt={title}/>
        <div className="movie-info">
            <h2>{title}</h2>
            <span>{vote_average}</span>
        </div>
        <div className="movieover">
            <h3>Overview</h3>
            <p>{overview}</p>
        </div>
        </div>
    );
}
export default Movie;
