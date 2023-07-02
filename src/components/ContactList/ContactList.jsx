import { Ul, Button, Li } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filter/selectors';
import {
  useDeleteContactsMutation,
  useGetContactsQuery,
} from 'redux/contacts/operations';
import { Spinner } from 'components/Spinner/Spinner';

export const ContactList = () => {
  const { data: contacts, error, isFetching } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactsMutation();
  const filter = useSelector(getFilter);

  const filteredContacts = filter => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      {isFetching && <Spinner />}
      {error && <p>{error.data}</p>}
      {contacts && (
        <Ul>
          {filteredContacts(filter).map(({ id, name, number }) => (
            <Li key={id}>
              <div>
                {name}: {number}
              </div>
              <Button onClick={() => deleteContact(id)} type="button">
                Delete
              </Button>
            </Li>
          ))}
        </Ul>
      )}
    </>
  );
};
