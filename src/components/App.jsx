import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Contacts from './Contacts/Contacts';

import { showModal } from '.././redux/userSlice';

export default function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <Contacts>
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
      </Contacts>
    </div>
  );
}
