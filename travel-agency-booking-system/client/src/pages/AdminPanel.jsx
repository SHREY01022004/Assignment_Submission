import React, { useEffect, useState } from 'react';
import { getPackages } from '../services/api';

const HomePage = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    getPackages().then((res) => setPackages(res.data));
  }, []);

  return (
    <div>
      <h1>Tour Packages</h1>
      <ul>
        {packages.map((pkg) => (
          <li key={pkg._id}>
            <h2>{pkg.title}</h2>
            <p>{pkg.description}</p>
            <p>Price: ${pkg.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
