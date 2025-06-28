import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-transparent py-6 text-center">
      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()}. All Rights Reserved by{' '}
        <span className="text-green-500 hover:underline cursor-pointer">
          Shahrin Akther
        </span>
      </p>
    </footer>
  );
};

export default Footer;
