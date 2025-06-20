import React from 'react';
import SocialLinks from '../Components/SocialLinks';
import myImage from '../assets/Profile.png'; // ✅ import your image

function Home() {
  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <h1>Hi, I’m Shai Kumar R 👋</h1>

      {/* ✅ Profile Image */}
      <img
        src={myImage}
        alt="Shai Kumar R"
        style={{
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          objectFit: 'cover',
          margin: '20px 0',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
        }}
      />

      <p>Welcome to my academic dashboard showcasing my learning journey and achievements.</p>

      <SocialLinks
  github="https://github.com/Shaikumar2005"
  linkedin="https://www.linkedin.com/in/shai-kumar-r-993270257/"
  leetcode="https://leetcode.com/your_username"
  iamneo="https://platform.iamneo.ai/your_dashboard"
  ieee="https://ieeexplore.ieee.org/author/855606853958716" // ✅ Add your IEEE profile link here
/>
    </div>
  );
}

export default Home;
