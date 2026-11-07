
import { useState } from "react";
import "../styles/contact.css";
import {
  FaEnvelope,
  FaLocationDot,
  FaPhone
} from "react-icons/fa6";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: ""
  });

  const [status, setStatus] = useState({
    type: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Unable to send your message."
        );
      }

      setStatus({
        type: "success",
        message: result.message
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        website: ""
      });

    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message || "Something went wrong. Please try again."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">

        <div className="section-title">
          <h2>Get In Touch</h2>
          <p>
            Have a project in mind or want to collaborate?
            Feel free to reach out.
          </p>
        </div>

        <div className="contact-container">

          <div className="contact-info">

            <div className="contact-card">
              <FaEnvelope className="contact-icon" />
              <div className="data">
                <h3>Email</h3>
                <p>manasiswami27@gmail.com</p>
              </div>
            </div>

            <div className="contact-card">
              <FaPhone className="contact-icon" />
              <div className="data">
                <h3>Phone</h3>
                <p>+91 XXXXX XXXXX</p>
              </div>
            </div>

            <div className="contact-card">
              <FaLocationDot className="contact-icon" />
              <div className="data">
                <h3>Location</h3>
                <p>India</p>
              </div>
            </div>

          </div>

          <form className="contact-form" onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              maxLength={80}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              maxLength={254}
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              maxLength={120}
              required
            />

            <textarea
              name="message"
              rows={3}
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              maxLength={4000}
              required
            />

            {/* Hidden honeypot field for spam protection */}
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              tabIndex="-1"
              autoComplete="off"
              hidden
            />

            {status.message && (
              <p
                role="status"
                className={`contact-status ${status.type}`}
              >
                {status.message}
              </p>
            )}

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
