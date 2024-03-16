// Footer.jsx
import React from 'react';
import { footerLinks, socialMedia } from '../constants/index';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul>
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.link} className="text-gray-400 hover:text-white transition-colors duration-300">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          {socialMedia.map((social, index) => (
            <img key={index} src={social.src} alt={social.alt} className="w-8 h-8 mx-2" />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
