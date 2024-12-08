import React from "react";
import WalletConnect from "./components/WalletConnect";
import PortfolioDashboard from "./components/PortfolioDashboard";
import TokenSwap from "./components/TokenSwap";
import AiAgent from "./components/AiAgent";

const App = () => {
  return (
    <div>
      <h1>Stellar DeFi Tracker</h1>
      <WalletConnect />
      <PortfolioDashboard />
      <TokenSwap />
      <AiAgent />
    </div>
  );
};

export default App;
