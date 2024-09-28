import "./Product.css";
import image16 from "./Images/Rectangle 60.png";
import image17 from "./Images/Group 22.png";
export default function Product() {
  return (
    <div className="explore">
      <div>
        <h3 className="heading5">Explore product in new way</h3>
        <p className="para6">
          We specialize in creating visual identities for products and branda in
          your company.
        </p>
        <div className="email">
          <img className="mail" src={image16}></img>
          <p className="em"> Your Email</p>
          <button className="start">Start</button>
        </div>
        <img className="hands" src={image17}></img>
      </div>
    </div>
  );
}
