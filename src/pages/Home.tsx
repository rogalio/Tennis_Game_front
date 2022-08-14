import React from "react";
import Header from "../components/Header";
import ListOfPlayers from "../components/ListOfPlayers";
import ListOfPoints from "../components/listOfPoints";
import Result from "../components/Result";

const Home = () => {
  return (
    <div className=" bg-[#1e2e74] h-screen">
      <Header />
      <ListOfPlayers />
      <ListOfPoints />
      <Result />
    </div>
  );
};

export default Home;
