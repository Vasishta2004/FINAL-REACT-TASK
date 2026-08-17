mport { useSearchParams } from "react-router-dom";
import CarCard from "../components/CarCard";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import useFetch from "../hooks/useFetch";

function Cars() {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";
  const brand = searchParams.get("brand") || "All";

  const { data, loading, error } = useFetch(
    "https://dummyjson.com/products/category/laptops"
  );

  const cars = data.products
    ? data.products.map((item) => ({
        id: item.id,
        name: item.title,
        brand: item.brand || "Premium",
        price: Math.round(item.price / 10),
        fuel: "Petrol",
        image: item.thumbnail,
        description: item.description
      }))
    : [];

  const filteredCars = cars.filter((car) => {
    const matchesSearch = car.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesBrand =
      brand === "All" || car.brand === brand;

    return matchesSearch && matchesBrand;
  });

  const brands = ["All", ...new Set(cars.map((car) => car.brand))];

  function handleSearch(event) {
    setSearchParams({
      search: event.target.value,
      brand
    });
  }

  function handleBrand(event) {
    setSearchParams({
      search,
      brand: event.target.value
    });
  }

  if (loading) return <Loading />;

  if (error) return <ErrorMessage message={error} />;

  return (
    <section className="container">
      <div className="page-heading">
        <h1>Explore Cars</h1>
        <p>Find the right car for your journey.</p>
      </div>

      <div className="filters">
        <input
          type="text"
          placeholder="Search cars..."
          value={search}
          onChange={handleSearch}
        />

        <select value={brand} onChange={handleBrand}>
          {brands.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>

      <p>
        Showing <strong>{filteredCars.length}</strong> cars
      </p>

      <div className="car-grid">
        {filteredCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

      {filteredCars.length === 0 && (
        <div className="message">
          No cars found.
        </div>
      )}
    </section>
  );
}

export default Cars;