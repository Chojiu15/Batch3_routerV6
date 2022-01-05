import {Link, NavLink} from 'react-router-dom'



const NavBar = () => {
    return(
        <nav style={{display:'flex', justifyContent: 'space-around'}}>
        <Link to='/myfirstcomponent'>My first component</Link>
        <NavLink
         to="/secondcomponent"
         style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
       >
         Second component
       </NavLink>
        <Link to='/'>Home</Link>

        </nav>
    )
}

export default NavBar