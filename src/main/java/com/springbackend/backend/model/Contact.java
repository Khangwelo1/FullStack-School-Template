package com.springbackend.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
@Entity
public class Contact {
    @Id
    @GeneratedValue
    private long id;
    private String Email;
    private Number MobileNumber;
    private String Address;
    private String FacebookLink;
    private String InstagramLink;
    private String TikTokLink;
    private String Mission;
    private String Vision;
    private String AboutUs;
    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getEmail() {
        return this.Email;
    }

    public void setEmail(String Email) {
        this.Email = Email;
    }

    public Number getMobileNumber() {
        return this.MobileNumber;
    }

    public void setMobileNumber(Number MobileNumber) {
        this.MobileNumber = MobileNumber;
    }

    public String getAddress() {
        return this.Address;
    }

    public void setAddress(String Address) {
        this.Address = Address;
    }

    public String getFacebookLink() {
        return this.FacebookLink;
    }

    public void setFacebookLink(String FacebookLink) {
        this.FacebookLink = FacebookLink;
    }

    public String getInstagramLink() {
        return this.InstagramLink;
    }

    public void setInstagramLink(String InstagramLink) {
        this.InstagramLink = InstagramLink;
    }

    public String getTikTokLink() {
        return this.TikTokLink;
    }

    public void setTikTokLink(String TikTokLink) {
        this.TikTokLink = TikTokLink;
    }
    public String getVision() {
        return this.Vision;
    }
    public void setVision(String Vision) {
        this.Vision = Vision;
    }
    public String getMission() {
        return this.Mission;
    }
    public void setMission(String Mission) {
        this.Mission = Mission;
    }
    public String getAboutUs() {
        return this.AboutUs;
    }
    public void setAboutUs(String AboutUs) {
        this.AboutUs = AboutUs;
    }
}
