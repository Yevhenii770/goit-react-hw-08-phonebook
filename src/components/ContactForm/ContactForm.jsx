import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { Form, ButtonBox, Label } from './ContactForm.styled';
import { PushNotify, PushNotifyError } from '../Notify/Notify';
import { selectAllContacts } from 'redux/contacts/contacts-selectors';
import { addContacts } from 'redux/contacts/contacts-operations';
import { TextField } from '@mui/material';
import { ButtonComponent } from 'components/ButtonComponent/ButtonComponent';

function ContactForm() {
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const contacts = useSelector(selectAllContacts);
  const dispatch = useDispatch();

  const formSubmitHandler = e => {
    e.preventDefault();

    const newContact = {
      name: e.currentTarget.elements.name.value,
      number: e.currentTarget.elements.number.value,
    };

    const checkName = contacts.some(elContact =>
      elContact.name?.toLowerCase().includes(newContact.name.toLowerCase())
    );

    if (!checkName) {
      dispatch(addContacts(newContact));
      PushNotify(newContact.name);
    } else {
      PushNotifyError(newContact.name);
    }
    e.target.reset();
  };

  return (
    <Form onSubmit={formSubmitHandler}>
      <Label htmlFor={nameInputId}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>

      <Label htmlFor={numberInputId}>
        <TextField
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>

      <ButtonComponent type="submit" title="Add contacts" />
    </Form>
  );
}

export default ContactForm;
