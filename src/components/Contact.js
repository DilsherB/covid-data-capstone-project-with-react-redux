import React from "react";
import ContactBanner from "./ContactBanner";

const Contact = () => {
  return (
    <div className="py-3 px-10 text-left">
      <ContactBanner />
      <p>
        I am a full-stack Software Engineer. I have done handfull projects at
        &ldquo;Microverse&ldquo;. It gives me confidence and a lot of
        experience. During this journey at &ldquo;Microverse&ldquo; I have
        learned HTML, CSS, BootStrap, TailwindCSS, JavaScript, React js,
        MongoDB, Ruby and Ruby on Rails.
      </p>
      <br />
      <p>
        Through my day-to-day job, I&apos;ve developed extensive knowledge in
        the following
      </p>
      <br />
      <ul className="space-y-1 list-disc list-inside indent-5">
        <li>
          <span className="font-bold">Front-End: </span>JavaScript, React,
          Redux, Next Js, HTML5, CSS3, SASS, MaterialUI | Bootstrap |
          TailwindCSS
        </li>
        <li>
          <span className="font-bold">Back-End: </span>Node Js, Express, Ruby,
          Rails, MongoDB, MySQL, Postgre
        </li>
        <li>
          <span className="font-bold">Tools: </span>Git, GitHub
        </li>
        <li>
          <span className="font-bold">Prototyping: </span>Figma, Adobe XD,
          Sketch
        </li>
        <li>
          <span className="font-bold">Professional: </span>Remote
          Pair-Programming, collaboration, code review, mentoring, effective
          communication skills across cultures
        </li>
      </ul>
      <br />
      <p>
        My mission is to use my expertise to empower other people&apos;s dreams.
      </p>
      <br />
      <p>Let&apos;s build a better world using code. One keypress at a time!</p>
      <br />
      <p>
        I am currently looking for my next job in Software Development. If
        you&apos;d like to get in contact about potential job opportunities,
        please send me a message or email at dilsherb@gmail.com
      </p>
    </div>
  );
};

export default Contact;
