import {withEthers} from '@ethers-react/core';

/* --- Component --- */
const WalletPurchaseTicket = props => {
  const ethers = withEthers();
  const tx = {
    to: ethers.address,
    data: '0x',
    gasPrice: '0x02540be400',
    gasLimit: '0x9c40',
    value: '0x00',
  };
  return (
    <Atom.Button onClick={() => ethers.walletSendTransactionRequest(tx)}>
      Purchase Ticket (WC)
    </Atom.Button>
  );
};

export default WalletPurchaseTicket;
