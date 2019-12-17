import { hashCode } from './utilities';
import {
  ENABLE_REQUEST,
  ENABLE_SUCCESS,
  ENABLE_FAILURE,
  INIT_CONTRACT_REQUEST,
  DEPLOY_CONTRACT_REQUEST,
  DEPLOY_CONTRACT_FROM_BYTECODE_REQUEST,
  WALLET_SIGN_TYPED_MESSAGE_REQUEST,
  WALLET_SIGN_MESSAGE_REQUEST,
  WALLET_SEND_TRANSACTION_REQUEST,
  WALLET_SEND_TRANSACTION_SUCCESS,
  WALLET_SEND_TRANSACTION_FAILURE,
  WALLET_SIGN_TRANSACTION_REQUEST,
  WALLET_SIGN_TRANSACTION_SUCCESS,
  WALLET_SIGN_TRANSACTION_FAILURE,
  SET_ADDRESS,
  SET_PROVIDER,
  SET_PROVIDER_STATUS,
  SET_WALLET,
  SET_WALLET_SUCCESS,
  SET_WALLET_FAILURE
} from './types';

const reducerActions = (state, action) => {
  const { input, delta, id, payload, type } = action;
  switch (type) {
    case ENABLE_REQUEST:
      return {
        ...state,
        isEnableRequested: true
      };
    case ENABLE_SUCCESS:
      return {
        ...state,
        isEnableSuccess: true
      };
    case ENABLE_FAILURE:
      return {
        ...state,
        isEnableSuccess: false
      };
    case SET_PROVIDER:
      return {
        ...state,
        provider: {
          source: payload.source,
          instance: payload.instance
        }
      };
    case SET_PROVIDER_STATUS:
      return {
        ...state,
        providerStatus: payload
      };
    case SET_ADDRESS:
      return {
        ...state,
        address: payload
      };
    case SET_WALLET:
      return {
        ...state,
        address: payload.address,
        wallet: payload.wallet
      };
    case SET_WALLET_SUCCESS:
      return {
        ...state,
        address: payload.address,
        wallet: payload.wallet
      };
    case SET_WALLET_FAILURE:
      return {
        ...state,
        address: payload.address,
        wallet: payload.wallet
      };
    case WALLET_SIGN_TRANSACTION_SUCCESS:
      return {
        ...state,
        messages: {
          [id]: payload
        }
      };
    case WALLET_SEND_TRANSACTION_REQUEST:
      return {
        ...state,
        store: {
          ...state.store,
          transactions: [
            ...state.store.transactions,
            {
              ...action
            }
          ]
        }
      };
    case WALLET_SEND_TRANSACTION_SUCCESS:
      return {
        ...state,
        store: {
          ...state.store,
          transactions: []
        }
      };
    case WALLET_SEND_TRANSACTION_FAILURE:
      return {
        ...state,
        store: {
          ...state.store,
          transactions: []
        }
      };
    case WALLET_SIGN_TYPED_MESSAGE_REQUEST:
      return {
        ...state,
        store: {
          ...state.store,
          messages: [
            ...state.store.messages,
            {
              ...action
            }
          ]
        }
      };
    case WALLET_SIGN_MESSAGE_REQUEST:
      return {
        ...state,
        messages: {
          [id]: payload
        }
      };
    /* ----------------------- */
    /* Contract Initialize     */
    /* ----------------------- */

    case INIT_CONTRACT_REQUEST:
      const { address, contract } = payload;
      return {
        ...state,
        store: {
          ...state.store,
          contracts: []
        },
        contracts: {
          ...state.contracts,
          [id]: {
            id,
            address,
            ...contract
          }
        }
      };

    /* ----------------------- */
    /* Contract Deployment     */
    /* ----------------------- */
    case DEPLOY_CONTRACT_REQUEST:
      return {
        ...state,
        contracts: {
          ...state.contracts,
          [id]: payload.contract
        }
      };
    case DEPLOY_CONTRACT_FROM_BYTECODE_REQUEST:
      return {
        ...state,
        store: {
          ...state.store,
          deploy: [
            ...state.store.deploy,
            {
              payload,
              id: delta || hashCode(input)
            }
          ]
        }
      };

    default:
      // return { ...state };
      throw new Error(`No Reducer Type Set: ${action.type}`);
  }
};

export default reducerActions;
