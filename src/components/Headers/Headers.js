import { Link } from 'react-router-dom';

export const Headers = () => {
    return (
        <div className="topnav">
            <Link to="/" >Logo</Link>
            <Link to="/">Home</Link>
            <Link to="/login" className="split">Login</Link>
            <Link to="/register" className="split">Register</Link>
            <Link to="/catalog" className="split">Catalog</Link>
            <Link to="/about">Help</Link>
        </div>
    )
}