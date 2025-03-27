import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Header from "../components/Header";

import "./Home.css"; // Assuming you have some styles for the home page

const Home = () => {
  const coffeeShops = [
    { id: 1, name: "The Optimist", rating: 5 },
    { id: 2, name: "Lucky Tree", rating: 4 },
  ];

  return (
    <div className="home-container">
        <Header />
    <div className="hero-container">
      <Hero />
    </div>

      <ul>
        {coffeeShops.map(shop => (
          <li className="shop" key={shop.id}>
            <Link to={`/review/${shop.id}`}>
              {shop.name} - {shop.rating}⭐
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
