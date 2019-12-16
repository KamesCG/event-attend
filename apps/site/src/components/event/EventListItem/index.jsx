import {ModalCheckin} from 'components';

const EventListItem = props => {
  return (
    <Atom.Flex center between sx={styles.EventListItem}>
      <Atom.Box>
        <Atom.Heading lg m0>
          {props.title}
        </Atom.Heading>
        <Atom.Heading md as="h5" m0 sx={{fontWeight: 300}}>
          {props.subtitle}
        </Atom.Heading>
      </Atom.Box>
      <Atom.Flex column>
        <Atom.Span>
          <strong>Date:</strong> {props.date}
        </Atom.Span>
        <Atom.Span>
          <strong>Price:</strong> {props.price} {props.token}
        </Atom.Span>
      </Atom.Flex>
      <Atom.Flex between sx={{mt: 3}}>
        <ModalCheckin />
        <Molecule.Link to={`/event/${props.alias}`}>
          <Atom.Button green sx={{ml: 3}}>
            View Event
          </Atom.Button>
        </Molecule.Link>
      </Atom.Flex>
    </Atom.Flex>
  );
};

const styles = {
  EventListItem: {
    boxShadow: 1,
    my: 1,
    p: 3,
  },
};

export default EventListItem;
