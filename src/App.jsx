
import StarRev from "./components/Star";
import searchIcon from "./assets/Frame.png";
import Ratebar from "./components/Ratebar";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="card">
      <div className="info_flex">
        <h1>What others think about the product</h1>
        <Ratebar />
      </div>
      <SearchBar />
      <div className="reviews">
        <p>
          <strong>Reviews</strong>
        </p>
        <div className="rev_holder">
          <StarRev reviews="106" prog="30" numOfStars="2" />
          <StarRev reviews="32" prog="70" numOfStars="3" />
          <StarRev reviews="0" prog="40" numOfStars="2" />
          <StarRev reviews="0" prog="10" numOfStars="1" />
          <StarRev reviews="0" prog="90" numOfStars="4" />
        </div>
        <button className="write_rev">Write a review</button>
      </div>
    </div>
  );
}

export default App;
