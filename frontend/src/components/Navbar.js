import {Link} from 'react-router-dom'

const NavBar = ()=>{
    return(
        <header>
            <div className="container">
                <Link to = "/">
                    <h1>Body Workout</h1>
                </Link>
                <nav>
                    <div>
                        <Link to= "/login">Log In</Link>
                        <Link to= "/signup">Sign Up</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}
export default NavBar;