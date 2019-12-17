import Web3Connect from 'web3connect';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Fortmatic from 'fortmatic';

const web3Connect = new Web3Connect.Core({
  network: 'mainnet',
  providerOptions: {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: '99aa5c18ffcd4d6a83bb9c4d911d9e7d'
      }
    },
    fortmatic: {
      package: Fortmatic,
      options: {
        key: 'FORTMATIC_KEY'
      }
    }
  }
});

// subscribe to connect
web3Connect.on('connect', provider => {
  console.log(provider, 'provider');
});

// subscribe to close
web3Connect.on('close', () => {
  console.log('Web3Connect Modal Closed'); // modal has closed
});

export default web3Connect;

// web3Connect.toggleModal(); // open modal on button click
