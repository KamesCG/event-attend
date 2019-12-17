/**
 * @name FormCreateEvent
 * @version 0.0.1
 */

/* --- Global --- */
import {useState} from 'react';
import useForm from 'react-hook-form';
import {ethers, utils} from 'ethers';

/* --- Local --- */
import Deployer from 'contracts/Deployer';

/* --- Component --- */
const FormCreateEvent = props => {
  /* --- Form Hook State --- */
  const {handleSubmit, register, errors} = useForm();

  /* --- Component State --- */
  const [isComplete, setComplete] = useState();

  /* --- Submit Handler --- */
  const onSubmit = async values => {
    if (values) {
      setComplete(true);

      // The Contract interface
      let abi = Deployer.abi;
      let provider = await ethers.getDefaultProvider('goerli');
      provider = await new ethers.providers.Web3Provider(
        window.web3.currentProvider,
      );
      const wallet = provider.getSigner();
      let contractAddress = '0x3a457f52d1ABa421fE240A0990f68506f29D53Ba';
      let contract = await new ethers.Contract(contractAddress, abi, wallet);

      const amount = utils.hexlify(utils.parseEther('1.0'));
      const d = utils.hexlify(10);
      const s = utils.hexlify(utils.bigNumberify(60 * 60 * 24 * 7));

      const tx = await contract.deploy(
        'EventTest',
        amount,
        d,
        s,
        '0x0000000000000000000000000000000000000000',
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Atom.Flex column sx={{flex: 1}}>
        <Atom.Heading sx={{mt: 4}}>Event</Atom.Heading>
        <Molecule.Field
          name="date"
          variants={['text']}
          type="date"
          placeholder="Date"
          disabled={isComplete}
          register={register}
          errors={errors}
        />
        <Molecule.Field
          name="location"
          variants={['text']}
          label="Location"
          placeholder="49 Bogart New York, New York"
          disabled={isComplete}
          register={register}
          errors={errors}
        />
        <Molecule.Field
          name="title"
          variants={['text']}
          label="Title"
          disabled={isComplete}
          register={register}
          errors={errors}
        />
        <Molecule.Field
          name="subtitle"
          variants={['text']}
          label="Tagline"
          disabled={isComplete}
          register={register}
          errors={errors}
        />
        <Molecule.Field
          name="content"
          variants={['text']}
          as="textarea"
          label="Description"
          sx={{
            height: 180,
          }}
          disabled={isComplete}
          register={register}
          errors={errors}
        />

        <Atom.Heading sx={{mt: 4}}>Pricing</Atom.Heading>

        <Molecule.Field
          name="priceMinimum"
          variants={['text']}
          disabled={isComplete}
          register={register}
          errors={errors}
          label="Minimum"
          placeholder="Set Minimum Bid (e.x. 25)"
        />
        <Molecule.Field
          name="token"
          variants={['text']}
          disabled={isComplete}
          register={register}
          errors={errors}
          label="Token"
          placeholder="Select ERC20 Token (e.x. DAI)"
        />

        <Atom.Box sx={{mt: 4}}>
          <Atom.Button bg="blue" color="white" sx={{m: 0}}>
            {isComplete ? (
              <Atom.Span>Creating...</Atom.Span>
            ) : (
              <Atom.Span>Create Event</Atom.Span>
            )}
          </Atom.Button>
        </Atom.Box>
      </Atom.Flex>
    </form>
  );
};

export default FormCreateEvent;
