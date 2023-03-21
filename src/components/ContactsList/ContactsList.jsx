import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/actions';
import { Container, Li, Btn } from './ContactsList.styled';

export const ContactsList = () => {
  const { contacts, filter } = useSelector(state => state);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const normilizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
  };

  const filterName = getVisibleContacts();

  return (
    <Container>
      {contacts.length === 0 ? (
        <div>Sorry, there are no contacts yet</div>
      ) : (
        <ul>
          {filterName.map(contact => (
            <Li key={contact.id}>
              <p>Name: {contact.name}</p>
              <p>Number: {contact.number}</p>
              <Btn
                type="button"
                onClick={() => dispatch(deleteContact(contact.id))}
              >
                Delete
              </Btn>
            </Li>
          ))}
        </ul>
      )}
    </Container>
  );
};
