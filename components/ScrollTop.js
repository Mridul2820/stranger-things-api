import React, { useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

const ScrollTop = () => {
  const [showTop, setShowTop] = useState(false);

  const showScrollButton = () => {
    if (window.scrollY >= 50) {
      setShowTop(true);
    } else {
      setShowTop(false);
    }
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', showScrollButton);
  }

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scroll(0, 0);
    }
  };

  return (
    <div
      onClick={scrollToTop}
      className={`fixed bottom-5 bg-gray-100 text-slate-800 p-1 rounded-sm cursor-pointer duration-500 hover:shadow-lg ${
        showTop ? 'opacity-100 right-8' : 'opacity-0 -right-full'
      }`}
    >
      <IoIosArrowUp size="24px" />
    </div>
  );
};

export default ScrollTop;
