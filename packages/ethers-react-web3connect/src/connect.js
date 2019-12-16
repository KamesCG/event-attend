import Web3Connect from 'web3connect';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Fortmatic from 'fortmatic';

const web3Connect = new Web3Connect.Core({
  network: 'mainnet', // optional
  providerOptions: {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: '99aa5c18ffcd4d6a83bb9c4d911d9e7d' // required
      }
    },
    fortmatic: {
      package: Fortmatic, // required
      options: {
        key: 'FORTMATIC_KEY' // required
      }
    }
  }
});

// subscribe to connect
web3Connect.on('connect', provider => {
  const web3 = new Web3(provider); // add provider to web3
});

// subscribe to close
web3Connect.on('close', () => {
  console.log('Web3Connect Modal Closed'); // modal has closed
});

export default web3Connect;

// web3Connect.toggleModal(); // open modal on button click
