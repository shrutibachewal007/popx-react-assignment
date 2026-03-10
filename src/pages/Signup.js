// import { useNavigate } from "react-router-dom"

// function Signup(){

// const navigate = useNavigate()

// return(

// <div>

// <h2>Create your PopX account</h2>

// <input placeholder="Full Name"/>

// <input placeholder="Phone number"/>

// <input placeholder="Email address"/>

// <input type="password" placeholder="Password"/>

// <input placeholder="Company name"/>

// <p>Are you an Agency?</p>

// <label>
// <input type="radio" name="agency"/> Yes
// </label>

// <label>
// <input type="radio" name="agency"/> No
// </label>

// <button
// className="primary"
// onClick={()=>navigate("/profile")}
// >
// Create Account
// </button>

// </div>

// )

// }

// export default Signup


////////////////////////////////////////////////////////////////////////////////

// function Signup(){

// return(

// <div>

// <div className="form-title">
// Create your<br/> PopX account
// </div>

// <div className="input-group">
// <label>Full Name*</label>
// <input type="text" placeholder="Marry Doe"/>
// </div>

// <div className="input-group">
// <label>Phone number*</label>
// <input type="text" placeholder="Marry Doe"/>
// </div>

// <div className="input-group">
// <label>Email address*</label>
// <input type="text" placeholder="Marry Doe"/>
// </div>

// <div className="input-group">
// <label>Password*</label>
// <input type="password" placeholder="Marry Doe"/>
// </div>

// <div className="input-group">
// <label>Company name</label>
// <input type="text" placeholder="Marry Doe"/>
// </div>

// <div className="radio-group">

// <span>Are you an Agency?*</span>

// <div className="radio-options">

// <label>
// <input type="radio" name="agency"/> Yes
// </label>

// <label>
// <input type="radio" name="agency"/> No
// </label>

// </div>

// </div>

// <button className="submit-btn">
// Create Account
// </button>

// </div>

// )

// }

// export default Signup

///////////////////////////////////////////////////////////////////
// function Signup(){

// return(

// <div>

// <div className="form-title">
// Create your <br/> PopX account
// </div>

// <div className="input-group">
// <label>
// Full Name <span className="required">*</span>
// </label>
// <input placeholder="Marry Doe"/>
// </div>

// <div className="input-group">
// <label>
// Phone number <span className="required">*</span>
// </label>
// <input placeholder="Marry Doe"/>
// </div>

// <div className="input-group">
// <label>
// Email address <span className="required">*</span>
// </label>
// <input placeholder="Marry Doe"/>
// </div>

// <div className="input-group">
// <label>
// Password <span className="required">*</span>
// </label>
// <input type="password" placeholder="Marry Doe"/>
// </div>

// <div className="input-group">
// <label>
// Company name
// </label>
// <input placeholder="Marry Doe"/>
// </div>

// <div className="agency-title">
// Are you an Agency?<span className="required">*</span>
// </div>

// <div className="radio-options">

// <label>
// <input type="radio" name="agency"/> Yes
// </label>

// <label>
// <input type="radio" name="agency"/> No
// </label>

// </div>

// <button className="submit-btn">
// Create Account
// </button>

// </div>

// )

// }

// export default Signup

//////////////////////////////////////////////////////
// function Signup(){

// return(

// <div>

// <div className="form-title">
// Create your<br/>PopX account
// </div>

// <div className="input-group">
// <label>Full Name <span className="required">*</span></label>
// <input placeholder="Marry Doe"/>
// </div>

// <div className="input-group">
// <label>Phone number <span className="required">*</span></label>
// <input placeholder="Marry Doe"/>
// </div>

// <div className="input-group">
// <label>Email address <span className="required">*</span></label>
// <input placeholder="Marry Doe"/>
// </div>

// <div className="input-group">
// <label>Password <span className="required">*</span></label>
// <input type="password" placeholder="Marry Doe"/>
// </div>

// <div className="input-group">
// <label>Company name</label>
// <input placeholder="Marry Doe"/>
// </div>

