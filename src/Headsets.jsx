import "./Headsets.css";
import image9 from "./Images/Head1.png";
import image10 from "./Images/Head2.png";
import image11 from "./Images/Head3.png";
import image12 from "./Images/Head4.png";
export default function Headset() {
  return (
    <div className="headsets">
      <h2 className="heading2">Mixed Reality Headsets</h2>
      <div className="row row-cols-3">
        <img src={image9}></img>

        <img src={image10}></img>

        <img src={image11}></img>

        <img src={image12}></img>
      </div>
    </div>
  );
}
