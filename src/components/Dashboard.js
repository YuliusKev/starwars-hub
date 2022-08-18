import { useState } from "react";

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

    if(allFilms == null) {
        getData();
        return <div>
            <h1> Pleses wait some time.... </h1>
        </div>
    }
    else
    {
        return (
            <div>
                {allFilms.results.map((item, i) => {
                    return(
                        <>
                            <a href="#" key={i} className="block p-6 bg-black border hover:bg-gray-700 ">
                                <h5  key={i} className="mb-2 text-2xl font-bold text-white">{item.title}</h5>
                                <p key={i} className="font-normal text-gray-700 text-yellow-400">{item.opening_crawl}</p>
                            </a>
                        </>
                        // <h1 key={i}>item</h1>
                    )
                })}
            </div>
        )
    }
}

export default Dashboard