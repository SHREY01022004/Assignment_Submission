import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [packages, setPackages] = useState([]); // State to store all packages
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
  }); // State for the form input

  // Fetch tour packages from the backend
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/packages");
        setPackages(response.data);
      } catch (error) {
        console.error("Error fetching packages:", error.message);
      }
    };

    fetchPackages();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission to add a new package
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5001/api/packages", formData);
      setPackages([...packages, response.data]); // Update packages list with the new package
      setFormData({ title: "", description: "", price: "" }); // Clear the form
    } catch (error) {
      console.error("Error adding package:", error.message);
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>Tour Packages</h1>

      {/* Display Tour Packages */}
      <div>
        {packages.map((pkg, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
            }}
          >
            <h2>{pkg.title}</h2>
            <p>{pkg.description}</p>
            <p><strong>Price: ${pkg.price}</strong></p>
          </div>
        ))}
      </div>

      {/* Form to Add New Tour Package */}
      <div style={{ marginTop: "20px" }}>
        <h2>Add New Tour Package</h2>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "400px",
            margin: "0 auto",
          }}
        >
          <label style={{ marginBottom: "5px" }}>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter title"
            required
            style={{ padding: "5px", marginBottom: "10px" }}
          />

          <label style={{ marginBottom: "5px" }}>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter description"
            required
            style={{ padding: "5px", marginBottom: "10px", resize: "none" }}
          ></textarea>

          <label style={{ marginBottom: "5px" }}>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter price"
            required
            style={{ padding: "5px", marginBottom: "10px" }}
          />

          <button
            type="submit"
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "10px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Add Package
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
