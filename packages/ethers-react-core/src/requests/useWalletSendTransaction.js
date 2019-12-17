/**
 * @function useWalletSignTransaction
 * @description Watch Browser window object for Etheruem selected address.
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useEffect } from 'react';

/* --- Local --- */
import {
  WALLET_SEND_TRANSACTION_SUCCESS,
  WALLET_SEND_TRANSACTION_FAILURE
} from '../types';

/* --- Component --- */
export const useWalletSendTransaction = (state, dispatch) => {
  useEffect(() => {
    if (state.store.transactions.length > 0) {
      const runEffect = async () => {
        let signature;
        const transaction = state.store.transactions[0];

        try {
          switch (state.provider.source) {
            case 'walletconnect':
              signature = await state.wallet.sendTransaction({
                from: state.address,
                ...transaction.payload
              });
              break;
            default:
              signature = await state.wallet.sendTransaction(
                transaction.payload
              );
              break;
          }

          dispatch({
            type: WALLET_SEND_TRANSACTION_SUCCESS,
            payload: signature
          });
        } catch (error) {
          console.log(error, '');
          dispatch({
            type: WALLET_SEND_TRANSACTION_FAILURE,
            payload: error
          });
        }
      };
      runEffect();
    }
  }, [state.store.transactions]);
};
