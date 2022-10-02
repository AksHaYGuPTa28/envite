import React from "react";
import Button from "../../components/atoms/Button";
import HomeImg from "../../assets/svg/HomeImg.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="mobile-button">
        <Button className="en-btn">🎉 Create my event</Button>
      </div>
      <div className="home-left">
        <div>
          <img src={HomeImg} alt="Event Image" />
        </div>
      </div>
      <div className="home-right">
        <div>
          <h1>
            Imagine if <br />
            <span>Snapchat</span> <br /> had events.
          </h1>
          <p>
            Easily host and share events with your friends across any social
            media
          </p>
          <Button
            onClick={() => navigate("/create")}
            className="en-btn desktop-button"
          >
            🎉 Create my event
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
