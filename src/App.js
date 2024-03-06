import React, { useState } from 'react';
import './style.css';
import NoteInput from './components/NoteInput';
import NoteList from './components/NoteList';

function NoteTakingApp() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState('');
  const [editingNoteIndex, setEditingNoteIndex] = useState(null);

  const handleAddNote = () => {
    if (currentNote.trim() !== '') {
      setNotes([...notes, currentNote]);
      setCurrentNote('');
    }
  };

  const handleEditNote = (index) => {
    setCurrentNote(notes[index]);
    setEditingNoteIndex(index);
  };

  const handleUpdateNote = () => {
    if (currentNote.trim() !== '') {
      const updatedNotes = [...notes];
      updatedNotes[editingNoteIndex] = currentNote;
      setNotes(updatedNotes);
      setCurrentNote('');
      setEditingNoteIndex(null);
    }
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div className="note-taking-app">
      <h1 className='title'>Note Taking App</h1>
      <NoteInput
        value={currentNote}
        onChange={(e) => setCurrentNote(e.target.value)}
        onSubmit={editingNoteIndex !== null ? handleUpdateNote : handleAddNote}
        isEditing={editingNoteIndex !== null}
      />
      <NoteList
        notes={notes}
        onEdit={handleEditNote}
        onDelete={handleDeleteNote}
      />
    </div>
  );
}

export default NoteTakingApp;
