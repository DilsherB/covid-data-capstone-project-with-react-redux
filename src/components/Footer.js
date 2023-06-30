import React from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaStackOverflow,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row gap-5 md:justify-between mx-5 h-max bg-slate-200 px-5 py-2 rounded-b mb-3">
      <div className="decoration-indigo-600">
        Built by:{" "}
        <a href="https://github.com/DilsherB?tab=repositories">
          Dilsher Balouch(Full-Stack Developer)
        </a>
      </div>
      <div className="flex justify-center">
        <p className="text-lg font-semibold text-slate-600 flex gap-5">
          <a
            href="https://www.linkedin.com/in/dilsherbalouch/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/dilsherb/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://github.com/DilsherB"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://stackoverflow.com/users/17731460/dilsher-balouch"
            target="_blank"
            rel="noreferrer"
          >
            <FaStackOverflow />
          </a>
        </p>
      </div>
      <div className="text-muted">Data Source: Covid-19 API</div>
    </footer>
  );
};

export default Footer;
