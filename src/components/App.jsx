import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form } from './Form';
import { ContactsList } from './ContactsList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <div style={{ padding: '30px' }}>
      <ToastContainer />
      <Form />
      <h1>My List</h1>
      <Filter />
      <ContactsList />
    </div>
  );
};
