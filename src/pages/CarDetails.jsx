import { useParams, useNavigate } from "react-router-dom";
import { useCars } from "../context/CarContext";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";

function CarDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { favorites, toggleFavorite } = useCars();

  const { data, loading, error } = useFetch(
    "https://dummyjson.com/products/" + id
  );

  if (loading) return <Loading />;

  if (error) {
    return <div className="error">{error}</div>;
  }

  const car = {
    id: data.id,
    name: data.title,
    brand: data.brand || "Premium",
    price: Math.round(data.price / 10),
    fuel: "Petrol",
    image: data.thumbnail,
    description: data.description
  };

  const isFavorite = favorites.some((item) => item.id === car.id);

  return (
    <section className="container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="details">
        <img src={car.image} alt={car.name} />

        <div>
          <p>{car.brand}</p>

          <h1>{car.name}</h1>

          <h2>₹{car.price} Lakhs</h2>

          <p>{car.description}</p>

          <p>
            <strong>Fuel:</strong> {car.fuel}
          </p>

          <button
            className="btn"
            onClick={() => toggleFavorite(car)}
          >
            {isFavorite ? "❤️ Remove Favorite" : "♡ Add Favorite"}
          </button>

          <button
            className="btn secondary"
            onClick={() => navigate("/contact")}
          >
            Book Test Drive
          </button>
        </div>
      </div>
    </section>
  );
}

export default CarDetails;