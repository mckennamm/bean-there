import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Header from "../components/Header";

import "./Home.css"; // Assuming you have some styles for the home page

const Home = () => {
  const coffeeShops = [
    { id: 1, name: "Cozy Brew", rating: 5 },
    { id: 2, name: "Morning Grind", rating: 4 },
  ];

  return (
    <div className="home-container">
        <Header />
      <Hero />
      <ul>
        {coffeeShops.map(shop => (
          <li key={shop.id}>
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
