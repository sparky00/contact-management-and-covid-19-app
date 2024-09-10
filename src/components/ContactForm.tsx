import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, editContact } from '../redux/contactSlice';

interface Props {
  contactToEdit?: any; // Optional prop for the contact being edited
  onSave: () => void;
}

const ContactForm: React.FC<Props> = ({ contactToEdit, onSave }) => {
  const dispatch = useDispatch();

  // Set initial form state based on whether we're editing or adding a contact
  const [firstName, setFirstName] = useState(contactToEdit?.firstName || '');
  const [lastName, setLastName] = useState(contactToEdit?.lastName || '');
  const [status, setStatus] = useState(contactToEdit?.status || 'inactive');

  // If the `contactToEdit` changes (e.g. switching from add mode to edit mode), update form fields
  useEffect(() => {
    if (contactToEdit) {
      setFirstName(contactToEdit.firstName);
      setLastName(contactToEdit.lastName);
      setStatus(contactToEdit.status);
    }
  }, [contactToEdit]);

  const handleSubmit = () => {
    if (contactToEdit) {
      // Dispatch the editContact action if we're editing an existing contact
      dispatch(editContact({ id: contactToEdit.id, firstName, lastName, status }));
    } else {
      // Dispatch the addContact action if we're adding a new contact
      dispatch(addContact({ id: String(Date.now()), firstName, lastName, status }));
    }
    onSave(); // Close the form after saving
  };

  return (
    <div className="p-4 bg-gray-100">
      <div className="mb-4">
        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="border p-2"
        />
      </div>
      <div className="mb-4">
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="border p-2"
        />
      </div>
      <div className="mb-4">
        <label>Status:</label>
        <div>
          <input
            type="radio"
            value="active"
            checked={status === 'active'}
            onChange={() => setStatus('active')}
          /> Active
          <input
            type="radio"
            value="inactive"
            checked={status === 'inactive'}
            onChange={() => setStatus('inactive')}
          /> Inactive
        </div>
      </div>
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2">
        {contactToEdit ? 'Edit Contact' : 'Add Contact'}
      </button>
    </div>
  );
};

export default ContactForm;
