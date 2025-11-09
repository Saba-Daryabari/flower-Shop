import IntroImage from "../assets/intro.jpg";
import { FaHeart } from "react-icons/fa";

export default function Intro() {
    return (
        <div className="container">
            <div className="introContainer">
                <div className="introImageContainer">
                    <img
                        src={IntroImage}
                        alt="intro image"
                        className="introImage"
                    />
                </div>
                <div className="introCaption">
                    <h3 className="introHeading">
                        Surprise Your <span className="textRed">Valentine!</span> Let us arrange a smile.
                    </h3>
                    <p className="introDetails">
                        Where flowers are our inspiration to create lasting memories. Whatever the occasion...
                    </p>
                    <ul className="introList">
                        <li className="introListItem">
                            <FaHeart /> Hand picked just for you.
                        </li>
                        <li className="introListItem">
                            <FaHeart /> Unique flower arrangements
                        </li>
                        <li className="introListItem">
                            <FaHeart /> Best way to say you care.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
