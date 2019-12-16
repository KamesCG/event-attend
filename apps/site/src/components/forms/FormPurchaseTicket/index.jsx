/**
 * @name FormPurchaseTicket
 * @version 0.0.1
 */

/* --- Global --- */
import {useState} from 'react';
import useForm from 'react-hook-form';

/* --- Component --- */
const FormPurchaseTicket = props => {
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
        <Molecule.Field
          name="price"
          variants={['text']}
          disabled={isComplete}
          register={register}
          errors={errors}
          label="Ticket Bidding"
          placeholder="Set Maximum Bid (e.x. 25)"
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
              <Atom.Span>Purchasing...</Atom.Span>
            ) : (
              <Atom.Span>Purchase Ticket</Atom.Span>
            )}
          </Atom.Button>
        </Atom.Box>
      </Atom.Flex>
    </form>
  );
};

export default FormPurchaseTicket;
