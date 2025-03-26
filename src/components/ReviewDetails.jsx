import { useParams } from "react-router-dom";

const ReviewDetails = () => {
  const { id } = useParams();
  // Use the id to fetch the details for that specific coffee shop
  return (
    <div>
      <h2>Review Details for Coffee Shop #{id}</h2>
      {/* You can display more details here, like description, images, etc. */}
    </div>
  );
};

export default ReviewDetails;
