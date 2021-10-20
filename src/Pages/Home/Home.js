import React from "react";
import Banner from "../Banner/Banner";
import AllLink from "../AllLink/AllLink";
import Services from "../Services/Services";
import Statistics from "../Statistics/Statistics";
import Choose from "../Choose/Choose";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Choose></Choose>
      <Statistics></Statistics>
      <AllLink></AllLink>
    </div>
  );
};

export default Home;
