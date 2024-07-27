import '../App.css';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';



function Login() {
  const [name,setName]=useState("");
  const [password,setPassword]=useState("");
  const navigate = useNavigate(); 

  const [error,setError]=useState("");

  const handlename=(e)=>{
    setName(e.target.value);
  }
  const handlepassword=(e)=>{
    setPassword(e.target.value);
  }
  const handleClick = async (e) => {
    e.preventDefault(); // Prevent form from submitting normally

    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: name,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('user', JSON.stringify(data));
        navigate('/profile');
      } else {
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="main">
      <div className="dotted">
        <hr className="lines"></hr>
        <hr className="lines"></hr>
        <hr className="lines"></hr>
        <hr className="lines"></hr>
        <hr className="lines"></hr>
        <hr className="lines"></hr>
        <hr className="lines"></hr>
        <hr className="lines"></hr>
        <hr className="lines"></hr>
        <hr className="lines"></hr>
      </div>
      <div className="content">
        <div className="card-container">
          <div className="card">
            <p>Welcome back! 👋</p>
            <h2>Sign in to your account</h2>
            <form>
              <label for="email">Your email</label>
              <input className="input" id="email" type="text" onChange={handlename}></input>
              <label  for="pass">Password</label>
              <input style={{width: "92%",
  height: "45px",
  padding: "0px 12px 0px 12px",
  "border-radius": "6px",
  opacity: "0px",
  border: "1px solid #DEDEDE",
  margin: "4% 0%"}} className="input" id="pass" type="text" onChange={handlepassword}></input>
              <button type="submit" className="continue" onClick={handleClick}>CONTINUE</button>
            </form>
            <div style={{"text-align":"center"}}>
            <button className="signup">Forget your password?</button>
            </div>
          </div>
          <div style={{"text-align":"center",margin:"20px"}}>
            <p>Don’t have an account? <button className="signup">Sign up</button></p>
            {error&&<p style={{color:"red"}}>{error}</p>}
          </div>
        </div>
          
      </div>
      <div className="white">
        <hr className="line1" style={{height:"5px",width:"200px"}}></hr>
        <hr className="line2" style={{height:"5px",width:"200px"}}></hr>
      </div>
    </div>
  );
}

export default Login;
