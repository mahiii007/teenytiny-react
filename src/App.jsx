import "./App.css";
import Carousel from "./components/carousel/Carousel";
import InfiniteScroll from "./components/infinite-scroll/InfiniteScroll";
import { Progressbar } from "./components/progress-bar/Progressbar";
import { CountdownTimer } from "./components/countdown-timer/CountdownTimer";
import Counter from "./components/counter/Counter";
import { StarRating } from "./components/star-rating/StarRating";

function App() {
  return (
    <>
      <h3>Building tiny practice projects in react</h3>
      <div className="main-container">
        <div className="carousel-div">
          <h4>Carousel</h4>
          <Carousel />
        </div>

        <div className="infiniteScroll-div">
          <h4>InfiniteScroll</h4>
          <InfiniteScroll />
        </div>

        <div className="progrssbar-div">
          <h4>Progressbar</h4>
          <Progressbar />
        </div>

        <div className="countdowntimer-div">
          <h4>CountdownTimer</h4>
          <CountdownTimer></CountdownTimer>
        </div>

        <div className="counter-div">
          <h4>Counter</h4>
          <Counter></Counter>
        </div>

        <div className="starrating-div">
          <h4>Star Rating</h4>
          <StarRating />
        </div>
      </div>
    </>
  );
}
console.log(" ----------------------------------");
console.log("<h4>Counter</h4>:", <h4>Counter</h4>);
console.log(" ----------------------------------");

export default App;
