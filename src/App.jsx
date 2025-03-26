import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddReview from "./components/AddReview";
import ReviewDetails from "./components/ReviewDetails";

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-review" element={<AddReview />} />
      <Route path="/review/:id" element={<ReviewDetails />} />
    </Routes>
  </div>
);

export default App;
