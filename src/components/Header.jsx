import React from 'react';
import Typewriter from 'typewriter-effect';
import profileImage from '../assets/profileImage.png';

function Header() {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#282c34',
        color: '#fff',
        position: 'relative',
      }}
    >
      <div>
        <h1>Indunil W.A.K.</h1>
        <Typewriter
          options={{
            strings: ['CSE Undergraduate', 'An OUTLAW'],
            autoStart: true,
            loop: true,
          }}
        />
        <nav>
          <button
            style={{ marginRight: '10px' }}
            onClick={() => (window.location.href = '#about')}
          >
            About
          </button>
          <button
            style={{ marginRight: '10px' }}
            onClick={() => (window.location.href = '#projects')}
          >
            Projects
          </button>
          <button onClick={() => (window.location.href = '#contact')}>Contact</button>
        </nav>
      </div>

      {/* Profile Image on the Right with Glittering Effect */}
      <img
        src={profileImage}
        alt="profile"
        style={{
          height: '100px',
          width: '100px',
          borderRadius: '50%',
          objectFit: 'cover',
          boxShadow: '0 0 5px #e10',
          animation: 'glitter 1.5s infinite',
          //filter: 'grayscale(100%)',
        }}
      />

      {/* Gradient Border */}
      <div
        style={{
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '2px',
          background: 'linear-gradient(315deg, #ff0058, #03a9f4)',
        }}
      ></div>

      <style>
        {`
          @keyframes glitter {
            0% { box-shadow: 0 0 5px #e10; }
            50% { box-shadow: 0 0 20px #e10; }
            100% { box-shadow: 0 0 5px #10; }
          }
        `}
      </style>
    </header>
  );
}

export default Header;
