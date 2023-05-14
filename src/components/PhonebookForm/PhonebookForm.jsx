import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './PhonebookForm.module.css'


export function PhonebookForm({addContact}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    const isContactExists = addContact({ id: nanoid(6), name, number });
    if (!isContactExists) {
      setName('');
      setNumber('');
    }
  };
   
    const handleChange = evt => {
      const { name, value } = evt.target;
      switch (name) {
        case 'name':
          setName(value);
          break;
       
        case 'number':
          setNumber(value);
          break;

        default:
          return
      }
    };
  
    return (
      <form className={css.formContact} onSubmit={handleSubmit}>
        <label className={css.labelContact}>
          Name
          <input
            className={css.inputContact}
            onChange={handleChange}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.labelContact}>
          Phone
          <input
            className={css.inputContact}
            onChange={handleChange}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.button}>Add contact</button>
      </form>
    )
  }

PhonebookForm.propTypes = {
    addContact: PropTypes.func.isRequired
  }