import "./Values.css";
import image18 from "./Images/emojione_victory-hand.png";
import image19 from "./Images/Vector.png";
import image20 from "./Images/Group 40.png";
import image21 from "./Images/twemoji_light-bulb.png";
export default function () {
  return (
    <div className="value">
      <div className="values">
        <h3 className="heading4">Our company values culture</h3>
        <p className="para4">
          We specialize in creating visual identities for products and branda in
          your company.
        </p>
        <div className="stamps">
          <div>
            <img src={image18}></img>
            <p class="para5">Be Sincere</p>
          </div>
          <div>
            <img src={image19}></img>
            <p class="para5">Stronger together</p>
          </div>
          <div>
            <img src={image20}></img>
            <p class="para5">Keep it simple</p>
          </div>
          <div>
            <img src={image21}></img>
            <p class="para5">Take intelligent risks</p>
          </div>
        </div>
      </div>
    </div>
  );
}
