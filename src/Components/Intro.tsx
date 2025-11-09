import IntroImage from "../assets/intro.jpg";
import { FaHeart } from "react-icons/fa";
import "../styles/collection.scss";
import { useEffect } from "react";

export default function Intro() {

    useEffect(() => {
        const el = document.querySelector(".introContainer");
        if (!el) return;

        const update = () => {
            const { left } = el.getBoundingClientRect()
            document.documentElement.style.setProperty("--inline-padding", `${left}px`);
        };

        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

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
