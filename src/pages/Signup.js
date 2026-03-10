import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(){

const navigate = useNavigate();

const [name, setName] = useState('');
const [phone, setPhone] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [company, setCompany] = useState('');
const [agency, setAgency] = useState('yes');


// SAVE USER
// const handleSubmit = (e) => {
// e.preventDefault();

// const userData = {
// name: name,
// email: email,
// password: password
// };

// localStorage.setItem("user", JSON.stringify(userData));

// alert("Account created successfully!");

// navigate("/login");
// };

const handleSubmit = (e) => {
e.preventDefault();

// validation
if(!name.trim() || !phone.trim() || !email.trim() || !password.trim()){
alert("Please fill all required fields");
return;
}

const userData = {
name: name,
email: email,
password: password
};

localStorage.setItem("user", JSON.stringify(userData));

alert("Account created successfully!");

navigate("/login");
};

return(

<div className="signup-wrapper">

{/* FORM STARTS HERE */}
<form onSubmit={handleSubmit} className="signup-form">

<div className="form-title">
Create your <br/> PopX account
</div>

<div className="input-group">
<label>Full Name <span className="required">*</span></label>
<input value={name} onChange={(e) => setName(e.target.value)} />
</div>

<div className="input-group">
<label>Phone number <span className="required">*</span></label>
<input value={phone} onChange={(e) => setPhone(e.target.value)} />
</div>

<div className="input-group">
<label>Email address <span className="required">*</span></label>
<input value={email} onChange={(e) => setEmail(e.target.value)} />
</div>

<div className="input-group">
<label>Password <span className="required">*</span></label>
<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
</div>

<div className="input-group">
<label>Company name</label>
<input value={company} onChange={(e) => setCompany(e.target.value)} />
</div>

<div className="agency-title">
Are you an Agency?<span className="required">*</span>
</div>

<div className="radio-options">
<label>
<input type="radio" name="agency" value="yes"
checked={agency === 'yes'}
onChange={(e) => setAgency(e.target.value)} /> Yes
</label>

<label>
<input type="radio" name="agency" value="no"
checked={agency === 'no'}
onChange={(e) => setAgency(e.target.value)} /> No
</label>
</div>


<button type="submit" className="submit-btn" onClick={handleSubmit}> 
Create Account
</button>

</form>
{/* FORM ENDS HERE */}

</div>

)

}

export default Signup;
