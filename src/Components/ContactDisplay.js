import React, { useEffect, useState, link } from 'react';
import axios from 'axios';



const ContactDisplay = () => {
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
    const update = () => {
      window.location.href = '/contact';
    }
  return (
    <div className="container">
        <div className="notification">
        <div className="notiglow"></div>
        <div className="notiborderglow"></div>
        <div className="notititle">Email</div>
        <a href={`mailto:${contact.email}`} className="notibody">{contact.email}</a>
        </div>
        <div className="notification">
        <div className="notiglow"></div>
        <div className="notiborderglow"></div>
        <div className="notititle">Mobile Number</div>
        <a href={`tel:${contact.mobileNumber}`} className="notibody">0{contact.mobileNumber}</a>
        </div>
        <div className="notification">
        <div className="notiglow"></div>
        <div className="notiborderglow"></div>
        <div className="notititle">Address</div>
        {/* <div className="notibody"></div> */}
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="notibody"
        >{contact.address}</a>
</div>
      <div className="notification">
        <div className="notiglow"></div>
        <div className="notiborderglow"></div>
        <div className="notititle">Facebook Link</div>
        <a href={`${contact.facebookLink}`} className="notibody">{contact.facebookLink}</a>
      </div>
      <div className="notification">
        <div className="notiglow"></div>
        <div className="notiborderglow"></div>
        <div className="notititle">Instagram Link</div>
        <a href={`${contact.instagramLink}`} className="notibody">{contact.instagramLink}</a>
      </div>
      <div className="notification">
        <div className="notiglow"></div>
        <div className="notiborderglow"></div>
        <div className="notititle">TikTok Link</div>
        <a href={`${contact.tikTokLink}`} className="notibody">{contact.tikTokLink}</a>
      </div>
      <div className="notification">
        <div className="notiglow"></div>
        <div className="notiborderglow"></div>
        <div className="notititle">Mission</div>
        <a href="#" className="notibody">{contact.mission}</a>
        </div>
        <div className="notification">
        <div className="notiglow"></div>
        <div className="notiborderglow"></div>
        <div className="notititle">Vision</div>
        <a href="#" className="notibody">{contact.vision}</a>
        </div>
        <div className="notification">
        <div className="notiglow"></div>
        <div className="notiborderglow"></div>
        <div className="notititle">About Us</div>
        <a href="#" className="notibody">{contact.aboutUs}</a>
        </div>
      <button data-label="Register" class="rainbow-hover" onClick={update}>
  <span class="sp">Update</span>
</button>
    </div>
  );
};

export default ContactDisplay;
