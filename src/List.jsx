import { useState, useEffect } from "react";
import axios from "axios";

const List = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            setData(res.data);
        })
    }, []);

    console.log(data)

    return (
        <ul>
            {data.map((item, index)=>{
                <li key={index}>{item.name}</li>
            })}
        </ul>
  )
}

export default List
