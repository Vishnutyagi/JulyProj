import React, { useEffect, useState } from 'react';
const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      console.log(storedUser)
      if (storedUser && storedUser.id) {
        try {
          console.log("fsdf")
          const response = await fetch(`https://dummyjson.com/users/${storedUser.id}`);
          const data = await response.json();
          localStorage.setItem('profile', JSON.stringify(data));
          console.log(data)
          setUser(data);
        } catch (error) {
          console.error('Error fetching profile:', error);
        }
      }
    };
    fetchUserData();
  }, []);

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
          {user ? (
        <>
          <h2>{user.username}'s Profile</h2>
          <p>Id: {user.id}</p>
          <p>Name: {user.firstName} {user.lastName}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Gender: {user.gender}</p>
          {/* <p>Image: <img src={user.image}/></p> */}
        </>
      ) : (
        <p>Loading profile...</p>
      )}
            
          </div>
    
        </div>
          
      </div>
      <div className="white">
        <hr className="line1" style={{height:"5px",width:"200px"}}></hr>
        <hr className="line2" style={{height:"5px",width:"200px"}}></hr>
      </div>
    </div>
  );
};

export default Profile;
