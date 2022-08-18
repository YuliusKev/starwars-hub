import { useState, useEffect } from "react";
import {
    useParams,
  } from "react-router-dom";

const MovieDetail = () => {
    const { id } = useParams();
    const [MovieData, setMovieData] = useState();

    const getData = () => {
        const url = `https://swapi.dev/api/films/${id}`
        fetch(url)
        .then((response) => response.json())
        .then((response) => setMovieData(response))
        .catch((err) => {
           console.log(err.message);
        });
    }

    useEffect(() => {
        getData();
    }, [])


    if(MovieData == null) {
        return <div className="bg-black text-white">
            <h1> Pleses wait some time.... </h1>
        </div>
    }
    else
    {
      return (
        <div className="bg-black h-screen">
            <h1 className="text-6xl text-white p-4">{MovieData.title}</h1>
            <p className="mb-2 text-1xl text-yellow-400">{MovieData.opening_crawl}</p>
            <p className="text-white">Director: {MovieData.director}</p>
            <p className="text-white">Producer: {MovieData.producer}</p>
            <p className="text-white">Created Date: {MovieData.release_date}</p>
        </div>
      )
    }

}

export default MovieDetail