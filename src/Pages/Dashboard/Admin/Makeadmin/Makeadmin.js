import React, { useRef } from "react";

const Makeadmin = () => {
  const emailRef = useRef();
  const handleMakeAdminBtn = (e) => {
    fetch(`https://limitless-gorge-19554.herokuapp.com/allusers?email=${emailRef.current.value}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert(`${emailRef.current.value} is now an admin.`);
          emailRef.current.value = "";
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <div className="d-flex justify-content-center mb-5">
        <div className="mb-5 mt-3 px-2">
          <h2 className="text-primary mb-1">
            Make admin of your website
          </h2>
          <p className="mb-5">
            Enter the email address you want to make admin
          </p>
          <div className="mb-4">
            <label htmlFor="name">
              Email
            </label> <br />
            <input
              ref={emailRef}
              type="text"
              id="name"
              name="name"
              className="w-100 rounded-3 border border-primary py-1 px-3"
            />
          </div>
          <button
            onClick={handleMakeAdminBtn}
            className="btn btn-primary"
          >
            Make Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Makeadmin;
