import "./Cards.css";
import image1 from "./Images/Card1.png";
import image2 from "./Images/card2.png";
import image3 from "./Images/34.png";

export default function Cards() {
  return (
    <div className="Card-Det">
      <div className="cards">
        <img className="img1" src={image1}></img>
        <img className="img2" src={image2}></img>
        <div className="det">
          <h3 className="heading">New Experience In Playing Game</h3>
          <p className="para">
            You can try playing the game with a new style and of course a more
            real feel, like you are the main character in your game and
            adventure in this new digital world.
          </p>
          <a className="get-it" href="#">
            Get it Now
          </a>
        </div>
      </div>
      <img className="temp" src={image3}></img>
    </div>
  );
}
