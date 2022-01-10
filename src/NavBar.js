import {Link, NavLink} from 'react-router-dom'
import { useState, useEffect } from 'react'
import GoBack from './GoBack'
import axios from 'axios'



const NavBar = () => {

    const [data, setData] = useState([])
    const [counter, setCounter] = useState(100)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => setData(res.data)) 
    }
 

    return(
        <nav style={{display:'flex', justifyContent: 'space-around'}}>
        <Link to='myfirstcomponent' state={data} > 
            My first component
        </Link>
        <NavLink
         to="/secondcomponent"
         style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
        >
         Second component
       </NavLink>
        <Link to='/'>Home</Link>
        <Link to='/users'>Users</Link>
        <Link to='/maps'> Maps</Link>
        </nav>
    )
}

export default NavBar