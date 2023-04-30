import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { selectLoading } from 'redux/contacts/contacts-selectors';
import {
  MainText,
  SecondaryText,
} from '../components/ContactsList/ContactsList.styled';
import ContactList from 'components/ContactsList/ContactsList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      <section>
        <div>
          <MainText>Phonebook</MainText>
          <ContactForm />
          <div>{isLoading && 'Request in progress...'}</div>
          <Filter />
          <div>
            <SecondaryText>Contacts</SecondaryText>
            <ContactList />
          </div>
        </div>
      </section>
    </main>
  );
}
