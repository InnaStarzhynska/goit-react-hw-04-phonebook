import  { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import css from './App.module.css';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export function App() {
  const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem('savedContacts')) ?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('savedContacts'));
    if (savedContacts) {
      setContacts([...savedContacts]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('savedContacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (contact) => {
    if (contacts.some(item => item.name === contact.name)
    ) {
      Notiflix.Notify.failure(`${contact.name} is already in contacts`);
      return true
    }
    setContacts((prevState) => {
      return [...prevState, contact]
      
    })
    return false
  }

  const handleDeleteContact = (id) => {
    setContacts(prevState => {
      return  prevState.filter(contact => contact.id !== id)
    })
  }

  const handleChangeFilter = (evt) => {
    setFilter(evt.target.value)
  }

  const handleFilterContacts = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase().trim()))
  }
  
  return (
    <div>
        <h1 className={css.titleForm}>Phonebook</h1>
        <PhonebookForm addContact={handleAddContact} />
        <h2 className={css.titleContacts}>Contacts</h2>
        <Filter value={filter} handleChange={handleChangeFilter}/>
        <ContactsList contacts={handleFilterContacts()} deleteContact={handleDeleteContact} />
      </div>
  )
}