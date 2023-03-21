import { createSlice, nanoid } from '@reduxjs/toolkit';

const NAME = 'contactsList';

const contactsSlice = createSlice({
  name: NAME,
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.contacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },

    deleteContact(state, action) {
      const itemIndex = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(itemIndex, 1);
    },

    setFilter(state, action) {
      return {
        ...state,
        filter: action.payload,
      };
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
