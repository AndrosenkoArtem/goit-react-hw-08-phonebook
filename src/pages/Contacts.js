import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Helmet } from 'react-helmet';

export default function Contacts() {
  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <section>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </section>
    </>
  );
}
