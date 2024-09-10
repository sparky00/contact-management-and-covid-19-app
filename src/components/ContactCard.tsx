import React from 'react';

interface Props {
  contact: any;
  onDelete: () => void;
  onEdit: () => void; // New prop for the edit functionality
}

const ContactCard: React.FC<Props> = ({ contact, onDelete, onEdit }) => {
  return (
    <div className="p-4 bg-white shadow mb-4">
      <p>{contact.firstName} {contact.lastName}</p>
      <p>Status: {contact.status}</p>
      <div className="space-x-4">
        <button className="bg-red-500 text-white px-4 py-2" onClick={onDelete}>
          Delete
        </button>
        <button className="bg-yellow-500 text-white px-4 py-2" onClick={onEdit}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
