import React from "react";
import { useHistory } from "react-router";

const Watch = (props) => {
  const history = useHistory();
  const { name, description, img, price, _id } = props.watch;
  return (
    <div className="col-4 px-5">
      <img src={img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{description.slice(0, 250)}</p>
      </div>
      <div class="card-footer">
        <button
          onClick={() => {
            history.push(`/placeOrder/${_id}`);
          }}
          class="btn btn-outline-success text-black"
        >
          Purchase
        </button>
      </div>
    </div>
  );
};

export default Watch;
