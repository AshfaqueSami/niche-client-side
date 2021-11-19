import React, { useEffect, useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";
import Review from "../Review/Review";
import Stat from "../Stat/Stat";
import Watch from "../Watch/Watch";

const Home = () => {
  const [watches, setWatches] = useState([]);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/watches")
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <Header />
      <Banner></Banner>
      <section className="mb-16">
        <div>
          <h2 className="text-secondary">
            Our <span className="text-success">Watches</span> for you
          </h2>
        </div>
      </section>
      <section className="d-flex justify-content-center my-5">
        <div className="row">
          {watches
            .map((watch) => (
              <Watch key={watch._id} watch={watch}></Watch>
            ))
            .slice(2, 8)}
        </div>
      </section>
      <div>
        <h2 className="text-secondary">
          What Our <span className="text-success">Customer</span> says
        </h2>
      </div>
      <section className="d-flex justify-content-center my-5">
        <div className="my-16 px-32 row">
          {reviews.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </div>
      </section>
      <Stat></Stat>
      <Footer />
    </div>
  );
};

export default Home;
