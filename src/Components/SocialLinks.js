import React from 'react';

function SocialLinks({ github, linkedin, leetcode, iamneo, ieee }) {
  const links = [
    { name: 'GitHub', url: github },
    { name: 'LinkedIn', url: linkedin },
    { name: 'LeetCode', url: leetcode },
    { name: 'IAMNEO', url: iamneo },
    { name: 'IEEE', url: ieee },
  ];

  return (
    <div style={{ marginTop: '30px', textAlign: 'center' }}>
      <h3 style={{ marginBottom: '15px' }}>🔗 Connect with Me</h3>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: 'none',
              padding: '10px 20px',
              borderRadius: '25px',
              background: 'linear-gradient(135deg, #6b73ff, #000dff)',
              color: '#fff',
              fontWeight: 'bold',
              transition: 'transform 0.2s ease, box-shadow 0.3s ease',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.3)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
            }}
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default SocialLinks;
