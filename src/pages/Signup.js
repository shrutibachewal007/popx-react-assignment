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
function Signup(){

return(

<div className="signup-wrapper">

<div className="form-fields">


<div className="form-title">
Create your <br/> PopX account
</div>

<div className="input-group">
<label>Full Name <span className="required">*</span></label>
<input defaultValue="Marry Doe"/>
</div>

<div className="input-group">
<label>Phone number <span className="required">*</span></label>
<input defaultValue="Marry Doe"/>
</div>

<div className="input-group">
<label>Email address <span className="required">*</span></label>
<input defaultValue="Marry Doe"/>
</div>

<div className="input-group">
<label>Password <span className="required">*</span></label>
<input defaultValue="Marry Doe"/>
</div>

<div className="input-group">
<label>Company name</label>
<input defaultValue="Marry Doe"/>
</div>

<div className="agency-title">
Are you an Agency?<span className="required">*</span>
</div>

<div className="radio-options">
<label><input type="radio" name="agency" defaultChecked/> Yes</label>
<label><input type="radio" name="agency"/> No</label>
</div>

</div>


<button className="submit-btn">
Create Account
</button>

</div>

)

}

export default Signup