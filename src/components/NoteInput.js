import React from 'react';

function NoteInput({ value, onChange, onSubmit, isEditing }) {
  return (
    <div className="input-container">
      <textarea
        value={value}
        onChange={onChange}
        placeholder="Enter your note..."
      />
      {isEditing ? (
        <button onClick={onSubmit}>Update Note</button>
      ) : (
        <button onClick={onSubmit}>Add Note</button>
      )}
    </div>
  );
}

export default NoteInput;
