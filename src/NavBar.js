import {Link} from 'react-router-dom'



const NavBar = () => {
    return(
        <nav style={{display:'flex', justifyContent: 'space-around'}}>
        <Link to='/myfirstcomponent'>My first component</Link>
        <Link to='/secondcomponent'>My second component</Link>
        <Link to='/'>Home</Link>

    </nav>
    )
}

export default NavBar