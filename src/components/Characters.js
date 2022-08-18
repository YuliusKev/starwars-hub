import { useState, useEffect } from "react";

const Dashboard = () => {
    const [allCharacters, setAllCharacters] = useState([]);
    let pageNumber = 1

    const getData = () => {
        const url = `https://swapi.dev/api/people?page=${pageNumber}`
        fetch(url)
        .then((response) => response.json())
        .then((response) => {
            const newCharacter = response.results;
            
            setAllCharacters(oldCharacter => [...oldCharacter, ...newCharacter]).then(console.log(allCharacters))
        })
        .catch((err) => {
           console.log(err.message);
        });
    }

    const handleScroll = (e) => {
        console.log("top: ",e.target.documentElement.scrollTop);
        console.log("window: ",window.innerHeight);
        console.log("height: ",e.target.documentElement.scrollHeight);
        if(window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight)
        {
            pageNumber++;
            getData(pageNumber);
        }
    }

    useEffect(() => {
        getData(pageNumber);
        window.addEventListener("scroll", handleScroll)
    }, [])
    
    if(allCharacters.length < 1) {
        return <div className="bg-black text-white">
            <h1> Pleses wait some time.... </h1>
        </div>
    }
    else
    {
        return (
            <div>
                {allCharacters.map((item, i) => {
                    return(
                        <>
                            <a href={"#"} id={"episode_"+item.episode_id} key={item.episode_id} className="block p-6 bg-black border hover:bg-gray-900 ">
                                <h5 key={i} className="mb-2 text-2xl font-bold text-white">{item.name}</h5>
                                <p key={i} className="font-normal text-gray-700 text-yellow-400">Height: {item.height}</p>
                                <p key={i} className="font-normal text-gray-700 text-yellow-400">Mass: {item.mass}</p>
                                <p key={i} className="font-normal text-gray-700 text-yellow-400">Birth Year: {item.birth_year}</p>
                            </a>
                        </>
                    )
                })}
            </div>
        )
    }
}

export default Dashboard