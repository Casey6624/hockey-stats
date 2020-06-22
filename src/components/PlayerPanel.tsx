import React from "react";

interface Props {
  rosterPlayers?: any;
}

const PlayerPanel: React.FC<Props> = ({ rosterPlayers }) => {
  console.log(rosterPlayers.roster);
  if (!rosterPlayers) {
    return <div>Loading...</div>;
  }
  return <div>players</div>;
};

export default PlayerPanel;
