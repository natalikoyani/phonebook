import { StyledTitle } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { onFilterChange } from '../../redux/filterSlice';
import { selectContacts } from 'redux/contacts/selectors';
import { Input } from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  if (contacts.length === 0 ?? !contacts) {
    return (
      <>
        <StyledTitle>There are no contacts yet!</StyledTitle>
      </>
    );
  }

  return (
    <div>
      <StyledTitle>Find contacts by name</StyledTitle>
      <Input
        type="string"
        name="filter"
        width="20em"
        onChange={e => dispatch(onFilterChange(e.target.value))}
      />
    </div>
  );
};
