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
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
const navigate = useNavigate();
const [name, setName] = useState('');
const [email, setEmail] = useState('');

const handleLogin = () => {
  if (!name.trim() || !email.trim()) {
    alert("Please enter name and email.");
    return;
  }
  localStorage.setItem('user', JSON.stringify({ name, email }));
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
<label>Full Name</label>
<input type="text" placeholder="Enter full name" value={name} onChange={(e) => setName(e.target.value)}/>
</div>


<div className="input-group">
<label>Email Address</label>
<input type="email" placeholder="Enter email address" value={email} onChange={(e) => setEmail(e.target.value)}/>
</div>


<button className="login-btn" onClick={handleLogin}>
Login
</button>



</div>

</div>

)

}

export default Login