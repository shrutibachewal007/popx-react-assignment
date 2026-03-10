// import { useNavigate } from "react-router-dom";

// function Landing(){

// const navigate = useNavigate()

// return(

// <div>

// <h2>Welcome to PopX</h2>

// <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

// <button className="primary"
// onClick={()=>navigate("/signup")}
// >
// Create Account
// </button>

// <button className="secondary"
// onClick={()=>navigate("/login")}
// >
// Already Registered? Login
// </button>

// </div>

// )

// }

// export default Landing

///////////////////////////////////////////////
// import { useNavigate } from "react-router-dom"

// function Landing(){

// const navigate = useNavigate()

// return(

// <div>

// <div className="title">
// Welcome to PopX
// </div>

// <div className="subtitle">
// Lorem ipsum dolor sit amet,<br/>
// consectetur adipiscing elit.
// </div>

// <button
// className="btn-primary"
// onClick={()=>navigate("/signup")}
// >
// Create Account
// </button>

// <button
// className="btn-secondary"
// onClick={()=>navigate("/login")}
// >
// Already Registered? Login
// </button>

// </div>

// )

// }

// export default Landing
////////////////////////////////////
// function Landing(){

// return(

// <div className="landing-content">

// <h1 className="title">Welcome to PopX</h1>

// <p className="subtitle">
// Lorem ipsum dolor sit amet,
// consectetur adipiscing elit.
// </p>

// <button className="btn-primary">
// Create Account
// </button>

// <button className="btn-secondary">
// Already Registered? Login
// </button>

// </div>

// )

// }

// export default Landing
/////////////////////////////////////////

import { useNavigate } from "react-router-dom";

function Landing() {

const navigate = useNavigate();

return (

<div className="landing-content">

<h1 className="title">Welcome to PopX</h1>

<p className="subtitle">
Lorem ipsum dolor sit amet,<br/>
consectetur adipiscing elit.
</p>

<button
className="btn-primary"
onClick={() => navigate("/signup")}
>
Create Account
</button>

<button
className="btn-secondary"
onClick={() => navigate("/login")}
>
Already Registered? Login
</button>

</div>

);

}

export default Landing;