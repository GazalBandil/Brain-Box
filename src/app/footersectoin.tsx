import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-4 bg-gray-900 text-gray-50 text-center">
      <p className="text-sm">&copy; {new Date().getFullYear()} Tutoring Experts. All rights reserved.</p>
    </footer>
  );
}

export default Footer;