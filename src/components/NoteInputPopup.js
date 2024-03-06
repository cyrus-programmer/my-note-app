import React, { useState } from 'react';
import '../style.css';

function NoteInputPopup({ show, onClose, onAddNote }) {
  const [newNote, setNewNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newNote.trim() !== '') {
      onAddNote(newNote);
      setNewNote('');
    }
  };

  return (
    <div className={`popup ${show ? 'show' : ''}`}>
      <div className="popup-content">
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <h2>Add Note</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Enter your note..."
          />
          <button type="submit">Add Note</button>
        </form>
      </div>
    </div>
  );
}

export default NoteInputPopup;
