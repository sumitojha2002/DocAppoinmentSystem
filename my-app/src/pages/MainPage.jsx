import React from "react";
import Slider from "../components/Slider";
import CardPackage from "../components/CardPackage";

export default function MainPage() {
  return (
    <div>
      <Slider />
      <br />
      <br />
      <div className="text-center fs-2">Health Packages</div>
      <br />
      <div>
        <CardPackage />
      </div>
      <br />
    </div>
  );
}
