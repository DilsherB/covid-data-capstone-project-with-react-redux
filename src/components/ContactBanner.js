import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaStackOverflow,
} from "react-icons/fa";
import Photo from "../assets/My Profile Photo.jpeg";

const ContactBanner = () => {
  return (
    <div className="bg-slate-300 rounded-lg p-3 flex gap-6 mb-5">
      <img alt="Developer" src={Photo} className="rounded-full w-28 h-28" />
      <div>
        <h1 className="text-2xl font-bold">Dilsher Balouch</h1>
        <p className="text-lg font-semibold text-slate-600">
          Full-Stack Developer
        </p>
        <p className="text-lg font-semibold text-slate-600 flex justify-between">
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
    </div>
  );
};

export default ContactBanner;
