import { Link } from "react-router-dom";


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
          <button className="btn-home">
            <Link className="link-home" to={"/categories/tracksuits"}>LET'S GO</Link>

          </button>
        </div>
        <div className="video">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/PZIqV7wNyyU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen=""
          ></iframe>
        </div>
      </div>
    </div>
  );
}
