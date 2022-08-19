import { Link } from "react-router-dom";

export const Register = () => {

    return (
        <div className="container">
            <form>
                {/* <img className='image' src="./images/4e70faa58c5f1fdac79eee11bf93e992.jpg" alt="just image" /> */}
                <p className='paragraph'>Register</p>
                <input className='css-input' type="text" placeholder="Username" />
                <br />
                <br />
                <input className='css-input' type="email" placeholder="Email" />
                <br />
                <br />
                <input className='css-input' type="password" placeholder="Password" />
                <br />
                <br />
                <input className='css-input' type="re-password" placeholder="Re-password" />
                <br />
                <br />

                <input className='myButton' type="button" value="Register" />

                <br />
                <br />
                <Link to="/login">Already have an account?</Link>
            </form>
        </div>
    )
};