/**
 * @name FormCreateEvent
 * @version 0.0.1
 */

/* --- Global --- */
import {useState} from 'react';
import useForm from 'react-hook-form';

/* --- Component --- */
const FormCreateEvent = props => {
  /* --- Form Hook State --- */
  const {handleSubmit, register, errors} = useForm();

  /* --- Component State --- */
  const [isComplete, setComplete] = useState();

  /* --- Submit Handler --- */
  const onSubmit = values => {
    if (values) {
      setComplete(true);
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
