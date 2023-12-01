import React from "react";
 import footerpic from '../assets/changedphoto (1).jpg'
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={footerpic}
          alt="Founder"
        />

        <h2>Saif Alam</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.youtube.com/channel/UCNiSx0Kvjbh_eiwtVtZwMfA" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://www.instagram.com/saifalam4126/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/saifalam094" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;