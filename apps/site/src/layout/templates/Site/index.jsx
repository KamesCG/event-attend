import {RegionTop, RegionFooter} from 'regions';

const SiteTemplate = ({sx, sxMain, styled, children, ...props}) => {
  return (
    <Atom.Flex column sx={{}}>
      <RegionTop />
      <Atom.Box sx={{width: '100%'}}>{children}</Atom.Box>
      <RegionFooter />
    </Atom.Flex>
  );
};

export default SiteTemplate;
