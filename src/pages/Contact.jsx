import { useId, useRef, useState } from "react";

function Contact() {
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const carId = useId();

  const nameRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    car: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });

    setSuccess(false);
  }

  function validate() {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid 10 digit phone number";
    }

    if (!form.car) {
      newErrors.car = "Please select a car";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validate();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      nameRef.current?.focus();
      return;
    }

    setSuccess(true);

    setForm({
      name: "",
      email: "",
      phone: "",
      car: ""
    });

    setErrors({});
  }

  return (
    <section className="container form-section">
      <div className="page-heading">
        <h1>Book a Test Drive</h1>
        <p>Fill in the form and our team will contact you.</p>
      </div>

      {success && (
        <div className="success">
          ✅ Test drive request submitted successfully!
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <label htmlFor={nameId}>Full Name</label>

        <input
          id={nameId}
          ref={nameRef}
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        {errors.name && (
          <small className="field-error">{errors.name}</small>
        )}

        <label htmlFor={emailId}>Email</label>

        <input
          id={emailId}
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        {errors.email && (
          <small className="field-error">{errors.email}</small>
        )}

        <label htmlFor={phoneId}>Phone Number</label>

        <input
          id={phoneId}
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="10 digit phone number"
        />

        {errors.phone && (
          <small className="field-error">{errors.phone}</small>
        )}

        <label htmlFor={carId}>Select Car</label>

        <select
          id={carId}
          name="car"
          value={form.car}
          onChange={handleChange}
        >
          <option value="">Select a car</option>
          <option value="BMW">BMW</option>
          <option value="Mercedes">Mercedes</option>
          <option value="Audi">Audi</option>
          <option value="Toyota">Toyota</option>
        </select>

        {errors.car && (
          <small className="field-error">{errors.car}</small>
        )}

        <button className="btn" type="submit">
          Submit Request
        </button>
      </form>
    </section>
  );
}

export default Contact;