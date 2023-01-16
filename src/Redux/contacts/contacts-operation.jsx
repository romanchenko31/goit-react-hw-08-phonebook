import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const addContacts = createAsyncThunk(
  'contacts/addcontacts',
  async credentials => {
    try {
      const { data } = await axios.post('/contacts', credentials);
      return data;
    } catch (error) {}
  }
);

const getContacts = createAsyncThunk(
  'contacts/getcontacts',
  async credentials => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {}
  }
);

const removeContacts = createAsyncThunk('contacts/removecontacts', async id => {
  try {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
  } catch (error) {}
});

const contactsOperation = {
  addContacts,
  getContacts,
  removeContacts,
};

export default contactsOperation;
