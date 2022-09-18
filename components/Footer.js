import React from "react";

const Footer = () => {
  return (
    <footer className="p-5 flex justify-center">
      <p className="text-sm border-t-2 border-t-slate-600 inline-block pt-1 text-center">
        Made with ❤️ by{" "}
        <a
          className="text-blue-500 hover:text-blue-700"
          href="https://www.mridul.tech/"
          target="_blank"
        >
          Mridul
        </a>
      </p>
    </footer>
  );
};

export default Footer;
