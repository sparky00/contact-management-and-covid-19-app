import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';

const ContactPage: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [contactToEdit, setContactToEdit] = useState(null); // Track the contact being edited

  const handleSave = () => {
    setShowForm(false);
    setContactToEdit(null); // Reset the form after saving
  };

  const handleEdit = (contact: any) => {
    setContactToEdit(contact); // Set the contact to be edited
    setShowForm(true); // Show the form when editing
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Contact Page</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 mb-4"
        onClick={() => {
          setContactToEdit(null); // Ensure form is reset when creating a new contact
          setShowForm(!showForm);
        }}
      >
        {showForm ? 'Close Form' : 'Create Contact'}
      </button>

      {showForm && (
        <ContactForm
          contactToEdit={contactToEdit} // Pass the contact to edit to the form
          onSave={handleSave}
        />
      )}

      <ContactList onEdit={handleEdit} /> {/* Pass the handleEdit function to ContactList */}
    </div>
  );
};

export default ContactPage;
