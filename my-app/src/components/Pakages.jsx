import React from "react";

export default function Pakages(props) {
  return (
    <div>
      <div className="card">
        <img className="product--image" src={props.url} alt="" />
        <br />
        <h2>{props.name}</h2>
        <p>{props.price}</p>
        <p>{props.description}</p>
        <p>
          <button>Take</button>
        </p>
      </div>
    </div>
  );
}
