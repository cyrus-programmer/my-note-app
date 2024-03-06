import React from 'react';
import { FaTrash } from 'react-icons/fa';

function NoteListItem({ note, onEdit, onDelete, index }) {
  return (
    <li>
         <div className='serial'><p>{index+1} </p></div>
      <span onClick={onEdit}> {note}</span>
      <FaTrash className="delete-icon" onClick={onDelete} />
    </li>
  );
}

export default NoteListItem;
