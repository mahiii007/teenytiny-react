import "./App.css";
import Carousel from "./components/carousel/Carousel";
import InfiniteScroll from "./components/infinite-scroll/InfiniteScroll";
import { Progressbar } from "./components/progress-bar/Progressbar";

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
      </div>
    </>
  );
}

export default App;
