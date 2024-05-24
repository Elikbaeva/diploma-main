import { Content } from "../components/Content/Content";
import Cards from '../components/Cards/Cards';

export default function Home() {
  return (
    <div className="Home">
      <div className="Home-container">
        <div className="home-text">
          <Content />
          <Cards />
        </div>
      </div>
    </div>
  );
}
