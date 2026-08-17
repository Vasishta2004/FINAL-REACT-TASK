import { Link, Outlet } from "react-router-dom";

function Services() {
  return (
    <section className="container">
      <div className="page-heading">
        <h1>Our Services</h1>
        <p>Everything you need after buying your car.</p>
      </div>

      <div className="service-links">
        <Link to="/services/maintenance">
          Maintenance
        </Link>

        <Link to="/services/insurance">
          Insurance
        </Link>

        <Link to="/services/finance">
          Finance
        </Link>
      </div>

      <div className="service-content">
        <Outlet />
      </div>
    </section>
  );
}

export default Services;