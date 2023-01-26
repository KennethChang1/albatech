import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({setLogin, setData}) => {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('https://reqres.in/api/login', {
            email: email,
            password: pwd
        })
            .then(function (response) {
                setLogin(true)
                setData(response)
                navigate("/profile")

        })
            .catch(function (error) {
                setError(true)
                console.log(error);
        });
    }

    return ( 
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <div className="form__item">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div className="form__item">
                <label htmlFor="pwd">Password</label>
                <input type="password" name="pwd" id="pwd" autoComplete="on" onChange={(e) => setPwd(e.target.value)} required/>
            </div>
            <button className="btn">Login</button>
            {error && <p className="error">Email is incorrect, please try again.</p>}
        </form>
     );
}
 
export default Login;