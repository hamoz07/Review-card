import star from "../assets/Star 4.png";

const Ratebar = () => {
  return (
    <div className="rateBar">
      <div className="points">
        <img src={star} alt="" />
        <span className="ratePoints">3.8</span>
      </div>
      <p>
        Average customer <br /> rating
      </p>
    </div>
  );
};

export default Ratebar;
