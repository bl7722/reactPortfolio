import React from "react";
import "../style.css"
import LinkedInPhoto from "../../Assets/img/LinkedInPhoto.png"
import Resume from "../../Assets/pdf/codingBrandonLopezResume.pdf"

function AboutAssets () {
return(
<div>
   <h2>About</h2>
   <h5>
      I am a driven Full-Stack trained professional interested in obtaining a full-time opportunity, offering creative, critical thinking and problem-solving skills.
   </h5>
   <br />
   <img id="img" src={LinkedInPhoto} alt="My Photo"></img>
   <div id="words">
      <p><a target="_blank" href="https://www.linkedin.com/in/brandon-lopez-280334106/">Follow this link</a> to my LinkedIn Profile</p>
      <p><a target="_blank" href="https://github.com/bl7722">Follow this link</a> to my Github Profile</p>
      <p><a target="_blank" href={Resume}>Follow this link</a> to view my resume</p>
      <p>Email: brandon.i.lopez77 at gmail.com</p>
   </div>
   <br /> 
</div>
)
}
export default AboutAssets;