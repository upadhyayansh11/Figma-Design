import "./Client.css";
import image5 from "./Images/Group 25.png";
import image6 from "./Images/Group 27.png";
import image7 from "./Images/Visuals.png";
import image8 from "./Images/Group 26.png";
export default function Client() {
  return (
    <div className="container">
      <div className="Clients">
        <div className="client">
          <h3 className="heading3">What our clients say</h3>
          <p className="para3">
            See what our customer say about us. It really matters for us. How
            good or bad we will make it for avaluation to make EhyalLive better.
          </p>
        </div>
        <div className="reviews">
          <div>
            <img src={image5}></img>
          </div>
          <div>
            <img src={image6}></img>
            <img className="review" src={image7}></img>
          </div>
          <div>
            <img src={image8}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
