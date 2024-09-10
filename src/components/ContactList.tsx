import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { deleteContact } from '../redux/contactSlice';
import ContactCard from './ContactCard';

interface Props {
  onEdit: (contact: any) => void; // New prop for handling edit contact
}

const ContactList: React.FC<Props> = ({ onEdit }) => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch();

  return (
    <div>
      {contacts.length === 0 ? (
        <p>No Contacts Found. Please add one.</p>
      ) : (
        contacts.map(contact => (
          <ContactCard
            key={contact.id}
            contact={contact}
            onDelete={() => dispatch(deleteContact(contact.id))}
            onEdit={() => onEdit(contact)} // Trigger the onEdit function
          />
        ))
      )}
    </div>
  );
};

export default ContactList;
