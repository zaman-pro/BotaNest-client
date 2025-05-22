import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="text-center py-10 px-4 text-accent space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-secondary flex justify-center items-center gap-1 italic">
          BotaNest
        </h1>
        <p className="mt-1 text-sm text-accent">Smart Care for Every Leaf</p>
      </div>

      <div className="flex justify-center gap-6 text-secondary text-xl">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition"
        >
          <FaFacebook />
        </a>
      </div>

      <div className="text-xs text-accent">
        © {new Date().getFullYear()} zaman-pro. All rights reserved.
      </div>

      <div className="flex flex-wrap justify-center gap-4 text-xs text-accent">
        <a href="#" className="hover:text-primary">
          Terms of Service
        </a>

        <a href="#" className="hover:text-primary">
          Privacy Policy
        </a>

        <a href="/privacy" className="hover:text-primary">
          Developer Resources
        </a>
      </div>
    </footer>
  );
};

export default Footer;
