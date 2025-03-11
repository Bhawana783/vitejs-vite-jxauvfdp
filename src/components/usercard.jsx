// write the component code here
import React from "react";

const Usercard = () => {
  const profilePhoto = "https://images.pexels.com/photos/18716726/pexels-photo-18716726.jpeg?cs=srgb&dl=pexels-nikiemmert-18716726.jpg&fm=jpg"; 
  const name = "Bhawana";
  const email = "bhawana@example.com";
  const phone = "9867543213";
  const address = "123 Main Street, Kalka, India";

  return (
    <div className="user-card">
      <img src={profilePhoto} alt="Profile" className="profile-photo" />
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Address: {address}</p>
    </div>
  );
};

export default Usercard;

