import connectorsByName, {
  getLibrary,
  connectorLocalStorageKey,
} from "./connectors";
import { getContract } from "./utils";
import {
  signMessage,
  signTypedMessage,
  registerToken,
  setupNetwork,
} from "./wallet-actions";
import { supportedChains, rpcUrlByChains, ChainIds } from "./configs/networks";
import walletConfigs from "./configs/wallets";

const web3 = {
  connectors: {
    connectorsByName,
    getLibrary,
    connectorLocalStorageKey,
  },
  utils: {
    getContract,
  },
  walletActions: {
    setupNetwork,
    signMessage,
    signTypedMessage,
    registerToken,
  },
  configs: {
    supportedChains,
    rpcUrlByChains,
    ChainIds,
    wallets: walletConfigs,
  },
};

export default web3;
