import "./MainContent.css";

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
            <img className="img" src="src/Images/123.png"></img>
            <div className="people">
              <img src="src/Images/Group 1.png"></img>&nbsp;&nbsp;&nbsp;&nbsp;
              <div className="detail">
                <img src="src/Images/Ellipse5.png"></img>&nbsp;&nbsp;
                <p className="para2">400k people online</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
