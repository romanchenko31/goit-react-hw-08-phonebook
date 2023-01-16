import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import contactsOperation from 'Redux/contacts/contacts-operation';
import contactsSelector from 'Redux/contacts/contacts-selector';
import style from './Contacts.module.css';

export const Contacts = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contactsUser = useSelector(contactsSelector.getUserContacts);

  useEffect(() => {
    dispatch(contactsOperation.getContacts());
  }, [dispatch]);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const onSubmitForm = e => {
    e.preventDefault();
    dispatch(contactsOperation.addContacts({ name, number }));
  };

  const deleteContact = id => {
    dispatch(contactsOperation.removeContacts(id));
  };
  return (
    <>
      <form onSubmit={onSubmitForm}>
        <h1>Contacts</h1>
        <label>
          Name
          <input onChange={handleChange} type="text" name="name" />
        </label>
        <label>
          Phone
          <input onChange={handleChange} type="text" name="number" />
        </label>
        <button type="submit">add contact</button>
      </form>
      <div className={style.contact}>
        <h2>Our contacts</h2>
        <ul>
          {contactsUser?.map(value => {
            return (
              <li className={style.li} key={value.id}>
                <span>{value.name} - </span>
                <span>{value.number} </span>
                <button type="button" onClick={() => deleteContact(value.id)}>
                  delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
