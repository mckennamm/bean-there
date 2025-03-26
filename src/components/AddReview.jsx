import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddReview = () => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ideally, save this to your state or a backend here
    console.log("New Coffee Shop:", { name, rating });
    navigate("/");
  };

  return (
    <div>
      <h2>Add a New Review</h2>
      <form onSubmit={handleSubmit}>
        <label>Coffee Shop Name:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} required />
        <label>Rating:</label>
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <button type="submit">Add Review</button>
      </form>
    </div>
  );
};

export default AddReview;
