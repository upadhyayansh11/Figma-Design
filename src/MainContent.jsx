import "./MainContent.css";
import image13 from "./Images/123.png";
import image14 from "./Images/Group 1.png";
import image15 from "./Images/Ellipse5.png";

export default function () {
  return (
    <div className="main">
      <div className="mainHead">
        <h2 className="heading1">Let's Explore Three-Dimensional visual</h2>
        <br></br>
        <br></br>
        <p className="para1">
          With virtual technology you can see the digital world feel more real
          and you can play the game with a new style.
        </p>
        <div className="btns">
          <a className="get-it ">Get it Now</a>&nbsp;&nbsp;&nbsp;
          <a>Explore Device</a>
          <div>
            <img className="img" src={image13}></img>
            <div className="people">
              <img src={image14}></img>&nbsp;&nbsp;&nbsp;&nbsp;
              <div className="detail">
                <img src={image15}></img>&nbsp;&nbsp;
                <p className="para2">400k people online</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
