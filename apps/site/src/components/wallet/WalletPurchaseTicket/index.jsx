import {useState, useEffect} from 'react';
import {withEthers} from '@ethers-react/core';

import AbstractConference from 'contracts/AbstractConference';
/* --- Component --- */
const WalletPurchaseTicket = props => {
  const ethers = withEthers();
  const [inited, setInited] = useState();
  const [registerEncode, setRegisterEncode] = useState();

  useEffect(() => {
    if (!inited) {
      const loadContract = async () => {
        let provider = await ethers.instance.getDefaultProvider('goerli');
        // let wallet = provider.getSigner();
        let abi = AbstractConference.abi;
        let contract = await new ethers.instance.Contract(
          props.contract,
          abi,
          provider,
        );
        const registerEncode = await contract.interface.functions.register.encode(
          [],
          {},
        );
        setRegisterEncode(registerEncode);
      };

      loadContract();

      setInited(true);
    }
  }, [inited]);

  const tx = {
    to: props.contract,
    // data: registerEncode,
    // gasPrice: 10000000,
    // gasLimit: 10000000,
  };
  return (
    <Atom.Button onClick={() => ethers.walletSendTransactionRequest(tx)}>
      Purchase Ticket (WC)
    </Atom.Button>
  );
};

export default WalletPurchaseTicket;
