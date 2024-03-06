import React from 'react';
import NoteListItem from './NoteListItem';

function NoteList({ notes, onEdit, onDelete }) {
  return (
    <ul className="note-list">
      {notes.map((note, index) => (
        <NoteListItem
          key={index}
          note={note}
          index={index}
          onEdit={() => onEdit(index)}
          onDelete={() => onDelete(index)}
        />
      ))}
    </ul>
  );
}

export default NoteList;
