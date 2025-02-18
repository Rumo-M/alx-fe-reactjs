jsx
// Footer.jsx
import React from 'react';
const Footer = () => {
  
  return (
    <footer style={{
      backgroundColor: 'navy',
      color: 'white',
      textAlign: 'center',
      padding: '10px',
      marginTop: '20px'
    }}>
      <p>&copy; 2023 My Favorite Cities</p>
    </footer>
  );
};

function Footer() {
    return (
        <div>
          <footer>
             <p>© 2023 City Lovers</p>
          </footer>
        </div>
    );
}

export default Footer;




