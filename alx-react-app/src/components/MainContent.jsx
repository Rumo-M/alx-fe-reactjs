jsx
// MainContent.jsx
import React from 'react';

function MainContent() {
    return (
     <div>
      style={{
      padding: '20px',
      margin: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0px 0px 10px rgba(0,0,0,0.1)'
    }}
      {/* Main content goes here */}
        <main>
          <p>I love to visit New York, Paris, and Tokyo.</p>
        </main>
    </div>
    );
}

export default MainContent;
