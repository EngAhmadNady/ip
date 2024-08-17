import "./register.scss";
import { Link, useNavigate, useEffect } from "react-router-dom";
import { useState } from "react";
import apiRequest from "../../lib/apiRequest";
import axios from "axios";


function Register() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [ip, setip] = useState("");


  const navigate = useNavigate();

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setError("")
    setIsLoading(true);
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    useEffect(()=>{
      getUserIp();
    },[])
    
    const getUserIp = async()=>{
      const ip = await axios.get('https://ipapi.co/json');
      setip(ip.data.ip);
    }

    try {
      const res = await apiRequest.post("/auth/register", {
        username,
        email,
        password,
        ip
      });
        console.log(res.data);
      navigate("/login");
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="registerPage">
      <div className="formContainer">
        <form onSubmit={HandleSubmit}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button disabled={isLoading}>Register</button>
          {error && <span>{error}</span>}
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
    </div>
  );
}

export default Register;
