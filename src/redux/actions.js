import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContact = createAction(
  'contacts/AddContact',
  (name, number) => {
    return {
      payload: {
        id: nanoid(),
        name,
        number,
      },
    };
  }
);

export const deleteContact = createAction('contacts/DeleteContact');
export const setFilter = createAction('contacts/setFilter');
