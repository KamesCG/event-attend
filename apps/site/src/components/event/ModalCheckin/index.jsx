/* --- Local --- */
import {FormPurchaseTicket} from 'forms';

/* --- Component --- */
const ModalPurchaseTicket = props => {
  return (
    <Organisms.Modal content={<PurchaseTicket />}>
      <Atom.Button>Checkin</Atom.Button>
    </Organisms.Modal>
  );
};

const PurchaseTicket = props => {
  return (
    <Atom.Box card sx={modal}>
      <Atom.Heading xxl>Event Checkin</Atom.Heading>
    </Atom.Box>
  );
};

const modal = {
  bg: 'white',
  boxShadow: 1,
  p: 4,
  px: 5,
  maxWidth: 500,
};

export default ModalPurchaseTicket;
