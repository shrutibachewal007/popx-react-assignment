import React from "react";
import { useNavigate } from "react-router-dom";

function Profile(){

const navigate = useNavigate();
const user = JSON.parse(localStorage.getItem("user"));

if(!user){
navigate("/login");
return null;
}

return(

<div className="app-container">

<div className="mobile-card">

<div className="account-header">
Account Settings
</div>

<div className="profile-section">

<div className="profile-image-wrapper">

<img
src="https://randomuser.me/api/portraits/women/44.jpg"
alt="profile"
className="profile-img"
/>

<div className="camera-icon">📷</div>

</div>

<div className="profile-info">

<div className="profile-name">
{user.name}
</div>

<div className="profile-email">
{user.email}
</div>

</div>

</div>

<div className="profile-description">

Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
Dolore Magna Aliquyam Erat.

</div>

<div className="bottom-border"></div>

</div>

</div>

)

}

export default Profile;
