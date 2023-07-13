import { useState } from 'react';
import { INote } from '../interfaces';

function Notes() {
  const [notes, setNotes] = useState<INote | null>(null);

  return (
    <div>Notes</div>
  )
}

export default Notes;
