import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddReview from "./components/AddReview";
import ReviewDetails from "./components/ReviewDetails";
import About from "./pages/About";

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/add-review" element={<AddReview />} />
      <Route path="/review/:id" element={<ReviewDetails />} />
    </Routes>
  </div>
);

export default App;
