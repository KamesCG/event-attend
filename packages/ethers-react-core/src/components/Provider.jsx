/**
 * @summary A React Context Provider that provides a simple interface to most ethers.js functionality.
 * It allows for easy contract management and querying/transactions of the smart contracts.
 * @param {Array<React.Component>} children
 * @param {Array} contracts
 * @param {String} provider
 * @todo Add hooks to query smart contracts
 * @todo Add better error handling
 * @todo Find better way to automatically set the address and wallet
 */

/* --- Global --- */
import React, { useContext, useReducer } from 'react';
import Context from '../Context';
import reducers from '../reducer';
import { enhanceActions } from '../middleware/actions';
import { initialize } from '../middleware/initialize';
import * as RequestEffects from '../requests';
import { useProviderSelect } from '../effects';
/* --- Developer Messages --- */
console.warn(
  'EthersProvider is not ready for production. Use at your discretion'
);

/* --- Component --- */
const Provider = ({
  children,
  contracts = [],
  provider = 'metamask',
  web3Connect
}) => {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(
    reducers,
    initialState,
    initialize(contracts, provider)
  );
  console.log(state, 'Ethers Provider');
  /* --- Enhance Actions --- */
  const actions = enhanceActions(state, dispatch);

  /* --- Request Effects --- */
  Object.values(RequestEffects).map(effect => effect(state, dispatch));

  useProviderSelect(state, dispatch, web3Connect);
  return (
    <Context.Provider
      value={{
        ...state,
        ...actions
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
