/* --- Local --- */
import {FormCreateEvent} from 'forms';

/* --- Component --- */
const CreateEventPage = props => (
  <Atom.Box sx={{width: '100%'}}>
    <Showcase />
    <CreateEvent />
  </Atom.Box>
);

const Showcase = props => (
  <Atom.Flex
    center
    column
    sx={{
      color: 'white',
      py: 5,
    }}>
    <Atom.BackgroundGradient gradient="blue" />
    <Atom.BackgroundImage
      src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      ratio={0.0001}
      sx={{opacity: 0.2}}
    />
    <Atom.Heading giga>Create Event</Atom.Heading>
  </Atom.Flex>
);

const CreateEvent = props => (
  <Atom.Container sx={{maxWidth: [1, 1, 780, 780], py: 4}}>
    <FormCreateEvent />
  </Atom.Container>
);

export default CreateEventPage;
