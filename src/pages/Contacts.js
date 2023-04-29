import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import ContactsContainer from '../components/ContactsContainer/ContactsContainer';

export default function Contacts() {
  return (
    <section>
      <h1>Phonebook</h1>
      <ContactForm />
      <ContactsContainer>
        <h2
          style={{
            textAlign: 'center',
            paddingBottom: '30px',
          }}
        >
          Contacts
        </h2>
        <Filter />
        <ContactList />
      </ContactsContainer>
    </section>
  );
}
