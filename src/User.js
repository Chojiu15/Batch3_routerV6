import { useParams } from "react-router-dom"
import axios from 'axios'
import { useEffect, useState } from "react"


const User = () => {
    const {userId} = useParams()
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetchData()
    }, [])


    const fetchData = () => {
            axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(res => setUsers(res.data))
    }
    
    console.log(users)
    return(
        <>
            <h1>I am the user number : {userId} </h1>
            <h2>{users.name}</h2>
            <p>{users.website}</p>
        </>
    )
}

export default User