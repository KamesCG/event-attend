import {FormEventSearch} from 'forms';
import {EventCard} from 'components';
import events from 'data/events';
import {EventDeploy, MeetupEvents} from 'components';

/* --- Components --- */
const HomePage = props => {
  return (
    <Atom.Box sx={{width: '100%'}}>
      <Showcase />
      <EventList />
      {/* <FeaturedEvents /> */}
    </Atom.Box>
  );
};

const Showcase = props => {
  return (
    <>
      <Atom.Flex center column sx={{py: 5, width: '100%'}}>
        <Atom.BackgroundGradient gradient="blue" />
        <Atom.BackgroundImage
          src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          ratio={0.0001}
          sx={{opacity: 0.2}}
        />
        <Atom.Container
          sx={{
            color: 'white',
            maxWidth: ['100%', '100%', 880, 1080],
          }}>
          <Atom.Flex sx={{flex: 1}}>
            <Atom.Flex
              column
              sx={{flex: 4, justifyContent: 'center', height: 400, p: 4}}>
              <Atom.BackgroundImage
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
                ratio={0.0001}
                sx={{
                  borderRadius: 10,
                  opacity: 1.2,
                }}
              />
              <Atom.BackgroundGradient gradient="blue" sx={{opacity: 0.65}} />
              <Atom.Heading giga>Find The Perfect Event</Atom.Heading>
              <Atom.Heading lg>
                Get involved in the Ethereum Community
              </Atom.Heading>
            </Atom.Flex>
            <Atom.Flex center column sx={{flex: 1}}>
              <Atom.Box card sx={{ml: -100, width: 'calc(100% + 100px)'}}>
                <FormEventSearch />
              </Atom.Box>
            </Atom.Flex>
          </Atom.Flex>
        </Atom.Container>
      </Atom.Flex>
    </>
  );
};

const EventList = props => {
  return (
    <Atom.Flex>
      <MeetupEvents />
    </Atom.Flex>
  );
};

const EventDeploying = props => {
  return (
    <Atom.Flex>
      <EventDeploy />
    </Atom.Flex>
  );
};

const FeaturedEvents = props => {
  return (
    <Atom.Container sx={{py: 4}}>
      <Atom.Flex>
        {events.map(evt => (
          <EventCard {...evt} />
        ))}
      </Atom.Flex>
    </Atom.Container>
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

export default HomePage;
