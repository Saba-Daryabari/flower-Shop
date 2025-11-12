import "../styles/introduction.scss";
import expert1 from "../assets/expert1.jpg";
import expert2 from "../assets/expert2.jpg";
import expert3 from "../assets/expert3.jpg";
import expert4 from "../assets/expert4.jpg";
export default function Introduction() {
  return (
    <section className="container">
      <div className="textCenter">
        <h3 className="introHeading">Flower Experts</h3>
        <p className="introDetails">
          A perfect blend of creativity, energy, communication, happiness and
          love. Let us arrange a smile for you.
        </p>
      </div>
      <div className="expertsContainer">
        <div className="expert">
          <div className="expertImageContainer">
            <img src={expert1} alt="expert image" className="expertImage" />
          </div>
          <div className="titleName">Crystal Brooks</div>
          <div className="titleInfo">Florist</div>
        </div>
        <div className="expert">
          <div className="expertImageContainer">
            {" "}
            <img src={expert2} alt="expert image" className="expertImage" />
          </div>
          <div className="titleName">Shirley Harris</div>
          <div className="titleInfo">Manager</div>
        </div>
        <div className="expert">
          <div className="expertImageContainer">
            {" "}
            <img src={expert3} alt="expert image" className="expertImage" />
          </div>
          <div className="titleName">Beverly Clark</div>
          <div className="titleInfo">Florist</div>
        </div>
        <div className="expert">
          <div className="expertImageContainer">
            {" "}
            <img src={expert4} alt="expert image" className="expertImage" />
          </div>
          <div className="titleName">Amanda Watkins</div>
          <div className="titleInfo">Florist</div>
        </div>
      </div>
    </section>
  );
}
