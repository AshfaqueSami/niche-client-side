import React, { useEffect, useState } from "react";
import Watch from "../Home/Watch/Watch";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const Watches = () => {
  const [watches, setWatches] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/watches")
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);
  return (
    <div>
      <Header />
      <section className="d-flex justify-content-center my-16">
        <h2 className="text-secondary my-5">
          Our <span className="text-success">Watches</span> for you
        </h2>
      </section>
      <section className="d-flex justify-content-center card-group">
        <div className="row">
          {watches.map((watch) => (
            <Watch key={watch._id} watch={watch}></Watch>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Watches;
