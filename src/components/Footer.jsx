import React from "react";
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
          src="https://avatars.githubusercontent.com/u/79637254?v=4"
          alt="Founder"
        />

        <h2>Subrat Kumar Nayak</h2>
        <p>Motivation is temporary, but discipline lasts forever</p>
      </div>

      <aside>
        <h2>Social Media</h2>
        <article>
          <a href="www.youtube.com/@Sibu-kw1oq" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a
            href="https://www.instagram.com/subrat_titanbeast01/"
            target={"blank"}
          >
            <AiFillInstagram />
          </a>
          <a href="https://github.com/subratkumarnayak02" target={"blank"}>
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
