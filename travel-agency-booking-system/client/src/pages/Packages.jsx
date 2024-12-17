import React, { useEffect, useState } from "react";
import PackageCard from "../components/PackageCard";
import axios from "../services/api";

const Packages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    axios.get("/packages").then((res) => setPackages(res.data));
  }, []);

  return (
    <div>
      <h1>Tour Packages</h1>
      {packages.map((pkg) => (
        <PackageCard key={pkg._id} pkg={pkg} />
      ))}
    </div>
  );
};

export default Packages;
