import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between items-center px-5 py-3">
      <img
        src="/assets/st_api_logo.jpg"
        alt="logo"
        className="h-10 w-10 rounded-sm"
      />
      <div className="flex items-center space-x-3">
        <a href="/" className="btn">
          Home
        </a>
        <a
          href="https://rapidapi.com/Mridul2820/api/stranger-things-character-api"
          className="btn"
          target="_blank"
          rel="noreferrer"
        >
          API Docs
        </a>
      </div>
    </div>
  );
};

export default Header;
