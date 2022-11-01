import React, {useState} from 'react'
import axios from 'axios'

const AxiosPoki = () => {
    const [poki, setPoki] = useState([])

    const fetchData =() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then ((response)=>{
            console.log(response.data.results)
            setPoki(response.data.results);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return (
        <div>
            <h1>Axios API</h1>
            <button onClick={fetchData}>Pokemon List</button>
            {
                poki.map((p, i) => {
                    return(
                        <div key={i}>
                            <h2>{p.name}</h2>
                        </div>
                    )})
            }
        </div>
    )
}

export default AxiosPoki