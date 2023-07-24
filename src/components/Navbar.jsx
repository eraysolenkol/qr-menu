import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <div className="navbar">
            <img width={120} height={100} src="/logo.png"/>
            <a style={{cursor:"pointer"}} onClick={() => document.getElementById("sidenav").classList.toggle("open")}><FontAwesomeIcon icon={faUtensils} bounce/></a>
        </div>
    )
}

export default Navbar;