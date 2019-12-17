/**
 * @name RegionTop
 * @version 0.0.1
 */
/* --- Global --- */
import {ColorMode} from 'common';
import {Authenticate} from '3box-ui-system';
import {web3Connect} from '@ethers-react/web3connect';

/* --- Component --- */
export default props => (
  <Atom.Flex alignCenter between sx={{variant: 'regions.header'}}>
    {/* Left */}
    <Atom.Flex alignCenter>
      <Atom.Flex>
        <Atom.Heading sx={{mr: 3, mb: 0}}>{GLOBAL.siteName}</Atom.Heading>
      </Atom.Flex>

      {/* Menu */}
      <Atom.Flex alignCenter ml={4}>
        <Molecule.Menu
          sx={{
            m: 2,
            mx: 1,
          }}
          items={[
            {
              label: 'Events',
              to: '/events',
            },
            {
              label: 'Create Event',
              to: '/create/event',
            },
            {
              label: 'Dashboard',
              to: '/dashboard',
            },
          ]}
        />
      </Atom.Flex>
    </Atom.Flex>

    {/* Right */}
    <Atom.Flex alignCenter>
      <Atom.Box sx={{mx: 3}}>
        <ColorMode />
      </Atom.Box>
      <Authenticate display="avatar" />
      <Atom.Button onClick={() => web3Connect.toggleModal()}>
        Select Wallet
      </Atom.Button>
    </Atom.Flex>
  </Atom.Flex>
);
