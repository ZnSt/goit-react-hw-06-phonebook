import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addContact } from 'redux/actions';
import { FormContainer, FormSt, Input, Btn } from './Form.styled';

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const handleSubmit = event => {
    event.preventDefault();
    if (name === '' || number === '') {
      return toast.warning('Please, enter all fields');
    }
    dispatch(addContact(name, number));

    const existingContact = contacts.some(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );

    if (existingContact) {
      return toast.error(`${name} or ${number} already exists in contacts!`);
    }

    reset();
  };

  const handleChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;

      case 'number':
        setNumber(event.target.value);
        break;

      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <FormContainer>
      <FormSt onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="name..."
          onChange={handleChange}
          value={name}
        />
        <Input
          type="number"
          name="number"
          placeholder="number..."
          onChange={handleChange}
          value={number}
        />
        <Btn type="submit">Add Contact</Btn>
      </FormSt>
    </FormContainer>
  );
};
