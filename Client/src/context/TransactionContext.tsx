import { ethers } from "ethers";
import React, { useContext, useEffect } from "react";
import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext({});

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );
  console.log({
    transactionContract,
    provider,
    signer,
  });
};

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = React.useState("");

  const checkIfWalletIsConnected = async () => {
    if (!ethereum) {
      console.log("Make sure you have metamask!");
      return false;
    } else {
      console.log("We have the ethereum object", ethereum);
    }
    try {
    const accounts = await ethereum.request({ method: "eth_accounts" });
      const account = accounts[0];
      setCurrentAccount(account);
      console.log("Found an authorized account:", account);
    } catch (error) {
      console.log("No authorized account found");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      alert("Error connecting to MetaMask");
    }
  };

  return (
    <TransactionContext.Provider value={{connectWallet, currentAccount}}>
      {children}
    </TransactionContext.Provider>
  );
};
