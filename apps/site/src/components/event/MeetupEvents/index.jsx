/* --- Global --- */
import {useState, useEffect} from 'react';
import {ethers, utils} from 'ethers';

/* --- Local --- */
import Deployer from 'contracts/Deployer';

import {EventCreated} from 'components';

/* --- Component --- */
const MeetupEvents = props => {
  const [inited, setInited] = useState();

  const [contractEvents, setContractEvents] = useState();

  useEffect(() => {
    if (!inited) {
      const lookupEvents = async () => {
        // let abi = Deployer.abi;
        let provider = await ethers.getDefaultProvider('goerli');
        let topic = ethers.utils.id('NewParty(address,address)');
        let filter = {
          address: '0x3a457f52d1aba421fe240a0990f68506f29d53ba',
          fromBlock: 0,
          toBlock: 'latest',
          topics: [topic],
        };
        const logs = await provider.getLogs(filter);
        console.log(logs);

        const eventTransformed = logs.map(log => {
          return {
            contract: utils.hexStripZeros(log.topics[1]),
            creator: utils.hexStripZeros(log.topics[2]),
          };
        });
        console.log(eventTransformed, 'eventTransformed');

        setContractEvents(eventTransformed);
      };

      lookupEvents();

      setInited(true);
    }
  }, [inited]);

  return (
    <Atom.Container>
      <Atom.Flex column>
        {contractEvents && contractEvents.map(evt => <EventCreated {...evt} />)}
      </Atom.Flex>
    </Atom.Container>
  );
};

export default MeetupEvents;
