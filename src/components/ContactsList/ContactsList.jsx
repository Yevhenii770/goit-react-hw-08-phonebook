import { UlOfContact, ContactItem, Button } from './ContactsList.styled';
import { selectAllContacts } from 'redux/contacts/contacts-selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/contacts-operations';
import { TextDiv, Number, Name } from './ContactsList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const arrayContacts = useSelector(selectAllContacts);

  const filterValue = useSelector(state => state.filter.filterValue);

  const filterNormilized = filterValue.toLowerCase().trim();
  const visibleContacts = arrayContacts.filter(contact =>
    contact.name?.toLowerCase().includes(filterNormilized)
  );

  return (
    <UlOfContact>
      {visibleContacts.map(({ id, number, name }) => (
        <ContactItem key={id}>
          <TextDiv>
            <Name>{name}</Name>
            <Number>{number}</Number>
          </TextDiv>

          <Button onClick={() => dispatch(deleteContacts(id))} type="button">
            Delete
          </Button>
        </ContactItem>
      ))}
    </UlOfContact>
  );
};

export default ContactList;
