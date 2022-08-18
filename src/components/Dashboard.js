import { useState, useEffect } from "react";

const Dashboard = () => {
    const [allFilms, setAllFilms] = useState();

    const getData = () => {
        fetch(`https://swapi.dev/api/films`)
        .then((response) => response.json())
        .then((response) => setAllFilms(response))
        .catch((err) => {
           console.log(err.message);
        });
    }

    useEffect(() => {
        getData();
    }, [])
    
    if(allFilms == null) {
        return <div className="bg-black text-white">
            <h1> Pleses wait some time.... </h1>
        </div>
    }
    else
    {
        console.log(allFilms);
        return (
            <div>
                {allFilms.results.map((item, i) => {
                    return(
                        <>
                            <a href={"#"} id={"episode_"+item.episode_id} key={item.episode_id} className="block p-6 bg-black border hover:bg-gray-900 ">
                                <h5 key={item.episode_id} className="mb-2 text-2xl font-bold text-white">{item.title}</h5>
                                <p key={item.episode_id} className="font-normal text-gray-700 text-yellow-400">{item.opening_crawl}</p>
                            </a>
                        </>
                    )
                })}
            </div>
        )
    }
}

export default Dashboard