import "./Client.css";
export default function Client() {
  return (
    <div className="Clients">
      <div className="client">
        <h3 className="heading3">What our clients say</h3>
        <p className="para3">
          See what our customer say about us. It really matters for us. How good
          or bad we will make it for avaluation to make EhyalLive better.
        </p>
      </div>
      <div className="reviews">
        <div>
          <img src="src/Images/Group 25.png"></img>
        </div>
        <div>
          <img src="src/Images/Group 27.png"></img>
          <img className="review" src="src/Images/Visuals.png"></img>
        </div>
        <div>
          <img src="src/Images/Group 26.png"></img>
        </div>
      </div>
    </div>
  );
}
