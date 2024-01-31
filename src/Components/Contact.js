// import React from 'react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';



function Contact() {
  const [contact, setContact] = useState([]);
  useEffect(()=>{
      loadContact();
  }, []);
  const loadContact = async() => {
      try {
          const response = await axios.get("http://localhost:8080/contact/1");
      setContact(response.data);
      } catch (error) {
          console.error("Error loading users: ", error)
      }
  }
  const updateContact = async () => {
    try {
      // Assuming you want to send contact details for update
      const response = await axios.put('http://localhost:8080/contact/1', contact);
      alert('Contact updated successfully!');
      window.location.href = '/';
      // console.log(response.data)
    } catch (error) {
      // Assuming you want to send new contact details for creation
      const response = await axios.post('http://localhost:8080/contact', contact);
      alert('Contact created successfully!');
      window.location.href = '/';
      // console.log(response.data)
    }
  };
  const handleInputChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };
  
  return (
    <div className="container">
      <div className="card">
        <a className="singup">Contact</a>
        <div className="inputBox1">
          <input type="text" 
          name="email"
          required="required" 
          value={contact.email || ''} 
          onChange={handleInputChange}/>
          <span className="user">Email</span>
        </div>

        <div className="inputBox">
        <input type="text" 
          name="mobileNumber"
          required="required" 
          value={contact.mobileNumber || ''} 
          onChange={handleInputChange}/>
          <span>Mobile Number</span>
        </div>

        <div className="inputBox">
        <input type="text" 
        name="address"
          required="required" 
          value={contact.address || ''} 
          onChange={handleInputChange}/>
          <span>Address</span>
        </div>

        <div className="inputBox1">
        <input type="text" 
        name="facebookLink"
          required="required" 
          value={contact.facebookLink || ''} 
          onChange={handleInputChange}/>
          <span className="user">Facebook Link</span>
        </div>

        <div className="inputBox">
        <input type="text" 
        name="instagramLink"
          required="required" 
          value={contact.instagramLink || ''} 
          onChange={handleInputChange}/>
          <span>Instagram Link</span>
        </div>

        <div className="inputBox">
        <input type="text" 
        name="tikTokLink"
          required="required" 
          value={contact.tikTokLink || ''} 
          onChange={handleInputChange}/>
          <span>TikTok Link</span>
        </div>

        <div className="inputBox">
        <input type="text" 
        name="mission"
          required="required" 
          value={contact.mission || ''} 
          onChange={handleInputChange}/>
          <span>Mission</span>
        </div>
        <div className="inputBox">
        <input type="text" 
        name="vision"
          required="required" 
          value={contact.vision || ''} 
          onChange={handleInputChange}/>
          <span>Vision</span>
        </div>
        <div className="inputBox">
        <input type="text" 
        name="aboutUs"
          required="required" 
          value={contact.aboutUs || ''} 
          onChange={handleInputChange}/>
          <span>About Us</span>
        </div>

        <button className="Update" onClick={updateContact}>Update</button>
      </div>
    </div>
  );
}

export default Contact;
