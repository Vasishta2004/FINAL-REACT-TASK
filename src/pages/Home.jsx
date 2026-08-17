import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <section className="hero">
        <div>
          <p className="small-title">WELCOME TO AUTOHUB</p>

          <h1>Find Your Dream Car</h1>

          <p>
            Explore premium cars, compare features and book your test drive
            today.
          </p>

          <Link className="btn" to="/cars">
            Explore Cars
          </Link>
        </div>
      </section>

      <section className="container">
        <h2>Why Choose AutoHub?</h2>

        <div className="features">
          <div>
            <h3>🚗 Quality Cars</h3>
            <p>Wide range of quality vehicles.</p>
          </div>

          <div>
            <h3>💰 Best Prices</h3>
            <p>Competitive prices for every budget.</p>
          </div>

          <div>
            <h3>🔧 Great Service</h3>
            <p>Professional maintenance and support.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;