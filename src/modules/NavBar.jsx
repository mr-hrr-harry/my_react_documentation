import { Link } from "react-router-dom"

let NavBar = () => {
    return(
        <nav className="navbar bg-dark text-white p-3">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to={'/users/login'}>Login</Link>
            <Link to={'/users/register'}>Register</Link>
        </nav>
    )
}

export default NavBar