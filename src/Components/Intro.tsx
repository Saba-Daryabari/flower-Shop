import IntroImage from "../assets/intro.jpg";
import { FaHeart } from "react-icons/fa";
import "../styles/intro.scss";
import "../styles/globals.scss";

export default function Intro() {
  return (
    <section className="backgroundGrey">
      <div className="container">
        <div className="introContainer">
          <div className="introImageContainer">
            <img src={IntroImage} alt="intro image" className="introImage" />
          </div>
          <div className="introCaption">
            <h3 className="introHeading">
              Surprise Your <span className="textRed">Valentine!</span>
              <br /> Let us arrange a smile.
            </h3>
            <p className="introDetails">
              Where flowers are our inspiration to create lasting memories.{" "}
              <br />
              Whatever the occasion...
            </p>
            <ul className="introList">
              <li className="introListItem">
                <span className="textRed">
                  <FaHeart />
                </span>{" "}
                Hand picked just for you.
              </li>
              <li className="introListItem">
                <span className="textRed">
                  <FaHeart />
                </span>{" "}
                Unique flower arrangements
              </li>
              <li className="introListItem">
                <span className="textRed">
                  <FaHeart />
                </span>{" "}
                Best way to say you care.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
