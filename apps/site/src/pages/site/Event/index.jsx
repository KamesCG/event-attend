/* --- Global --- */
// import {QuestCard} from 'experiments';

/* --- Local --- */
import events from 'data/events';
import {ModalPurchaseTicket} from 'components';
/* --- Component --- */
const ViewAdventure = props => {
  const event = events.filter(adv => adv.alias === props.alias)[0];
  return (
    <>
      <Showase {...event} />
      <Main {...event} />
    </>
  );
};

const Showase = props => (
  <Atom.Box
    sx={{
      bg: 'blue',
      color: 'white',
      py: 4,
      width: '100%',
      zIndex: 100,
    }}>
    <Atom.BackgroundGradient gradient="sunset" sx={{opacity: 0.2}} />
    <Atom.BackgroundImage
      src={props.image}
      ratio={0.0001}
      sx={{opacity: 0.35}}
    />
    <Atom.Container>
      <Atom.Flex between sx={{flex: 1, py: 5}}>
        <Atom.Box>
          <Atom.Heading xxl>{props.title}</Atom.Heading>
          <Atom.Heading lg thin>
            {props.subtitle}
          </Atom.Heading>
          <Atom.Paragraph>{props.summary}</Atom.Paragraph>
        </Atom.Box>
        <ModalPurchaseTicket />
      </Atom.Flex>
    </Atom.Container>
  </Atom.Box>
);

const Main = props => {
  return (
    <Atom.Container sx={{my: 5}}>
      <Atom.Paragraph>{props.content}</Atom.Paragraph>
    </Atom.Container>
  );
};
export default ViewAdventure;
