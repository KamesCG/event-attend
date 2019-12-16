/* --- Global --- */
import {Router} from '@reach/router';

/* --- Local --- */
import {Dashboard} from 'templates';
import {Contracts, Users, EventManageList} from 'pages';

const DashboardPage = props => (
  <Dashboard>
    <Router width="100%" primary={false}>
      <EventManageList path="/" />
      <Contracts path="/contracts" />
      <Users path="/users" />
    </Router>
  </Dashboard>
);

export default DashboardPage;
