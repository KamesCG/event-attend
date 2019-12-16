/* --- Component --- */
const RegionAside = ({sx, ...props}) => {
  return (
    <Atom.Flex column sx={sx}>
      <Atom.Flex center column sx={{bg: 'blue', color: 'white', p: 3}}>
        <Atom.Box>
          <Molecule.Link to="/">
            <Atom.Heading lg heavy sx={{mb: 0}}>
              EventHub
            </Atom.Heading>
          </Molecule.Link>
        </Atom.Box>
      </Atom.Flex>
      <Molecule.Menu
        items={menu}
        direction="column"
        sxMenu={{
          p: 2,
        }}
        sx={{
          fontSize: 2,
          my: 1,
          flexDirection: 'column',
        }}
      />
    </Atom.Flex>
  );
};

const menu = [
  {
    label: 'Events',
    to: '/dashboard',
  },
  {
    label: 'Checkin',
    to: '/dashboard/checkin',
  },
  {
    label: 'Manage',
    to: '/dashboard/manage',
  },
];

export default RegionAside;
