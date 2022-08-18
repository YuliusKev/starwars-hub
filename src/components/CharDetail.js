import { useState, useEffect } from "react";
import {
    useParams,
    useLocation 
  } from "react-router-dom";

const CharDetail = () => {
    const location = useLocation()
    const { api } = location.state

    const [charData, setCharData] = useState();

    const getData = () => {
        const url = api
        console.log(url)
        fetch(url)
        .then((response) => response.json())
        .then((response) => setCharData(response))
        .catch((err) => {
           console.log(err.message);
        });
    }

    useEffect(() => {
        getData();
    }, [])


    if(charData == null) {
        return <div className="bg-black text-white">
            <h1> Pleses wait some time.... </h1>
        </div>
    }
    else
    {
      return (
        <div className="bg-black h-screen">
            <h1 className="text-6xl text-white p-4">{charData.name}</h1>
            <p className="text-white">Height: {charData.height}</p>
            <p className="text-white">Mass: {charData.mass}</p>
            <p className="text-white">Hair Color: {charData.hair_color}</p>
            <p className="text-white">Skin Color: {charData.skin_color}</p>
            <p className="text-white">Eye Color Date: {charData.eye_color}</p>
            <p className="text-white">Birth Year: {charData.birth_year}</p>
            <p className="text-white">Gender: {charData.gender}</p>
        </div>
      )
    }

}

export default CharDetail