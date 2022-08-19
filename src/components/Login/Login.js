import { Link } from 'react-router-dom'

export const Login = () => {

    return (
        <div className="container">
            <form>
                {/* <img className='image' src="./images/4e70faa58c5f1fdac79eee11bf93e992.jpg" alt="just image" /> */}
                <p className='paragraph'>Welcome</p>
                <input className='css-input' type="email" placeholder="Email" />
                <br />
                <br />
                <input className='css-input' type="password" placeholder="Password" />
                <br />
                <br />
                <input className='myButton' type="button" value="Log in" />
                <br />
                <br />
                <Link to="/register">Don't have an account? Sign up!</Link>
            </form>
        </div>
    )
};