import events from 'data/events';
import {EventListItem} from 'components';

/* --- Components --- */
const HomePage = props => (
  <Atom.Box sx={{width: '100%'}}>
    <Showcase />
    <FeaturedEvents />
  </Atom.Box>
);

const Showcase = props => (
  <Atom.Flex
    center
    column
    sx={{
      color: 'white',
      py: 4,
    }}>
    <Atom.BackgroundGradient gradient="blue" />
    <Atom.BackgroundImage
      src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      ratio={0.0001}
      sx={{opacity: 0.2}}
    />
    <Atom.Heading giga>Manage Events</Atom.Heading>
  </Atom.Flex>
);

const FeaturedEvents = props => (
  <Atom.Container sx={{py: 4}}>
    <Atom.Flex column sx={{flex: 1, width: '100%'}}>
      {events.map(evt => (
        <EventListItem {...evt} />
      ))}
    </Atom.Flex>
  </Atom.Container>
);

const styles = {
  eventCard: {
    boxShadow: 1,
    m: 3,
    p: 3,
    width: [1, 1, '50%', '33.333%'],
  },
};

export default HomePage;
