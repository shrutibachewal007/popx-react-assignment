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
