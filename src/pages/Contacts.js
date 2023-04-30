import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { selectLoading } from 'redux/contacts/contacts-selectors';
import ContactList from 'components/ContactsList/ContactsList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';

export default function ContactsView() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      <section>
        <h1>Phonebook</h1>
        <ContactForm />
        <div>{isLoading && 'Request in progress...'}</div>
        <Filter />
        <h2>Contacts</h2>
        <ContactList />
      </section>
    </main>
  );
}
