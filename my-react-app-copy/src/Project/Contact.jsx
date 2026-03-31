import { useState } from "react";
import axios from "axios";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:3000/enquery",
        form
      );

      alert("Enquiry Submitted Successfully!");

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.log(error);
      alert("Error submitting enquiry");
    }
  };

  return (
    <>
      <hr className="my-4" />

      <h3 className="text-center mb-3">Contact Us</h3>

      <div className="text-center mb-4">
        <p><strong>Email:</strong> kuttytoys@gmail.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Address:</strong> Chennai, Tamil Nadu, India</p>
      </div>

      <div className="container">
        <h4 className="text-center mb-3">Send Enquiry</h4>

        <form
          onSubmit={handleSubmit}
          className="card p-4 shadow"
          style={{ maxWidth: "500px", margin: "auto" }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="form-control mb-3"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="form-control mb-3"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            className="form-control mb-3"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button className="btn btn-primary w-100">
            Submit Enquiry
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
