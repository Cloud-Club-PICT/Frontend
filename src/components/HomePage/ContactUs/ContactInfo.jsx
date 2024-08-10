import React from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MeetupIcon from '@mui/icons-material/Group'; // Using Group icon as a placeholder for Meetup

const ContactInfo = () => {
  return (
    <div className="flex-1 p-4 bg-gradient-to-r from-primary-100 to-primary-300 text-white rounded-lg flex flex-col items-center justify-center space-y-4">
      <img src="./images/Contact_us_2.jpeg" alt="Contact" className="w-50 h-50 mb-4 rounded-full border-4 border-primary-200" />
      <div className="flex items-center space-x-2">
        <MailOutlineIcon />
        <a href="mailto:example@gmail.com" className="underline">example@gmail.com</a>
      </div>
      <div className="flex items-center space-x-2">
        <PhoneIcon />
        <p>+91 78945 65230</p>
      </div>
      <div className="flex items-center space-x-2">
        <LocationOnIcon />
        <p>Your Address Here</p>
      </div>
      <div className="flex space-x-4 mt-4">
        <a href="https://www.linkedin.com/posts/aws-cloud-club-pict_aws-cloud-club-at-pict-meetup-activity-7185691896281788416-WNAL"><LinkedInIcon fontSize="large" /></a>
        <a href="#"><InstagramIcon fontSize="large" /></a>
        <a href="https://www.meetup.com/aws-cloud-club-at-pict"><MeetupIcon fontSize="large" /></a>
      </div>
    </div>
  );
}

export default ContactInfo;
