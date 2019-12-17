/**
 * @function useWalletSignTransaction
 * @description Watch Browser window object for Etheruem selected address.
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useEffect } from 'react';
import { ethers, utils } from 'ethers';

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
        console.log(transaction, 'transactiontransactiontransaction');
        try {
          switch (state.provider.source) {
            case 'walletconnect':
              console.log(
                utils.hexlify(10000000),
                'utils.hexlify(10000000)utils.hexlify(10000000)'
              );
              signature = await state.wallet.sendTransaction({
                to: transaction.payload.to,
                from: state.address,
                data: '0x', // Required
                // gasPrice: utils.hexlify(7600000), // Optional
                // gasLimit: utils.hexlify(7600000), // Optional
                value: '0x00' // Optional
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
