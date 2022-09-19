import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

const Header = () => {
  return (
    <div className="flex justify-between items-center px-5 py-3">
      <a href="/" title="Home">
        <img
          src="/assets/st_api_logo.jpg"
          alt="logo"
          className="h-10 w-10 rounded-sm"
        />
      </a>

      <div className="flex items-center space-x-3">
        <a href="/" className="btn" title="Home">
          Home
        </a>
        <a
          href="https://rapidapi.com/Mridul2820/api/stranger-things-character-api"
          className="btn"
          target="_blank"
          rel="noreferrer"
          title="Stranger Things API Docs"
        >
          API Docs
        </a>
        <a
          href="https://github.com/Mridul2820/stranger-things-api"
          target="_blank"
          rel="noreferrer"
          title="Github"
        >
          <AiFillGithub size={26} />
        </a>
      </div>
    </div>
  );
};

export default Header;
