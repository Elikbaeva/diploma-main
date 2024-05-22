import { Link } from "react-router-dom";
import VideoPlayer from '../components/VideoPlayer'; 

export default function Home() {
  return (
    <div className="Home">
      <div className="Home-container">
        <div className="home-text">
          <h3>Welcome to the world of home goods</h3>
          <p>
            Create your dream home: At HomeHarmony you will find
            everything you need to create a cozy and stylish environment
            in your home. From kitchen utensils to stylish interior accessories,
            our range will please even the most discerning customers.
          </p>
        </div>
        <VideoPlayer />
      </div>
    </div>
  );
}
