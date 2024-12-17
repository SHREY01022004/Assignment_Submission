import React from "react";
import { Link } from "react-router-dom";

const PackageCard = ({ pkg }) => (
  <div>
    <img src={pkg.image} alt={pkg.title} />
    <h3>{pkg.title}</h3>
    <p>{pkg.description}</p>
    <p>${pkg.price}</p>
    <Link to={`/book/${pkg._id}`}>Book Now</Link>
  </div>
);

export default PackageCard;
