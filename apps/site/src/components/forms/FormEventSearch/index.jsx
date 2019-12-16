/**
 * @name FormEventSearch
 * @version 0.0.1
 */

/* --- Global --- */
import React, {useState} from 'react';
import {PropTypes} from 'prop-types';
import useForm from 'react-hook-form';

/* --- Component --- */
const FormEventSearch = ({sx, ...props}) => {
  /* --- Form Hook State --- */
  const {handleSubmit, register, errors} = useForm();

  /* --- Component State --- */
  const [isComplete, setComplete] = useState();

  /* --- Submit Handler --- */
  const onSubmit = values => {
    if (values) {
      setComplete(true); // Validate submission and set complete status to true
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Atom.Flex column sx={{flex: 1}}>
        <Molecule.Field
          name="search"
          variants={['text']}
          type="date"
          disabled={isComplete}
          register={register}
          errors={errors}
          placeholder="Search"
        />

        <Molecule.Field
          name="location"
          variants={['text']}
          disabled={isComplete}
          register={register}
          errors={errors}
          placeholder="Location"
          sx={{
            mt: 3,
          }}
        />

        <Atom.Box sx={{mt: 4}}>
          <Atom.Button bg="blue" color="white" sx={{m: 0}}>
            <Atom.Flex center column>
              {isComplete ? (
                <Atom.Span>Searching...</Atom.Span>
              ) : (
                <Atom.Span>Search</Atom.Span>
              )}
            </Atom.Flex>
          </Atom.Button>
        </Atom.Box>
      </Atom.Flex>
    </form>
  );
};

FormEventSearch.defaultProps = {
  sx: {},
};

FormEventSearch.propTypes = {
  sx: PropTypes.object,
};

export default FormEventSearch;

/* --- Sub-Components --- */
