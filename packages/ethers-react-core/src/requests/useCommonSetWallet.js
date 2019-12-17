/**
 * @function useCommonSetWallet
 * @description Watch Browser window object for Etheruem selected address.
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useEffect } from 'react';
import { ethers } from 'ethers';
import WalletConnect from '@walletconnect/browser';

import { SET_ADDRESS, SET_WALLET_SUCCESS } from '../types';

/* --- Component --- */
export const useCommonSetWallet = (state, dispatch) => {
  useEffect(() => {
    if (state.provider) {
      const runEffect = async () => {
        try {
          let address, provider, wallet;
          switch (state.provider.source) {
            case 'metamask':
              provider = await new ethers.providers.Web3Provider(
                state.provider.instance
              );
              wallet = provider.getSigner();
              address = wallet.selectedAddress;
              break;

            case 'walletconnect':
              wallet = new WalletConnect({
                bridge: 'https://bridge.walletconnect.org'
              });
              address = wallet.accounts[0];

              break;

            default:
              break;
          }

          dispatch({
            type: SET_WALLET_SUCCESS,
            payload: {
              source: state.provider.source,
              wallet
            }
          });
          dispatch({
            type: SET_ADDRESS,
            payload: address
          });
        } catch (error) {
          dispatch({
            type: 'SET_WALLET_FAILURE',
            payload: error
          });
        }
      };
      runEffect();
    }
  }, [state.provider]);
};
