import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://www.overons.kpn/images/news/_1280xAUTO_crop_center-center_none/Amazon-Prime-Video.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            title="PS4 Controller, PS4 Remote, PS4 Joystick, Wireless PS4 Controller Compatible for Playstation 4 (Red)"
            price={39.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61sGVkv5NVL._AC_SX466_.jpg"
            rating={4}
          />
          <Product
            title="The ROG Strix XG49VQ is a super ultra-wide 49” Dual full HD gaming monitor with a smooth 144Hz refresh rate that offers the ultimate immersive gaming"
            price={50.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71PjhKA%2BllL._AC_SX466_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            title="PADY-Wearable Technology Honor Band 4 6-Axis Inertial Heart Rate Monitor. Infrared Light Wear Detection Sensor Full Touch"
            price={25.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51B7xN1C5RL._AC_SX425_.jpg"
            rating={4}
          />
          <Product
            title="Combatwing Gaming Headset- Xbox 360 Headset PS4 Headset PC Headset with Noice Cancelling Mic"
            price={23.5}
            image="https://images-na.ssl-images-amazon.com/images/I/71HFFgckuFL._AC_SL1267_.jpg"
            rating={4}
          />
          <Product
            title="Apple watch series 5(GPS,44MM) - Space Gray Aluminium Case with Black Sport Band"
            price={21.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71mbZF8PT1L._AC_SX569_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            title="Adding to the Amazon Echo Family: Echo Dot and Amazon Tap "
            price={35.99}
            image="https://miro.medium.com/max/1178/1*wG7KYb1fGEyBcWS6ohx-1Q.jpeg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}
//https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_Sy400_.jpg
export default Home;
