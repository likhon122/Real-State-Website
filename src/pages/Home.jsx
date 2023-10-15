import React from "react";
import Hero from "../components/hero/Hero";
import Features from "../components/features/Features";
import PropertyList from "../components/propertyList/PropertyList";
import Awards from "../components/awards/Awards";
import Location from "../components/location/Location";
import Agent from "../components/agent/Agent";
import Pacage from "../components/PlanPacages/Pacage";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <PropertyList />
      <Awards />
      <Location />
      <Agent />
      <Pacage/>
    </div>
  );
};

export default Home;
