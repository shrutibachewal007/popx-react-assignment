// import { useNavigate } from "react-router-dom"

// function Login(){

// const navigate = useNavigate()

// return(

// <div>

// <h2>Signin to your PopX account</h2>

// <p>Lorem ipsum dolor sit amet.</p>

// <input placeholder="Email Address"/>

// <input type="password" placeholder="Password"/>

// <button
// className="primary"
// onClick={()=>navigate("/profile")}
// >
// Login
// </button>

// </div>

// )

// }

// export default Login
/////////////////////////////////////////
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function Login() {
// const navigate = useNavigate();
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');

// // Ensure fields are empty when component mounts
// useEffect(() => {
//   setEmail('');
//   setPassword('');
// }, []);

// const handleLogin = () => {
//   if (!email.trim() || !password.trim()) {
//     alert("Please enter email and password.");
//     return;
//   }
//   const storedUser = JSON.parse(localStorage.getItem('user')) || {};
//   // Only use existing name if the email matches the logged-in email
//   const userName = storedUser.email === email ? storedUser.name : email.split('@')[0];
//   localStorage.setItem('user', JSON.stringify({ name: userName, email }));
//   navigate("/profile");
// };

// return (

// <div className="signup-wrapper">

// <div className="form-fields">

// <div className="form-title">
// Signin to your <br/> PopX account
// </div>

// <div className="form-subtitle">
// Lorem ipsum dolor sit amet,<br/>
// consectetur adipiscing elit.
// </div>


// <div className="input-group">
// <label>Email Address</label>
// <input type="email" placeholder="Enter email address" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off"/>
// </div>


// <div className="input-group">
// <label>Password</label>
// <input 
//   type="password" 
//   placeholder="Enter password" 
//   value={password} 
//   onChange={(e) => setPassword(e.target.value)}
//   autoComplete="off"
// />
// </div>


// <button className="login-btn" onClick={handleLogin}>
// Login
// </button>



// </div>

// </div>

// )

// }

// export default Login

//////////////////////////////////////////////////////
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function Login() {

// const navigate = useNavigate();

// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const [error, setError] = useState("");


// // Always empty fields when page loads
// useEffect(() => {
// setEmail("");
// setPassword("");
// setError("");
// }, []);


// const handleLogin = () => {

// const storedUser = JSON.parse(localStorage.getItem('user'));

// // If no account created
// if (!storedUser) {
// setError("Please create an account first.");
// return;
// }

// // If fields empty
// if (!email.trim() || !password.trim()) {
// setError("Please enter email and password.");
// return;
// }

// // If email or password incorrect
// // if (email !== storedUser.email || password !== storedUser.password) {
// // setError("Enter correct email or password.");
// // return;
// // }


// // If correct login
// // navigate("/profile");

// if(email === storedUser.email && password === storedUser.password){
// navigate("/profile");
// }else{
// alert("Enter correct email or password");
// }

// };


// return (

// <div className="signup-wrapper">

// <div className="form-fields">

// <div className="form-title">
// Signin to your <br/> PopX account
// </div>

// <div className="form-subtitle">
// Lorem ipsum dolor sit amet,<br/>
// consectetur adipiscing elit.
// </div>


// <div className="input-group">
// <label>Email Address</label>
// <input
// type="email"
// placeholder="Enter email address"
// value={email}
// onChange={(e) => setEmail(e.target.value)}
// autoComplete="off"
// />
// </div>


// <div className="input-group">
// <label>Password</label>
// <input
// type="password"
// placeholder="Enter password"
// value={password}
// onChange={(e) => setPassword(e.target.value)}
// autoComplete="new-password"
// />
// </div>


// {/* Error message */}
// {error && (
// <p style={{color:"red", fontSize:"13px", marginBottom:"10px"}}>
// {error}
// </p>
// )}


// <button className="login-btn" onClick={handleLogin}>
// Login
// </button>

// </div>

// </div>

// )

// }

// export default Login;
///////////////////////////////////
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

const navigate = useNavigate();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");


// Always empty fields when page loads
useEffect(() => {
setEmail("");
setPassword("");
setError("");
}, []);


// const handleLogin = () => {

// const storedUser = JSON.parse(localStorage.getItem("user"));

// // No account created
// if (!storedUser) {
// setError("Please create an account first.");
// return;
// }

// // Empty fields
// if (!email.trim() || !password.trim()) {
// setError("Please enter email and password.");
// return;
// }

// // Wrong email or password
// if (email !== storedUser.email || password !== storedUser.password) {
// setError("Enter correct email or password.");
// return;
// }

// // Correct login
// setError("");
// navigate("/profile");

// };

// 
// const handleLogin = () => {

// const storedUser = JSON.parse(localStorage.getItem("user"));

// // 1️⃣ No account created
// if(!storedUser){
// setError("Please create an account first.");
// return;
// }

// // 2️⃣ Empty fields
// if(!email.trim() || !password.trim()){
// setError("Please enter email and password.");
// return;
// }

// // 3️⃣ Wrong credentials
// if(email !== storedUser.email || password !== storedUser.password){
// setError("Enter correct email or password.");
// return;
// }

// // 4️⃣ Correct login
// setError("");
// navigate("/profile");

// };

const handleLogin = () => {

const storedUser = JSON.parse(localStorage.getItem("user"));

// 1️⃣ Check if account exists first
if (!storedUser) {
setError("Please create an account first.");
return;
}

// 2️⃣ Check empty fields
if (!email.trim() || !password.trim()) {
setError("Please enter email and password.");
return;
}

// 3️⃣ Check credentials
if (email !== storedUser.email || password !== storedUser.password) {
setError("Enter correct email or password.");
return;
}

// 4️⃣ Successful login
setError("");
navigate("/profile");

};

return (

<div className="signup-wrapper">

<div className="form-fields">

<div className="form-title">
Signin to your <br/> PopX account
</div>

<div className="form-subtitle">
Lorem ipsum dolor sit amet,<br/>
consectetur adipiscing elit.
</div>


<div className="input-group">
<label>Email Address</label>
<input
type="email"
placeholder="Enter email address"
value={email}
onChange={(e) => setEmail(e.target.value)}
autoComplete="off"
/>
</div>


<div className="input-group">
<label>Password</label>
<input
type="password"
placeholder="Enter password"
value={password}
onChange={(e) => setPassword(e.target.value)}
autoComplete="new-password"
/>
</div>


{/* Error message */}
{error && (
<p style={{color:"red", fontSize:"13px", marginBottom:"10px"}}>
{error}
</p>
)}


<button className="login-btn" onClick={handleLogin}>
Login
</button>

</div>

</div>

);

}

export default Login;