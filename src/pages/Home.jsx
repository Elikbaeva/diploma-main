import { Link } from "react-router-dom";
import VideoPlayer from '../components/VideoPlayer'; 
import { GradientTitle } from "../components/GradientTitle/GradientTitle";
import { Content } from "../components/Content/Content";

export default function Home() {
  return (
    <div className="Home">
      <div className="Home-container">
        <div className="home-text">
          <Content />
        </div>
      </div>
    </div>
  );
}
