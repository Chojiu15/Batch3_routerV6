import axios from 'axios'
import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'

const Users =() => {

    const [users, setUsers ] = useState([])

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setUsers(res.data))
    }
    console.log(users)

    return(
        <>
            {users.map(user => {
                return(
                    <>
                        <Link to={`/user/${user.id}`}><h1>{user.name}</h1></Link>
                        <p>{user.id}</p>
                    </>
                )
            })}
        </>
    )
}


export default Users