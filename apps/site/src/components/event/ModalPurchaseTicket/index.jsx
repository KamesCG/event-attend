/* --- Local --- */
import {FormPurchaseTicket} from 'forms';

/* --- Component --- */
const ModalPurchaseTicket = props => {
  return (
    <Organisms.Modal content={<PurchaseTicket />}>
      <Atom.Button>Purchase Ticket</Atom.Button>
    </Organisms.Modal>
  );
};

const PurchaseTicket = props => {
  return (
    <Atom.Box card sx={modal}>
      <Atom.Heading xxl>Purchase Ticket</Atom.Heading>
      <Atom.Heading md sx={{fontWeight: 300}}>
        Reserve your spot today.
        <Atom.Span sx={{fontWeight: 700}}>Start the bidding!</Atom.Span>
      </Atom.Heading>
      <FormPurchaseTicket />
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
