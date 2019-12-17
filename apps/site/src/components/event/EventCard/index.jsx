import {WalletPurchaseTicket} from 'components';

const EventCard = props => {
  return (
    <Atom.Flex column sx={styles.eventCard}>
      <Atom.Box sx={{height: 200}}>
        <Atom.BackgroundImage src={props.image} sx={{}} />
      </Atom.Box>
      <Atom.Box>
        <Atom.Heading xxl>{props.title}</Atom.Heading>
        <Atom.Heading sm>{props.subtitle}</Atom.Heading>
        <Atom.Paragraph>{props.content}</Atom.Paragraph>
        <Atom.Flex between sx={{mt: 3}}>
          {/* <Atom.Button>Purchase Ticket</Atom.Button> */}
          <WalletPurchaseTicket />
          <Molecule.Link to={`/event/${props.alias}`}>
            <Atom.Button green>View Event</Atom.Button>
          </Molecule.Link>
        </Atom.Flex>
      </Atom.Box>
    </Atom.Flex>
  );
};

const styles = {
  eventCard: {
    boxShadow: 1,
    m: 3,
    p: 3,
    width: [1, 1, '50%', '33.333%'],
  },
};

export default EventCard;
