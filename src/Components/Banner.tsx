import banner from "../assets/banner.jpg";
import "../styles/header.scss";
export default function Banner() {
  return (
    <div className="bannerContainer">
      <img src={banner} alt="banner image" className="bannerImage"></img>
    </div>
  );
}
