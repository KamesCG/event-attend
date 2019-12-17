/**
 * @function useProviderSelect
 * @description Handle the Ethereum wallet enable request.
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useState } from 'react';

import { SET_PROVIDER } from '../types';

/* --- Hook --- */
export const useProviderSelect = (state, dispatch, web3Connect) => {
  const [provider, setProvider] = useState();
  const [source, setSource] = useState();

  web3Connect.on('connect', provider => {
    let source;
    if (provider.isMetaMask) source = 'metamask';
    if (provider.isWalletConnect) source = 'walletconnect';
    dispatch({
      type: SET_PROVIDER,
      payload: {
        source: source,
        instance: provider
      }
    });
  });

  web3Connect.on('close', () => {
    console.log('Web3Connect Modal Closed'); // modal has closed
  });

  return provider;
};
