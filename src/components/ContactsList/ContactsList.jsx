import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactsList.module.css'

export function ContactsList({ contacts, deleteContact }) {
    return (
        <>
      <ul className={css.contacts}>
          {contacts.map(contact => {
              return (<li className={css.contactItem} key={contact.id}>
                  <span className={css.contactName}>{contact.name}:</span>
                  <span className={css.contactNumber}>{contact.number}</span>
                  <button className={css.buttonDelete} onClick={() => {deleteContact(contact.id)}}>Delete</button>
              </li>
              )
          })}
            </ul>
            </>
  )
}

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    })),
    deleteContact: PropTypes.func
}