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
  WALLET_SIGN_TRANSACTION_SUCCESS,
  WALLET_SIGN_TRANSACTION_FAILURE
} from '../types';

/* --- Component --- */
export const useWalletSignTransaction = (state, dispatch) => {
  useEffect(() => {
    if (state.store.transactions.length > 0) {
      const runEffect = async () => {
        let signature;
        const transaction = state.store.transactions[0];

        try {
          // switch (state.provider.source) {
          //   case 'walletconnect':
          //     signature = await state.wallet.sendTransaction(
          //       transaction.payload
          //     );
          //     break;
          //   case 'metamask':
          //     signature = await state.wallet.sendTransaction(
          //       transaction.payload
          //     );
          //     break;

          //   default:
          //     break;
          // }

          signature = await state.wallet.sendTransaction(transaction.payload);

          dispatch({
            type: WALLET_SIGN_TRANSACTION_SUCCESS,
            payload: signature
          });
          setResponse(true);
        } catch (error) {
          dispatch({
            type: WALLET_SIGN_TRANSACTION_FAILURE,
            payload: error
          });
          setResponse(false);
        }
      };
      runEffect();
    }
  }, [state.store.transactions]);
};
