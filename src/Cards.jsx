import "./Cards.css";
export default function Cards() {
  return (
    <div className="Card-Det">
      <div className="cards">
        <img className="img1" src="src/Images/Card1.png"></img>
        <img className="img2" src="src/Images/card2.png"></img>
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
      <img className="temp" src="src/Images/34.png"></img>
    </div>
  );
}
