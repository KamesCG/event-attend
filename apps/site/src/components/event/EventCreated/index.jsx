import {useState, useEffect} from 'react';
import {ethers, utils} from 'ethers';
import AbstractConference from 'contracts/AbstractConference';
import {WalletPurchaseTicket} from 'components';

const EventCreated = props => {
  const [inited, setInited] = useState();
  const [name, setName] = useState();
  const [coolingPeriod, setCoolingPeriod] = useState();
  const [limitOfParticipants, setLimitOfParticipants] = useState();
  const [totalAttended, setTotalAttended] = useState();
  const [deposit, setDeposit] = useState();

  const [contract, setContract] = useState();

  useEffect(() => {
    if (!inited) {
      const loadContract = async () => {
        // let provider = await ethers.getDefaultProvider('goerli');
        let provider = await new ethers.providers.Web3Provider(
          window.web3.currentProvider,
        );
        let wallet = provider.getSigner();
        let abi = AbstractConference.abi;
        let contract = await new ethers.Contract(props.contract, abi, wallet);
        setContract(contract);
        console.log(contract, 'eventCont');

        const name = await contract.name();
        const coolingPeriod = await contract.coolingPeriod();
        const admins = await contract.getAdmins();
        const limitOfParticipants = await contract.limitOfParticipants();
        const totalAttended = await contract.totalAttended();
        const deposit = await contract.deposit();

        setName(name);
        setCoolingPeriod(coolingPeriod);
        setLimitOfParticipants(limitOfParticipants.toNumber());
        setTotalAttended(totalAttended);
        setDeposit(utils.formatEther(deposit.toString()));

        console.log(name, 'namename');
        console.log(coolingPeriod.toNumber(), 'cooling');
        console.log(admins, 'admins');
        console.log(limitOfParticipants.toNumber(), 'limitOfParticipants');
        console.log(utils.formatEther(deposit.toString()), 'deposit');
        console.log(deposit, 'deposit');
        console.log(totalAttended.toNumber(), 'total');
      };

      loadContract();

      setInited(true);
    }
  }, [inited]);

  return (
    <Atom.Flex card column>
      <Atom.Heading>
        name:<Atom.Span sx={{fontWeight: 300}}>{name}</Atom.Span>
      </Atom.Heading>
      <Atom.Heading>
        Deposit: <Atom.Span sx={{fontWeight: 300}}>{deposit} Ξ (ETH)</Atom.Span>
      </Atom.Heading>
      <Atom.Heading>
        Limit of Participants:{' '}
        <Atom.Span sx={{fontWeight: 300}}>{limitOfParticipants}</Atom.Span>
      </Atom.Heading>
      <Atom.Heading>creator: {props.creator}</Atom.Heading>
      <Atom.Heading>contract: {props.contract}</Atom.Heading>
      <WalletPurchaseTicket contract={props.contract} />
      {/* <Atom.Button
        onClick={() =>
          contract.register({
            value: '0x00',
            gasLimit: 8000000,
            gasPrice: 8000000,
          })
        }
        sx={{mt: 3}}>
        Purchase Ticket
      </Atom.Button> */}
    </Atom.Flex>
  );
};

export default EventCreated;
