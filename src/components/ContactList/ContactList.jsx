import { Ul, Button, Li } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/selectors';
import { Spinner } from 'components/Spinner/Spinner';
import { useEffect } from 'react';
import { deleteContact, getContacts } from 'redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const filteredContacts = filter => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      {error && <p>{error.message}</p>}
      {isLoading && <Spinner />}
      {typeof contacts.length && !isLoading && (
        <Ul>
          {filteredContacts(filter).map(({ id, name, number }) => (
            <Li key={id}>
              <div>
                {name}: {number}
              </div>
              <Button onClick={() => dispatch(deleteContact(id))} type="button">
                Delete
              </Button>
            </Li>
          ))}
        </Ul>
      )}
    </>
  );
};
