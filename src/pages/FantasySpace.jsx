import React from "react";
import FantasyComponent from "../components/FantasySpaceComponent";
import FantasyFeatures from "../components/FantasyFeatures";
import FantasyMap from "../components/FantasyMap";
import FantasyTeam from "../components/FantasyTeam";


const FantasySpace = () => {
  return (
    <>
      <FantasyComponent></FantasyComponent>
      <FantasyFeatures></FantasyFeatures>
      <FantasyMap></FantasyMap>
      <FantasyTeam></FantasyTeam>
    </>
  );
};

export default FantasySpace;