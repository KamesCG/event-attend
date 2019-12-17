import {ethers, utils} from 'ethers';
import Deployer from 'contracts/Deployer';
/* --- Component --- */
const Component = props => {
  const deployContract = async () => {
    // The Contract interface
    let abi = Deployer.abi;
    let provider = await ethers.getDefaultProvider('goerli');
    provider = await new ethers.providers.Web3Provider(
      window.web3.currentProvider,
    );
    const wallet = provider.getSigner();
    let contractAddress = '0x3a457f52d1ABa421fE240A0990f68506f29D53Ba';
    let contract = await new ethers.Contract(contractAddress, abi, wallet);

    const amount = utils.hexlify(utils.parseEther('1.0'));
    const d = utils.hexlify(10);
    const s = utils.hexlify(utils.bigNumberify(60 * 60 * 24 * 7));

    const tx = await contract.deploy(
      'EventTest',
      amount,
      d,
      s,
      '0x0000000000000000000000000000000000000000',
    );
  };

  return <Atom.Button onClick={deployContract}>Deploy Contract</Atom.Button>;
};
export default Component;
