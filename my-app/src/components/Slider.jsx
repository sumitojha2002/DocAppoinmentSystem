import React from "react";
import "../styles/Slider.css";

export default function Slider() {
  return (
    <div
      id="carouselExampleControlsNoTouching"
      class="carousel slide"
      data-bs-touch="false"
    >
      <div class="carousel-inner">
        <div class="carousel-item c-item">
          <img src="./img/slider1.png" class="d-block w-100 c-img" alt="..." />
        </div>
        <div class="carousel-item c-item">
          <img src="./img/slider2.png" class="d-block w-100 c-img" alt="..." />
        </div>
        <div class="carousel-item c-item active">
          <img src="./img/slider3.png" class="d-block w-100 c-img" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}
