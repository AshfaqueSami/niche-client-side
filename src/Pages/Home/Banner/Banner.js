import React from "react";

const Banner = () => {
  return (
    <section class="position-relative overflow-hidden my-5">
      <div class="d-flex flex-wrap">
        <div class="col-12 col-lg-6 d-flex align-items-center">
          <div class="container mb-20 mb-lg-0">
            <div class="pt-20 mw-md mx-auto">
              <span class="mb-4 h5">All Your Favourite Watches</span>
              <h2 class="mt-6 mb-16 mb-lg-32">
                Featured styles. Check it now.
              </h2>
              <a class="btn btn-success" href="/">
                Explore
              </a>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <img
            width="550px"
            class="img-fluid rounded-3"
            style={{ height: "400px", objectFit: "cover" }}
            src="https://media.istockphoto.com/photos/military-style-watch-picture-id650233226?b=1&k=20&m=650233226&s=170667a&w=0&h=ULJQeLclxrD1-6DChtg-OCnXU6reWzJwxmUWRrdSS-8="
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
