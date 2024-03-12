import { nanoid } from 'nanoid';
import { StyledList } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { Btn } from 'components/Button';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <StyledList>
      {filteredContacts.map(contact => {
        return (
          <li key={nanoid()}>
            {contact.name}: {contact.number}{' '}
            <Btn
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </Btn>
          </li>
        );
      })}
    </StyledList>
  );
};
