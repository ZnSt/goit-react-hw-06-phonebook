import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, setFilter } from './actions';

const initState = {
  contacts: [],
  filter: '',
};

export const contactsReducer = createReducer(initState, {
  [addContact]: (state, action) => {
    return {
      ...state,
      contacts: [...state.contacts, action.payload],
    };
  },

  [deleteContact]: (state, action) => {
    return {
      ...state,
      contacts: state.contacts.filter(contact => contact.id !== action.payload),
    };
  },

  [setFilter]: (state, action) => {
    return {
      ...state,
      filter: action.payload,
    };
  },
});