// <div className="agency-title">
// Are you an Agency?<span className="required">*</span>
// </div>

// <div className="radio-options">
// <label><input type="radio" name="agency"/> Yes</label>
// <label><input type="radio" name="agency"/> No</label>
// </div>

// <button className="submit-btn">
// Create Account
// </button>

// </div>

// )

// }

// export default Signup

///////////////////////////////////////////////////////////

// function Signup() {

// return (

// <div>

// <div className="form-title">
// Create your <br/> PopX account
// </div>

// <div className="input-group">
// <label>Full Name <span className="required">*</span></label>
// <input type="text" defaultValue="Marry Doe"/>
// </div>

// <div className="input-group">
// <label>Phone number <span className="required">*</span></label>
// <input type="text" defaultValue="Marry Doe"/>
// </div>

// <div className="input-group">
// <label>Email address <span className="required">*</span></label>
// <input type="text" defaultValue="Marry Doe"/>
// </div>

// <div className="input-group">
// <label>Password <span className="required">*</span></label>
// <input type="password" defaultValue="Marry Doe"/>
// </div>

// <div className="input-group">
// <label>Company name</label>
// <input type="text" defaultValue="Marry Doe"/>
// </div>

// <div className="agency-title">
// Are you an Agency?<span className="required">*</span>
// </div>

// <div className="radio-options">
// <label>
// <input type="radio" name="agency"/> Yes
// </label>

// <label>
// <input type="radio" name="agency"/> No
// </label>
// </div>

// <button className="submit-btn">
// Create Account
// </button>

// </div>

// )

// }

// export default Signup

////////////////////////////////////////////////////////////////////////
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Signup(){

// const navigate = useNavigate();
// const [name, setName] = useState('Marry Doe');
// const [phone, setPhone] = useState('Marry Doe');
// const [email, setEmail] = useState('Marry Doe');
// const [password, setPassword] = useState('Marry Doe');
// const [company, setCompany] = useState('Marry Doe');
// const [agency, setAgency] = useState('yes');

// // const handleSignup = () => {
// //   if (!name.trim() || !email.trim()) {
// //     alert("Please enter name and email.");
// //     return;
// //   }
// const handleSubmit = (e) => {
// e.preventDefault();

// const userData = {
// name: fullName,
// email: email,
// };
//   localStorage.setItem('user', JSON.stringify({ userData }));
//   alert("Account created successfully!");
//   navigate("/login");
// };

// return(

// <div className="signup-wrapper">

// <div className="form-fields">


// <div className="form-title">
// Create your <br/> PopX account
// </div>

// <div className="input-group">
// <label>Full Name <span className="required">*</span></label>
// <input value={name} onChange={(e) => setName(e.target.value)}/>
// </div>

// <div className="input-group">
// <label>Phone number <span className="required">*</span></label>
// <input value={phone} onChange={(e) => setPhone(e.target.value)}/>
// </div>

// <div className="input-group">
// <label>Email address <span className="required">*</span></label>
// <input value={email} onChange={(e) => setEmail(e.target.value)}/>
// </div>

// <div className="input-group">
// <label>Password <span className="required">*</span></label>
// <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
// </div>

// <div className="input-group">
// <label>Company name</label>
// <input value={company} onChange={(e) => setCompany(e.target.value)}/>
// </div>

// <div className="agency-title">
// Are you an Agency?<span className="required">*</span>
// </div>

// <div className="radio-options">
// <label><input type="radio" name="agency" value="yes" checked={agency === 'yes'} onChange={(e) => setAgency(e.target.value)}/> Yes</label>
// <label><input type="radio" name="agency" value="no" checked={agency === 'no'} onChange={(e) => setAgency(e.target.value)}/> No</label>
// </div>

// </div>


// <button className="submit-btn" onClick={handleSignup}>
// Create Account
// </button>

// </div>

// )

// }

// export default Signup
///////////////////////////////////////////////////////////////


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